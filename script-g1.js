var srcImages = ["k1.png", "k2.png","k3.png", "k4.png", "k5.png", "k6.png","k7.png", "k8.png", "k9.png", "k10.png"]

var documentDelka = document.documentElement.clientWidth;
var documentVyska = document.documentElement.clientHeight;
var malaObrazovka = window.matchMedia("(max-width: 600px)");

if (malaObrazovka.matches) {
var delkaX = documentDelka * 0.15;
} else {
var delkaX = documentDelka * 0.05;
}

var kruhX;
var kruhY;

var skore = 0;
var hraBezi = true;
var i = 0;

var skoreNapis = document.getElementById("skore");
var tlacitkoZnovu = document.getElementById("tlacitkoZnovu");

var tlacitka = [document.getElementById("button1"), document.getElementById("button2"),  document.getElementById("button3"), document.getElementById("button4")]

var napis = document.getElementById("napis-postreh");
var tlacitkoDomu = document.getElementById("domu-postreh");
var anchorDomu = document.getElementById("anchor-postreh");


function VytvorKruh() {
    if (i == 0) {
        for (i = 0; i < tlacitka.length; i++) {
            tlacitka[i].remove();
        }
        Schovat([napis, tlacitkoDomu, anchorDomu]);
        Zviditelnit([skoreNapis]);
    }
    if (hraBezi) {
    var kruh = document.createElement("img");

    var index = Math.floor(Math.random() * srcImages.length);
    var source = srcImages[index];

    kruh.setAttribute("src", "images/" + source);
    kruh.setAttribute("id", "Kruh" + i);
    kruh.setAttribute("class", "kruh");
    kruh.setAttribute("onclick", "PriKliknuti(event)");
    document.body.appendChild(kruh);

    kruhX = Math.floor(Math.random() *(documentDelka - delkaX));
    kruhY = Math.floor(Math.random() * (documentVyska - delkaX));

    kruh.style.left = kruhX + "px";
    kruh.style.top = kruhY + "px";

    i++;
}
}

function PriKliknuti(event) {
    document.getElementById(event.target.id).remove();

    skore ++;
    if (skore < 10) {
    skoreNapis.textContent = "0" + skore;
    } else {
    skoreNapis.textContent = skore;
    }
    var kruhy = document.getElementsByClassName("kruh");
    if (kruhy.length == 0) {
    Zviditelnit([napis]);
    napis.style.marginTop = "50px";
    napis.textContent = "Uklizeno!";

    hraBezi = false;

    setTimeout(function(){
    Zviditelnit([tlacitkoZnovu, tlacitkoDomu, anchorDomu]);
    tlacitkoZnovu.style.marginTop = "50px";
    }, 1000)
    }
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
