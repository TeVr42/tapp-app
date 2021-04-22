var srcImages = ["k1.png", "k2.png","k3.png", "k4.png", "k5.png", "k6.png","k7.png", "k8.png", "k9.png", "k10.png"]

var documentDelka = document.documentElement.clientWidth;
var documentVyska = document.documentElement.clientHeight;
var malaObrazovka = window.matchMedia("(max-width: 600px)");

if (malaObrazovka.matches) {
var delkaX = documentDelka * 0.10;
var delkaY = documentVyska * 0.1;
} else {
var delkaX = documentDelka * 0.05;
var delkaY = documentVyska * 0.15;
}
var kruhX;
var kruhY;

var skore = 0;
var hraBezi = true;
var i = 0;

var skoreNapis = document.getElementById("skore");
var tlacitkoZnovu = document.getElementById("tlacitkoZnovu");
var tlacitko1 = document.getElementById("button1");
var tlacitko2 = document.getElementById("button2");
var tlacitko3 = document.getElementById("button3");
var tlacitko4 = document.getElementById("button4");
var napis = document.getElementById("napis-postreh");
var tlacitkoDomu = document.getElementById("domu-postreh");
var anchorDomu = document.getElementById("anchor-postreh");


function VytvorKruh(event) {
    if (i == 0) {
        tlacitko1.remove();
        tlacitko2.remove();
        tlacitko3.remove();
        tlacitko4.remove();
        napis.style.visibility = "hidden";
        skoreNapis.style.visibility = "visible";
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
    kruhY = Math.floor(Math.random() * (documentVyska - delkaY));

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
    napis.style.visibility = "visible";
    napis.style.marginTop = "50px";
    napis.textContent = "Uklizeno!";

    hraBezi = false;

    setTimeout(function(){
    tlacitkoZnovu.style.visibility = "visible";
    tlacitkoDomu.style.visibility = "visible";
    anchorDomu.style.visibility = "visible";
    tlacitkoDomu.style.marginTop = "-100px";
    tlacitkoZnovu.style.marginTop = "50px";
    }, 1000)
    }
}

function HratZnovu(event) {
    location.reload();
}
