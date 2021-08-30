var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("questions");
var answersButtonEl = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionsIndex

//Timer counting down from 100 seconds
function countdown() {
    var timeLeft = 50;

    var timeInterval = setInterval(function() {
if (timeLeft > 1) {
    timerEl.textContent = timeLeft;
    timeLeft--;

} else if (timeLeft === 1) {
    timeLeft.textContent = timeLeft + " Keep fighting!";
    timeLeft--;
} else {
    timerEl.textContent = "You Lose";
    clearInterval(timeInterval);

}
}, 1000);
}

startBtn.onclick = countdown;
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame () {
   startBtn.classList.add("hide");
   shuffledQuestions = question.sort(() => Math.random() - 5);
   currentQuestionsIndex = 0;
   questionContainerEl.classList.remove("hide");
   setNextQuestion();
}

function setNextQuestion () {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answers => {
        var button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("btn");
        if (answers.correct) {
            button.dataset.correct = answer. correct;
        }
        button.addEventListener("click", selectAnswer);
        answersButtonEl.appendChild(button);
    })
}

function resetState() {
    nextBtn.classList.add("hide");
    while (answersButtonEl.firstChild) {
        answersButtonEl.removeChild
        (answersButtonEl.firstChild)
    }
}

function selectAnswer (e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answersButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextBtn.classList.remove("hide")
    } else {
        startBtn.innerText = "Restart"
        startBtn.classList.remove("hide")
    }
    nextBtn.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
        element.classList.remove("correct");
        element.classList.remove("wrong");
}

var question = [
    {
        question: "What HTML",
        answers: [
            { text: "A Mark Up Language", correct: true },
            { text: "A Car", correct: false },
            { text: "Programming Lanuage", correct: false },
            { text: "Hot Mail", correct: false }
        ]
    },
    {
        question: "What element is used to establish a link?",
        answers: [
            { text: "Hello World", correct: false },
            { text: "'< a >'", correct: true },
            { text: "< h1 >", correct: false },
            { text: "www", correct: false }
        ]
    },
    {
        question: "How many charactors are in a hex code?",
        answers: [
            { text: "20", correct: false },
            { text: "2", correct: false },
            { text: "6", correct: true },
            { text: "10", correct: false }
        ]
    },
    {
        question: "How to target a class?",
        answers: [
            { text: "Use the & symbol", correct: false },
            { text: "Use the . symbol", correct: true },
            { text: "Use the # symbol", correct: false },
            { text: "Use the ! symbol", correct: false }
        ]
    },
]