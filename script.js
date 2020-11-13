
var counter = 0;
var interval = setInterval(function() {
    counter++;
    if (counter == 5) {
        clearInterval(interval);
    }
}, 1000);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  //first thing is to hide the start screen 
  //Then show the question(s)
  //Start the timer and begin quiz
  showQuestions() 
} 

function showQuestions(questions, quizContainer){
    // code will go here
    
}

function showResults(questions, quizContainer, resultsContainer){
    // code will go here
}

// show the questions
showQuestions(questions, quizContainer);

// when user clicks submit, show results
submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}
