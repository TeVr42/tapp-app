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
    Schovat([napis, tlacitkoDomu]);
    Zviditelnit([bilyKruh]);
    var nahodnyCas = Math.floor(Math.random() * 8000) + 500;
    setTimeout(SpustitOdpocet, nahodnyCas);
}

function SpustitOdpocet() {
    if (hraBezi) {
    Schovat([bilyKruh]);
    Zviditelnit([velkyKruh]);
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
    Zviditelnit([napis, tlacitkoZnovu, tlacitkoDomu]);
    Schovat([velkyKruh, bilyKruh]);
    tlacitkoZnovu.style.marginTop = "50px";

}

function Schovat(elements) {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "hidden";
    }
}

function Zviditelnit(elements) {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.visibility = "visible";
    }
}

function HratZnovu() {
    location.reload();
}
