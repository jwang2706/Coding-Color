console.log("Inizio esecuzione");

let d = new Date();
console.log(d);

document.getElementById("saluto").innerHTML = d.getDay();
d.getDay();

let colori = [];
let colori2 = new Array();

function elabora() {
    let numero = document.getElementById("inNumber").value;
    alert(numero);

    if (numero >= 0 && numero <= 255) {
        colori.push(numero);
        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;
        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " + colori;
        console.log(colori);
     if (colori.length ==3){
      
     }
    } else {
        document.getElementById("error").innerHTML =
            "Il numero non è corretto";
        document.getElementById("outText").innerHTML = "";
    }
}

function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerText = "";
}
