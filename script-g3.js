var bilyKruh = document.getElementById("bily-kruh");
var velkyKruh = document.getElementById("kruh-tlacitko");

var tlacitkoZnovu = document.getElementById("tlZnovu");
var tlacitkoHrat = document.getElementById("tlHrat");
var napis = document.getElementById("napis-rychlost");
var stopkyNapis = document.getElementById("stopky");
var tlacitkoDomu = document.getElementById("domu-rychlost");

var start;
var hraBezi = true;

function Hrat() {
    tlacitkoHrat.remove();
    napis.style.visibility = "hidden";
    bilyKruh.style.visibility = "visible";
    tlacitkoDomu.style.visibility = "hidden";
    var nahodnyCas = Math.floor(Math.random() * 8000) + 500;
    setTimeout(SpustitOdpocet, nahodnyCas);
}

function SpustitOdpocet() {
    if (hraBezi) {
    velkyKruh.style.visibility = "visible";
    bilyKruh.style.visibility = "hidden";
    start = Date.now();
    }
}

function PredcasneKliknuti() {
    Konec();
    napis.textContent = "Moc brzo!";
}

function SpravneKliknuti() {
    Konec();
    var prodleva = (Date.now() - start) + " milisekund";
    napis.textContent = prodleva;
    napis.style.fontSize = "3rem";
}


function Konec() {
    hraBezi = false;
    napis.style.visibility = "visible";
    tlacitkoZnovu.style.visibility = "visible";
    velkyKruh.style.visibility = "hidden";
    bilyKruh.style.visibility = "hidden";
    tlacitkoZnovu.style.marginTop = "50px";
    tlacitkoDomu.style.visibility = "visible";
}

function HratZnovu() {
    location.reload();
}
