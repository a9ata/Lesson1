var convert = document.getElementById("convert");
var celsii = document.getElementById("celsii");
var farengeuty = document.getElementById("farengeuty");
 
function rabota(){
    var temperatura = Number(celsii.value);
    farengeuty.value = temperatura * (9 / 5)  + 32;
    convert.addEventListener("click", rabota);
}



var containerone = document.getElementsByClassName("containerone")[0];
var row, column, square;

for(row = 0; row < 8; ++row){
    for(column = 0; column < 8; ++column){
        square = document.createElement("div");
        if((row + column) % 2 == 0){
            square.classList.add("black")
        }
        square.classList.add("kvadratik");
        containerone.appendChild(square);
    }
}
