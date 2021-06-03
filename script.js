var startBtn = document.querySelector("#startBtn");
var startQuiz = document.querySelector("#start-quiz");
var quiz = document.querySelector("#quiz");
var timer = document.querySelector("#timer");
var questionText = document.querySelector("#question-text");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var questionIndex = 0;
var answerIndex = 0;
var correctAnswerIndex = 0;
// var lastQuestion = questions.length - 1;

// Shows/hides opening message/button and first question
startBtn.addEventListener("click", function (e) {
  startQuiz.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
  // checkAnswer();
  // next()
  // question.classList.remove("hidden");
  // optionA.classList.remove("hidden");
  // optionB.classList.remove("hidden");
  // optionC.classList.remove("hidden");
  // optionD.classList.remove("hidden");
});

// Starts and ends timer
var secondsLeft = 60;
startBtn.addEventListener("click", function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of timer
      clearInterval(timerInterval);
    }
  }, 1000);
});

// Quiz questions set as arrays
var questions = [
  {
    question: "How many ears do humans have?",
    answers: {
      a: "5",
      b: "3",
      c: "2",
      d: "4",
    },
    correctAnswer: "c",
  },
  {
    question: "How many eyes do humans have?",
    answers: {
      a: "2",
      b: "3",
      c: "2",
      d: "4",
    },
    correctAnswer: "a",
  },
  {
    question: "How many toes do humans have?",
    answers: {
      a: "2",
      b: "13",
      c: "6",
      d: "10",
    },
    correctAnswer: "d",
  }, 
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  // }
  // {
  //   question: ""
  //   optionA: ""
  //   optionB: ""
  //   optionC: ""
  //   optionD: ""
  //   answer: ""
  //
];
// Render questions and answers on page.
function renderQuestion() {
  var question = questions[questionIndex];
  var answers = questions[answerIndex];
  // console.log(question)
  questionText.textContent = question.question;
  optionA.textContent = answers.answers.a;
  optionB.textContent = answers.answers.b;
  optionC.textContent = answers.answers.c;
  optionD.textContent = answers.answers.d;
}

// function checkAnswer() {
  //   var correctAnswer = questions[correctAnswerIndex]
  //   console.log("Hello")
  //   if (userAnswers[0] === correctAnswer[correctAnswerIndex]) {
    //     alert("Correct!")
    //   }
    
    //   renderQuestion();
    // }
    
// Verify correct answer.
var correctAnswer = questions[correctAnswerIndex];
optionA.addEventListener("click", function checkAnswer() {
  if (optionA == correctAnswer[0]) {
    alert("Correct!");
  } else alert("Wrong!");
});

optionB.addEventListener("click", function checkAnswer() {
  if (optionB == correctAnswer[0]) {
    alert("Correct!");
  } else alert("Wrong!");
});

optionC.addEventListener("click", function checkAnswer() {
  if (optionC == correctAnswer[0]) {
    alert("Correct!");
  } else alert("Wrong!");
});

optionD.addEventListener("click", function checkAnswer() {
  if (optionD == correctAnswer[0]) {
    alert("Correct!");
  } else alert("Wrong!");
});
