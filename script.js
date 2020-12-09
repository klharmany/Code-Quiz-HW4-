const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')

  
var questions= [
    {Title: "'Tut, tut-fame clearly isn't...'" , options: ["what matters" , "worth anything " , "everything" , "going to help you" ] , Correctanswer: "everything"}, 

    {Title: "‘Or maybe,’ said a very cold voice right behind them, ‘he’s waiting to hear why you two didn’t arrive on…’" , options: ["the correct side of the castle" , "the Hogwarts Express " , "time" , "the school train" ] , Correctanswer: "the school train"}, 

    {Title: "‘The Dark Arts,’ said Snape, ‘are many, varied, ever-changing and …’" , options: ["everlasting" , "eternal " , "perpetual" , "indestructible" ] , Correctanswer: "eternal"},
 
    {Title: "'You think a joke-shop could supply him with such a thing? You don’t think it more likely that he got it directly from…'" , options: ["Prongs" , " the manufacturers " , " the makers" , "Moony himself" ] , Correctanswer: "the manufacturers"}, 

    {Title: "'I can teach you how to bottle fame, brew glory, even stopper…'" , options: ["life" , " breath " , " memory" , "death" ] , Correctanswer: "death"},