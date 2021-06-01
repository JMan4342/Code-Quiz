var startBtn = document.querySelector("#startBtn")
var startQuiz = document.querySelector("#start-quiz")
var quiz = document.querySelector("#quiz")
var timer = document.querySelector("#timer")

// Shows/hides opening message/button and first question
startBtn.addEventListener("click", function (e) {
    startQuiz.classList.add("hidden");
    quiz.classList.remove("hidden");

})

// Starts and ends timer
var secondsLeft = 60;
startBtn.addEventListener("click", function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of timer
        clearInterval(timerInterval);
      }
  
    }, 1000);
  })