const { run } = require('jest');
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//console.log(correctAnswer); 0
//console.log(typeof correctAnswer);

//TODO: Variables for Part 2

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? "
]

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync'); 
let candidateName = input.question("What is your name?: ");
console.log("Hello " + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
  const input = require('readline-sync'); 
  this.candidateAnswers = [];
  // let candidateAnswers = input.question(questions[i], correctAnswers[j]);
  for (i = 0; i < questions.length; i++) { 
    this.candidateAnswers.push(input.question(questions[i]));
    console.log("Your answer: " + this.candidateAnswers[i]);
    // for (j = 0; j < correctAnswers.length - 4; j++) {
    //   //let correctAnswers = candidateAnswers
    //   //let candidateAnswers = input.question(questions[i]);
       console.log("Correct Answer: " + correctAnswers[i]);
    // }
  }
  // console.log(this.candidateAnswers);
}
    
  
function gradeQuiz(Answers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//console.log(`Here are your responses: ${askQuestion(candidateAnswers)}`);
  // askQuestion()
  let grade = 0; 
  // let calculatedGrade = 5/5 * 100;  //TODO 3.2 use this variable to calculate the candidates score.

for (let i = 0; i < questions.length; i++) { 
  if (Answers[i].toLowerCase() === correctAnswers[i].toLowerCase()) { 
    grade++;
    console.log("You are correct")
  // let calculatedGrade = 5/5 * 100;
  // grade++;
} else { 
  console.log("You are incorrect");
}
}
/* this.candidateAnswers.push */  let calculatedGrade = grade / 5 * 100;
//console.log(typeof calculatedGrade)
//console.log(calculatedGrade + "%");
// console.log(calculatedGrade)
 if (calculatedGrade === 100) { 
  console.log(`Your score is ${calculatedGrade + "%"}, you have passed the quiz.`)
} else if (calculatedGrade === 80) { 
  console.log(`Your score is ${calculatedGrade + "%"}, you have failed the quiz. Please try again. `)
} else if (calculatedGrade === 60) { 
  console.log(`Your score is ${calculatedGrade + "%"}, you have failed the quiz. Please try again.`)
} else if (calculatedGrade === 40) { 
  console.log(`Your score is ${calculatedGrade + "%"}, you have failed the quiz. Please try again.`)
} else if (calculatedGrade === 20) { 
  console.log(`Your score is ${calculatedGrade + "%"}, you have failed the quiz. Please try again.`)
} else if (calculatedGrade === 0) { 
 console.log(`Your score is ${calculatedGrade + "%"}, you have failed the quiz. Please try again.`)
}
return calculatedGrade;
}
//console.log(typeof calculatedGrade)



function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  //console.log("Hello " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
//return runProgram()
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