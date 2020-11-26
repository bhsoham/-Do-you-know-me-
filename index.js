var readlineSync = require("readline-sync");

var score=0;

console.log("Welcome to 'Do You Know SOHAM'?");
console.log("------------------------------")

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer.toLowerCase()===answer){
    console.log("RIGHT!");
    score++;
  }else {
    console.log("WRONG!")
  }
  console.log("Your current score is: ",score);
  console.log("-------------------------");
}


var questions=[{
  question:"Which city do I live in? ",
  answer:"kolkata",
},{
  question:"Which college am I studying in (abbreviation)? ",
  answer:"vit",
},{
  question:"Am I older than 19? ",
  answer:"yes",
}]

for (var i =0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! Your final score is: ",score,"/ 3")