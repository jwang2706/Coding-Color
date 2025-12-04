console.log("Inizio esecuzione");
 function(){
let numero = document.getElementById("InNumber").value;
    alert(numero);
 }
if (numero >= 0 && numero <= 255){
 document.getElementById("outText").innerHTML= "Hai inserito il" + "numero"+ numero;
}
else {
 document.getElementById("error").innerHTML= "Hai numero non è corretto";
}
function reset(){
 document.getElementById("inNumber").value = "";
}


