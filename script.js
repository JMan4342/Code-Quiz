var startBtn = document.querySelector("#startBtn");
var startQuiz = document.querySelector("#start-quiz");
var quiz = document.querySelector("#quiz");
var timer = document.querySelector("#timer");
var scoreboard = document.querySelector("#scoreboard");
var clock = document.querySelector("#clock");
var questionText = document.querySelector("#question-text");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var score = document.querySelector("#score");
var completion1 = document.querySelector("#completion1");
var completion2 = document.querySelector("#completion2");
var questionIndex = 0;
var answerIndex = 0;
var correctAnswerIndex = 0;
var currentScore = "";

// Shows/hides opening message/button and first question
startBtn.addEventListener("click", function (e) {
  startQuiz.classList.add("hidden");
  quiz.classList.remove("hidden");
  scoreboard.classList.remove("hidden");
  clock.classList.remove("hidden");
  renderQuestion();
});

// Starts and ends timer
var secondsLeft = "";
var timerInterval = "";
startBtn.addEventListener("click", function setTime() {
  // Sets interval in variable
  secondsLeft = 60;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if (secondsLeft === 0) {
      // Stops execution of timer
      timeupMessage();
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
    correctAnswer: "2",
  },
  {
    question: "How many eyes do humans have?",
    answers: {
      a: "2",
      b: "3",
      c: "10",
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
  {
    if (e.target.innerHTML === questions[questionIndex].correctAnswer) {
        correct.classList.remove("hidden");
        setTimeout(function(){correct.classList.add("hidden");
      }, 750);
        // Increase score for right answer.
      currentScore++;
      score.textContent = currentScore;
    } 
    else {
      wrong.classList.remove("hidden");
      setTimeout(function(){wrong.classList.add("hidden");
    }, 750);
    {
        // Time penalty from wrong answer.
        secondsLeft -= 10;
        timer.textContent = secondsLeft;
      }
    }
  }
  // Cycles through question and answer arrays
  questionIndex++;
  answerIndex++;
  if (questionIndex < questions.length) {
    renderQuestion();
  } else {
    quizCompleteMessage();
    clearInterval(timerInterval);
  }
}

optionA.addEventListener("click", checkAnswer);
optionB.addEventListener("click", checkAnswer);
optionC.addEventListener("click", checkAnswer);
optionD.addEventListener("click", checkAnswer);

// Time out completion message
function timeupMessage() {
  completion1.classList.remove("hidden");
  quiz.classList.add("hidden");
  scoreboard.classList.add("hidden");
  clock.classList.add("hidden");
  score.textContent = currentScore;
  console.log(currentScore);
}

// Quiz completion message
function quizCompleteMessage() {
  completion2.classList.remove("hidden");
  quiz.classList.add("hidden");
  scoreboard.classList.add("hidden");
  clock.classList.add("hidden");
  score.textContent = currentScore;
  console.log(currentScore);
}
