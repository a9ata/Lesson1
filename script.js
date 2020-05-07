var convert = document.getElementById("convert");
var celsii = document.getElementById("celsii");
var farengeuty = document.getElementById("farengeuty");

function rabota(){
    var temperatura = Number(celsii.value);
    farengeuty.value = temperatura * (9 / 5) + 32;
}

rabota();

convert.addEventListener("click", rabota);