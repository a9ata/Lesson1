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
