console.log("Inizio esecuzione");

let d = new Date();
console.log(d);

document.getElementById("saluto").innerHTML = d.toLocaleString();

let colori = [];
let colori2 = new Array();

function elabora() {
    let numero = Number(document.getElementById("inNumber").value);
    alert(numero);

    if (numero >= 0 && numero <= 255) {
        colori.push(numero);

        document.getElementById("outText").innerHTML =
            "Hai inserito il numero " + numero;
        document.getElementById("outText").innerHTML +=
            "<br>I colori inseriti sono: " + colori;

        console.log(colori);

        
        if (colori.length >= 3) {
            let r = colori[colori.length - 3];
            let g = colori[colori.length - 2];
            let b = colori[colori.length - 1];
            let coloreRGB = `rgb(${r},${g},${b})`;

            document.getElementById("outText").style.color = coloreRGB;
            document.body.style.backgroundColor = coloreRGB;
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
    colori = [];
    document.body.style.backgroundColor = "#f2f2f2";
    document.body.style.color = "#222";
}
