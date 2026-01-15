console.log("Inizio esecuzione");


let d = new Date();
document.getElementById("saluto").innerHTML = d.toLocaleString();


let colori = [];

function elabora() {
    let input = document.getElementById("inNumber");
    let numero = Number(input.value);

    let outText = document.getElementById("outText");
    let error = document.getElementById("error");

    
    error.innerHTML = "";
    outText.innerHTML = "";

    // Controlli
    if (input.value === "" || isNaN(numero)) {
        error.innerHTML = "Inserisci un numero valido";
        return;
    }

    if (numero < 0 || numero > 255) {
        error.innerHTML = "Il numero deve essere compreso tra 0 e 255";
        return;
    }

   
    colori.push(numero);

    outText.innerHTML = "Hai inserito il numero: " + numero;
    outText.innerHTML += "<br>Colori inseriti: " + colori.join(", ");

    
    if (colori.length >= 3) {
        let r = colori[colori.length - 3];
        let g = colori[colori.length - 2];
        let b = colori[colori.length - 1];

        let coloreRGB = `rgb(${r}, ${g}, ${b})`;

        outText.style.color = coloreRGB;
        document.body.style.backgroundColor = coloreRGB;
    }

    input.value = "";
}

function reset() {
    document.getElementById("inNumber").value = "";
    document.getElementById("outText").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    colori = [];

    document.body.style.backgroundColor = "#f2f2f2";
    document.body.style.color = "#222";
}


        
