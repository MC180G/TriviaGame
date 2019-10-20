const question = document.getElementById("question").innerHTML 
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const correct = document.getElementById("correct");
const incorrect = document.getElementById("inc");


let questions = [
    {

        question : "Who are you?",
        answers : ["I am me.", "Anyone I want to be.", "I'm Batman."],
        correct:"A",
        
    },{
        question : "What is your purpose?",
        answers : ["I'm on a journey beyond sight and sound.", "To be.", "Rock and/or Roll.."],
        correct:"B",

    },{
        question : "Who won the Grammy for Best Album in 2001?",
        answers : ["Eminem", "N'Sync", "Steely Dan"],
        correct:"C",
    }
]

const lastQuestion = questions.length -1;
let currentQuestion = 0;

 function renderQuestion (question){


        for (let i = 0; i < questions.length; i++) {
            let h2 = $("<h2>").text(questions[i].question);
            $("#question").append(h2);
            for (let j = 0; j < questions[i].answers.length; j++) {
        ​
              let $form = $("<form>");
        ​
                let $input = $("<input>");
        ​
                $input.attr({
                  type: "radio",
                  name: "answer",
                  value: questions[i].answers[j],
                })
        ​
                let p = $("<p>").text(questions[i].answers[j])
                $("#question").append(p, $input);
            }}


function checkAnswer(answer) {
    if(answer == questions[correct]){
        correct++
    }
    else {
        inc++
    }
   
}

function scoreRender() {
    document.write("Answers correct:" + correct)
      document.write("Wrong Answers:" + inc)
}