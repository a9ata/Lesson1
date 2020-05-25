var question = document.getElementById("question");
var container = document.getElementById("container");
var questionCouter = 0;
var variantyIterator;
var otvity = [];
var correct = 0;

function loadQuestion(){
    question.innerHTML = Questions[questionCouter].text;
    for(variantyIterator = 0; variantyIterator < 4 ; ++variantyIterator){
        otvity[variantyIterator].innerHTML = Questions[questionCouter].varianty[variantyIterator];

    }
}

function proceedAnw(event){
    var index = event.target.index;
    if(Questions[questionCouter].correct == index){
        correct++;
    }
    questionCouter++;
    if(questionCouter == Questions.length){
        alert("Тест пройден");
        document.body.innerHTML = "<h1>Правильных ответов: " + correct + "/" + Questions.length + "</h1>";
    }else{
        loadQuestion();
    }
}


for(variantyIterator = 0; variantyIterator < 4 ; ++variantyIterator){
    var option = document.createElement("div");
    option.classList.add("pole", "anw");
    option.index = variantyIterator;
    option.addEventListener("click", proceedAnw);
    container.appendChild(option);
    otvity.push(option);
}

loadQuestion();