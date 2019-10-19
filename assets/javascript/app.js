const question = document.getElementById("questions");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("inc");

let questions = [
    {

        question : "Who are you?",
        choiceA : "I am me.",
        choiceB : "Anyone I want to be.",
        choiceC: "I'm Batman.",
        correct:"A",
        
    },{
        question : "What is your purpose?",
        choiceA : "I'm on a journey beyond sight and sound.",
        choiceB : "To be.",
        choiceC: "Rock and/or Roll..",
        correct:"B",

    },{
        question : "Who won the Grammy for Best Album in 2001?",
        choiceA : "Eminem",
        choiceB : "N'Sync",
        choiceC: "Steely Dan",
        correct:"C",
    }
]

const lastQuestion = questions.length -1;
let currentQuestion = 0;

function renderQuestion (){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

function checkAnswer(answer) {
    if(answer == questions[currentQuestion].correct){
        correct++
    }
    else {
        inc++
    }
    if (currentQuestion < lastQuestion) {
        currentquestion++
    }
}

function scoreRender() {
    document.write("Answers correct:" + correct)
      document.write("Wrong Answers:" + inc)
}