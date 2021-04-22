var zdrojeObrazku = ["k1.png", "k3.png", "k5.png", "k7.png", "k8.png", "k10.png"]

var documentSirka = document.documentElement.clientWidth;
var documentVyska = document.documentElement.clientHeight;
var malaObrazovka = window.matchMedia("(max-width: 600px)");

var delkaX = documentSirka * 0.11;
var delkaY = documentVyska * 0.11;
var kruhX;
var kruhY;

var skore = 5;
var hraBezi = true;
var i = 0;
var vteriny = 0;
var minuty = 0;

var velkyKruh = document.getElementById("velky-kruh");
velkyKruh.style.visibility = "hidden";
var hlavniBarva;

var tlacitkoZnovu = document.getElementById("tZnovu");
var tlacitkoHrat = document.getElementById("tHrat");
var napis = document.getElementById("napis-presnost");
var casNapis = document.getElementById("casovac");
var tlacitkoDomu = document.getElementById("domu-presnost");

function Hrat(event) {
    var index = Math.floor(Math.random() * zdrojeObrazku.length);
    var zdroj = zdrojeObrazku[index];
    hlavniBarva = "images/" + zdroj;
    velkyKruh.setAttribute("src", hlavniBarva);
    zdrojeObrazku.splice(index, 1);

    tlacitkoHrat.remove();
    napis.style.visibility = "hidden";
    velkyKruh.style.visibility = "visible";
    casNapis.style.visibility = "visible";
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
    var ciziKruh = document.createElement("img");

    var index = Math.floor(Math.random() * zdrojeObrazku.length);
    var zdroj = zdrojeObrazku[index];

    ciziKruh.setAttribute("src", "images/" + zdroj);
    ciziKruh.setAttribute("id", "Kruh" + i);
    ciziKruh.setAttribute("class", "kruh");
    ciziKruh.setAttribute("onclick", "SpatneKliknuti(event)");
    document.body.appendChild(ciziKruh);
    VymazatKruh(event, ciziKruh);

    kruhX = Math.floor(Math.random() *(documentSirka - delkaX));
    kruhY = Math.floor(Math.random() * (documentVyska - delkaY));

    ciziKruh.style.left = kruhX + "px";
    ciziKruh.style.top = kruhY + "px";

    i++;
}
}

function VytvorVlastniKruh(event) {
    if (hraBezi) {
    var vlastniKruh = document.createElement("img");
    vlastniKruh.setAttribute("src", hlavniBarva);
    vlastniKruh.setAttribute("id", "Kruh" + i);
    vlastniKruh.setAttribute("class", "kruh");
    vlastniKruh.setAttribute("onclick", "SpravneKliknuti(event)");
    document.body.appendChild(vlastniKruh);
    VymazatKruh(event, vlastniKruh);

    kruhX = Math.floor(Math.random() *(documentSirka - delkaX));
    kruhY = Math.floor(Math.random() * (documentVyska - delkaY));

    vlastniKruh.style.left = kruhX + "px";
    vlastniKruh.style.top = kruhY + "px";

    i++;
}
}


function SpatneKliknuti(event) {
    skore = skore - 5;
    KlinutiNaKruh(event)
}


function SpravneKliknuti(event) {
    skore ++;
    KlinutiNaKruh(event)
}


function VymazatKruh(event, kruhKVymazani) {
    var rychlostVymazani;
    if (malaObrazovka.matches) { 
    rychlostVymazani = 600;
    } else {
    rychlostVymazani = 800;
    };
    setTimeout(function(){ kruhKVymazani.remove(); }, rychlostVymazani);
}

function KlinutiNaKruh(event) {
    document.getElementById(event.target.id).remove();
    var rychlost;
    if (malaObrazovka.matches) { 
    velkyKruh.style.width = 2 * skore + "%";
    } else {
    velkyKruh.style.width = skore + "%";
    }
    
    if (skore >= 25) {
        KonecHry();
        napis.textContent = "Výhra!";
    }
    if (skore <= 0) {
        KonecHry();
        napis.textContent = "Prohra!";
    }
}

function KonecHry(event) {
    hraBezi = false
    napis.style.visibility = "visible";
    var kruhy = document.getElementsByClassName("kruh");
    for (i = 0; i < kruhy.length; i++) {
    kruhy[i].remove();
    }
    velkyKruh.style.visibility = "hidden";

    setTimeout(function(){    tlacitkoZnovu.style.visibility = "visible";
    tlacitkoZnovu.style.marginTop = "50px";
    tlacitkoDomu.style.visibility = "visible";
    tlacitkoDomu.style.marginTop = "-20px";
    }, 2000)
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
