var bilyKruh = document.getElementById("bily-kruh");
var velkyKruh = document.getElementById("kruh-tlacitko");

var tlacitkoZnovu = document.getElementById("tlZnovu");
var tlacitkoHrat = document.getElementById("tlHrat");
var napis = document.getElementById("napis-rychlost");
var stopkyNapis = document.getElementById("stopky");
var tlacitkoDomu = document.getElementById("domu-rychlost");

var start;
var hraBezi = true;

function Hrat(event) {
    tlacitkoHrat.remove();
    napis.style.visibility = "hidden";
    bilyKruh.style.visibility = "visible";
    var nahodnyCas = Math.floor(Math.random() * 8000) + 500;
    setTimeout(SpustitOdpocet, nahodnyCas);
}

function SpustitOdpocet(event) {
    if (hraBezi) {
    velkyKruh.style.visibility = "visible";
    bilyKruh.style.visibility = "hidden";
    start = Date.now();
    }
}

function PredcasneKliknuti(event) {
    hraBezi = false;
    napis.style.visibility = "visible";
    napis.textContent = "Moc brzo!";
    tlacitkoZnovu.style.visibility = "visible";
    velkyKruh.style.visibility = "hidden";
    bilyKruh.style.visibility = "hidden";
    tlacitkoZnovu.style.marginTop = "50px";
}

function SpravneKliknuti(event) {
    hraBezi = false;
    napis.style.visibility = "visible";

    tlacitkoZnovu.style.visibility = "visible";
    velkyKruh.style.visibility = "hidden";
    bilyKruh.style.visibility = "hidden";
    tlacitkoZnovu.style.marginTop = "50px";
    tlacitkoDomu.style.visibility = "visible";
    
    var prodleva = (Date.now() - start) + " milisekund";

    napis.textContent = prodleva;
    napis.style.fontSize = "3rem";
}

function HratZnovu(event) {
    location.reload();
}
