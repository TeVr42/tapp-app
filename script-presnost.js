var zdrojeObrazku = ["k1.png", "k3.png", "k5.png", "k7.png", "k8.png", "k10.png"]

var documentSirka = document.documentElement.clientWidth;
var documentVyska = document.documentElement.clientHeight;
var malaObrazovka = window.matchMedia("(max-width: 600px)");

var delkaX = documentSirka * 0.11;
var delkaY = documentVyska * 0.11;
var kruhX;
var kruhY;

var skore = 6;
var hraBezi = true;
var i = 0;
var vteriny = 0;
var minuty = 0;
var rychlostVymazani;

var velkyKruh = document.getElementById("velky-kruh");
velkyKruh.style.visibility = "hidden";
var hlavniBarva;

var tlacitkoZnovu = document.getElementById("tZnovu");
var tlacitkoHrat1 = document.getElementById("tHrat1");
var tlacitkoHrat2 = document.getElementById("tHrat2");
var tlacitkoHrat3 = document.getElementById("tHrat3");
var napis = document.getElementById("napis-presnost");
var casNapis = document.getElementById("casovac");
var tlacitkoDomu = document.getElementById("domu-presnost");
var anchorDomu = document.getElementById("domu-a");
var napisProcenta = document.getElementById("procenta-presnost");

function Hrat(event, rychlost) {
    var index = Math.floor(Math.random() * zdrojeObrazku.length);
    var zdroj = zdrojeObrazku[index];
    rychlostVymazani = rychlost;
    hlavniBarva = "images/" + zdroj;
    velkyKruh.setAttribute("src", hlavniBarva);
    zdrojeObrazku.splice(index, 1);

    tlacitkoHrat1.remove();
    tlacitkoHrat2.remove();
    tlacitkoHrat3.remove();
    napis.textContent = "Tvá barva:";
    velkyKruh.style.visibility = "visible";
    casNapis.style.visibility = "visible";
    napisProcenta.style.visibility = "visible";
    setInterval(GenerujKruhy, 200);
    setInterval(PocitadloCasu, 1000)
}

function GenerujKruhy(event) {
    var nahodnaAkce = Math.floor(Math.random() * 2);
    if (nahodnaAkce == 0) {
        VytvorCiziKruh();
    } else {
        VytvorVlastniKruh();
    }
}

function VytvorCiziKruh(event) {
    if (hraBezi) {
    var index = Math.floor(Math.random() * zdrojeObrazku.length);
    var zdroj = zdrojeObrazku[index];
    var barva = "images/" + zdroj;
    VytvorKruh(event, barva, "KlinutiNaKruh(event, -5)");
}
}

function VytvorVlastniKruh(event) {
    if (hraBezi) {
    VytvorKruh(event, hlavniBarva, "KlinutiNaKruh(event, 1)");
}
}

function VytvorKruh(event, barva, akce) {
    kruh = document.createElement("img");
    kruh.setAttribute("src", barva);
    kruh.setAttribute("id", "Kruh" + i);
    kruh.setAttribute("class", "kruh");
    kruh.setAttribute("onclick", akce);
    document.body.appendChild(kruh);
    VymazatKruh(event, kruh);

    if (malaObrazovka.matches) {
    kruhX = Math.floor(Math.random() * 6) * documentSirka*0.14 + documentSirka*0.10;
    kruhY = documentVyska*0.55;
    } else {
    kruhX = Math.floor(Math.random() * 6) * documentSirka*0.10 + documentSirka*0.22;
    kruhY = documentVyska*0.75;
    }

    kruh.style.left = kruhX + "px";
    kruh.style.top = kruhY + "px";

    i++;
}

function VymazatKruh(event, kruhKVymazani) {
    setTimeout(function(){ kruhKVymazani.remove(); }, rychlostVymazani);
}

function KlinutiNaKruh(event, skoreUprava) {
    skore = skore + skoreUprava;
    document.getElementById(event.target.id).remove();
    var rychlost;
    if (malaObrazovka.matches) { 
    velkyKruh.style.width = 2 * skore + "%";
    } else {
    velkyKruh.style.width = skore + "%";
    }
    napisProcenta.textContent = skore * 5 + "%";
    if (skore >= 20) {
        KonecHry();
        napis.textContent = "Výhra!";
        napisProcenta.textContent = "100 %";
    }
    if (skore <= 0) {
        KonecHry();
        napis.textContent = "Prohra!";
        napisProcenta.textContent = "0 %";
    }
}

function KonecHry(event) {
    hraBezi = false
    napis.style.visibility = "visible";
    var kruhy = document.getElementsByClassName("kruh");
    for (i = 0; i < kruhy.length; i++) {
    kruhy[i].style.visibility = "hidden";
    }
    velkyKruh.remove();
    tlacitkoZnovu.style.visibility = "visible";
    tlacitkoDomu.style.visibility = "visible";
    anchorDomu.style.visibility = "visible";
    tlacitkoZnovu.style.marginTop = "50px";

}

function PocitadloCasu(event) {
    if (hraBezi){    
    vteriny ++;

    if (vteriny == 60) {
    vteriny = vteriny - 60;
    minuty ++;
    }
    if (minuty == 60) {
    hraBezi = false;
    }

    var napisVeteriny;
    var napisMinuty;
    if (vteriny < 10) {
        napisVeteriny = "0" + vteriny;
    } else {
        napisVeteriny = vteriny;
    }
    if (minuty < 10) {
        napisMinuty = "0" + minuty;
    } else {
        napisMinuty = minuty;
    }
    casNapis.textContent = napisMinuty + ":" + napisVeteriny;
    }
}
function HratZnovu(event) {
    location.reload();
}
