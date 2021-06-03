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

// Shows/hides opening message/button and first question
startBtn.addEventListener("click", function (e) {
  startQuiz.classList.add("hidden");
  quiz.classList.remove("hidden");
  renderQuestion();
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
// questions[0].answers.a //"5"
// questions[currentQuestion].correctAnswer === e.target.value 
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
    correctAnswer: "2",
  },
  {
    question: "How many eyes do humans have?",
    answers: {
      a: "2",
      b: "3",
      c: "2",
      d: "4",
    },
    correctAnswer: "2",
  },
  {
    question: "How many toes do humans have?",
    answers: {
      a: "2",
      b: "13",
      c: "6",
      d: "10",
    },
    correctAnswer: "10",
  }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
  // {
  //   question: "How many toes do humans have?",
  //   answers: {
  //     a: "2",
  //     b: "13",
  //     c: "6",
  //     d: "10",
  //   },
  //   correctAnswer: "d",
  // }, 
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
    
// Verify correct answer.
function checkAnswer(e) {
  // console.log(typeof e.target.innerHTML)
  if (e.target.innerHTML === questions[questionIndex].correctAnswer) {
    alert("Correct!");
    renderQuestion();
} else alert("Wrong!");
    renderQuestion();
}
optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);
optionD.addEventListener("click", checkAnswer);
