var startBtn = document.querySelector("#startBtn");
var startQuiz = document.querySelector("#start-quiz");
var quiz = document.querySelector("#quiz");
var timer = document.querySelector("#timer");
var highScore = document.querySelector("#highScore");
var viewHighscore = document.querySelector("#viewHighscore");
var scoreTable = document.querySelector("#scoreTable");
var highScoreList = document.querySelector("#highScoreList");
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
var form = document.querySelector("#form");
var initialsField = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var finalScore = document.querySelector("#finalScore");
var clearHighScoreBtn = document.querySelector("#clearHighScoreBtn");
var returnStartBtn = document.querySelector("#returnStartBtn");
var restartBtn = document.querySelector("#restartBtn");
var questionIndex = 0;
var answerIndex = 0;
var correctAnswerIndex = 0;
var currentScore = 0;

// Shows/hides opening message/button and first question
startBtn.addEventListener("click", function (e) {
  startQuiz.classList.add("hidden");
  viewHighscore.classList.add("hidden");
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

    if (secondsLeft <= 0) {
      // Stops execution of timer
      quizCompleteMessage();
      clearInterval(timerInterval);
    }
  }, 1000);
});

// Quiz questions set as arrays
var questions = [
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: {
      a: "To close your JavaScript code.",
      b: "Storing numbers, dates, or other values.",
      c: "To run a function.",
      d: "None of the above",
    },
    correctAnswer: "Storing numbers, dates, or other values.",
  },
  {
    question: "What needs to be placed between <> in your HTML file to use JavaScript?",
    answers: {
      a: "script",
      b: "java",
      c: "run",
      d: "style",
    },
    correctAnswer: "script",
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World'?",
    answers: {
      a: " println ('Hello World')",
      b: "response.write('Hello World')",
      c: "System.out.println('Hello World')",
      d: "document.write('Hello World')",
    },
    correctAnswer: "document.write('Hello World')",
  },
  {
    question: "Using _______ statement is how you test for a specific condition.",
    answers: {
      a: "For",
      b: "If",
      c: "Var",
      d: "Switch",
    },
    correctAnswer: "If",
  },
  {
    question: "To save an object in local storage, which syntax will you need to use?",
    answers: {
      a: "setItem(key, value)",
      b: "save(key, value)",
      c: "upload(key, value)",
      d: "export(key, value)",
    },
    correctAnswer: "setItem(key, value)",
  },
  {
    question: "How would you activate a function with a click of the mouse?",
    answers: {
      a: "var click = run.function",
      b: "mouseover.addEventListener.function",
      c: "Element.addEventListener('click', function)",
      d: "Element.addEventListener('submit', function)",
    },
    correctAnswer: "Element.addEventListener('click', function)",
  },
  {
    question: "What is considered a string data type?",
    answers: {
      a: "16",
      b: "'16'",
      c: "sixteen",
      d: "function(16)",
    },
    correctAnswer: "'16'",
  },
  {
    question: "A function is...",
    answers: {
      a: "needed for all JavaScript code.",
      b: "is placed in your HTML file.",
      c: "used to start all JavaScript code.",
      d: "a block of code designed to perform a particular task.",
    },
    correctAnswer: "a block of code designed to perform a particular task.",
  },
  {
    question: "What is JSON?",
    answers: {
      a: "A format for storing and transporting data.",
      b: "A JavaScript DOM.",
      c: "A third party API.",
      d: "An older progamming language JavaScript is based off of.",
    },
    correctAnswer: "A format for storing and transporting data.",
  },
  {
    question: "What is the correct syntax for an array?",
    answers: {
      a: "{}",
      b: "()",
      c: "[]",
      d: "<>",
    },
    correctAnswer: "[]",
  },
];

// Render questions and answers on page.
function renderQuestion() {
  var question = questions[questionIndex];
  var answers = questions[answerIndex];
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
      setTimeout(function () {
        correct.classList.add("hidden");
      }, 750);
      // Increase score for right answer.
      currentScore++;
      score.textContent = currentScore;
    } else {
      wrong.classList.remove("hidden");
      setTimeout(function () {
        wrong.classList.add("hidden");
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

// Quiz completion message
function quizCompleteMessage() {
  completion1.classList.remove("hidden");
  quiz.classList.add("hidden");
  scoreboard.classList.add("hidden");
  clock.classList.add("hidden");
  finalScore.textContent = currentScore;
}

let itemsArray = [];

// Save initials in local storage
function saveResponses(e) {
  e.preventDefault();
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscores.push({
    initial: initialsField.value,
    score: currentScore,
  });
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Send initials and score to local storage, 
submitButton.addEventListener("click", saveResponses)


// Restart back to start page.
restartBtn.addEventListener("click", function (e) {
  completion1.classList.add("hidden");
  startQuiz.classList.remove("hidden");
  viewHighscore.classList.remove("hidden");
});

// Add initials and score from local storage to highscore list
var listHighScore = function () {
  let object = JSON.parse(localStorage.getItem("highscores"));
  for (let i = 0; i < object.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(
      `${object[i].initial}: ${object[i].score}`
    );
    li.appendChild(text);
    highScoreList.appendChild(li);
  }
};

// Click 'view highscore' to view list
viewHighscore.addEventListener("click", function (e) {
  viewHighscore.classList.add("hidden");
  scoreTable.classList.remove("hidden");
  highScoreList.classList.remove("hidden");
  clearHighScoreBtn.classList.remove("hidden");
  returnStartBtn.classList.remove("hidden");
  startQuiz.classList.add("hidden");
  highScore.classList.add("hidden");
  listHighScore();
});

clearHighScoreBtn.addEventListener("click", function (e) {
  localStorage.clear();
  highScoreList.innerHTML = "";
})

returnStartBtn.addEventListener("click", function (e) {
  viewHighscore.classList.remove("hidden");
  scoreTable.classList.add("hidden");
  highScoreList.classList.add("hidden");
  clearHighScoreBtn.classList.add("hidden");
  returnStartBtn.classList.add("hidden");
  startQuiz.classList.remove("hidden");
  highScore.classList.remove("hidden");
})