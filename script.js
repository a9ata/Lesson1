/*var convert = document.getElementById("convert");
var celsii = document.getElementById("celsii");
var farengeuty = document.getElementById("farengeuty");

function rabota(){
    var temperatura = Number(celsii.value);
    farengeuty.value = temperatura * (9 / 5) + 32;
}

rabota();


convert.addEventListener("click", rabota);

var checkbox = document.getElementById("toggle");
var lamp = document.getElementById("lamp");

checkbox.addEventListener("click", function(){
    console.log(checkbox.checked);
    if(checkbox.checked){
        alert("кнопка нажата!");
        lamp.style.backgroundColor = "yellow";
    }else{
        alert("кнопка не нажата!");
        lamp.style.backgroundColor = "black";
    }

    for(i=0; i < 5; ++i){
        alert(i);
    }
});
*/




var container3 = document.getElementsByClassName("container3")[0];
var row, column, square;

for(row = 0; row < 8; ++row){
    for(column = 0; column < 8; ++column){
        square = document.createElement("div");
        if((row + column) % 2 == 0){
            square.classList.add("black")
        }
        square.classList.add("kvadratik");
        container3.appendChild(square);
    }
}
