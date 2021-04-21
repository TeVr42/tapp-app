var zdrojeObrazku = ["k1.png", "k2.png","k3.png", "k4.png", "k5.png", "k6.png","k7.png", "k8.png", "k9.png", "k10.png"]
var vsechnyKruhy = [];

var documentSirka = document.documentElement.clientWidth;
var dokumntVyska = document.documentElement.clientHeight;

var delkaX = documentSirka * 0.11;
var delkaY = dokumntVyska * 0.11;
var kruhX;
var kruhY;

var skore = 0;
var hraBezi = true;
var i = 0;

var skoreNapis = document.getElementById("skore");
var tlacitkoZnovu = document.getElementById("tlacitkoZnovu");
var tlacitko1 = document.getElementById("tlacitko1");
var tlacitko2 = document.getElementById("tlacitko2");
var tlacitko3 = document.getElementById("tlacitko3");
var tlacitko4 = document.getElementById("tlacitko4");
var napis = document.getElementById("napis");

function VytvorKruh(event) {
    if (i == 0) {
        tlacitko1.style.visibility = "hidden";
        tlacitko2.style.visibility = "hidden";
        tlacitko3.style.visibility = "hidden";
        tlacitko4.style.visibility = "hidden";
        napis.style.visibility = "hidden";
        skoreNapis.style.visibility = "visible";
    }
    if (hraBezi) {
    var kruh = document.createElement("img");

    var index = Math.floor(Math.random() * zdrojeObrazku.length);
    var zdroj = zdrojeObrazku[index];

    kruh.setAttribute("src", "images/" + zdroj);
    kruh.setAttribute("id", "TentoKruh" + i);
    kruh.setAttribute("class", "kruh");
    kruh.setAttribute("onclick", "PriKliknuti(event)");
    document.body.appendChild(kruh);

    kruhX = Math.floor(Math.random() *(documentSirka - delkaX));
    kruhY = Math.floor(Math.random() * (dokumntVyska - delkaY));

    kruh.style.left = kruhX + "px";
    kruh.style.top = kruhY + "px";

    vsechnyKruhy.push(kruh);
    i++;
}
}

function PriKliknuti(event) {
    document.getElementById(event.target.id).remove();
    vsechnyKruhy.pop();
    skore ++;
    if (skore < 10) {
    skoreNapis.textContent = "0" + skore;
    } else {
    skoreNapis.textContent = skore;    
    }
    if (vsechnyKruhy.length == 0) {
    napis.style.visibility = "visible";
    tlacitkoZnovu.style.visibility = "visible";
    napis.style.marginTop = "50px";
    tlacitkoZnovu.style.marginTop = "50px";
    napis.textContent = "Uklizeno!";
    hraBezi = false;
    }
}

function HratZnovu(event) {
    location.reload();
}
