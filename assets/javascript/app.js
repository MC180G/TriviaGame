const question = document.getElementById("question").innerHTML 
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
//     for (var i=0;i < questions.length; i++) {
//         let h2=$("<h2>").text(questions[i].question)
        //           $("#question").append(h2);

        for (let i = 0; i < questions.length; i++) {
            let h2 = $("<h2>").text(questions[i].question);
            $("#questions").append(h2);
            for (let j = 0; j < questions[i].fields.length; j++) {
        ​
              let $form = $("<form>");
        ​
                let $input = $("<input>");
        ​
                $input.attr({
                  type: "radio",
                  name: "answer",
                  value: questions[i].fields[j],
                })
        ​
                let p = $("<p>").text(questions[i].fields[j])
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