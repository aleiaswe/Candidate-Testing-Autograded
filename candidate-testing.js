const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

console.log(correctAnswer); 
console.log(typeof correctAnswer);

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync'); 
let candidateName = input.question("What is your name?: ");
console.log("Hello " + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  let candidateAnswer = input.question(question);
  console.log(candidateAnswer);
  //console.log(typeof candidateAnswer); 
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
/*if (candidateAnswer === "Sally Ride") { 
  console.log("Your answer is correct!"); 
} else { 
  console.log("Your answer is incorrect. Please try again.");
} */
  if (candidateAnswer === correctAnswer) { 
    console.log("Your answer is correct!"); 
  } else if (candidateAnswer != correctAnswer) { 
    console.log("Your answer is incorrect.");
  }
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  //console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
return runProgram()
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};