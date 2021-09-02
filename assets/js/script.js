var timerEl = document.getElementById("countdown");
var startBtn = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("questions");
var answersButtonEl = document.getElementById("answer-buttons");
var index = 0;

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
function startGame() {
    countdown();
    startBtn.classList.add("hide");
    questionContainerEl.innerHTML = ` 
    <div id="questions">${question[index].question}</div>
    <div id="answer-buttons" class="btn-grid">
        <button value= "${question[index].answers[0].correct}" class="btn ansBtn">${question[index].answers[0].text}</button>
        <button value= "${question[index].answers[1].correct}" class="btn ansBtn">${question[index].answers[1].text}</button>
        <button value= "${question[index].answers[2].correct}" class="btn ansBtn">${question[index].answers[2].text}</button>
        <button value= "${question[index].answers[3].correct}" class="btn ansBtn">${question[index].answers[3].text}</button>
    </div>`
    let answer = document.getElementsByClassName("ansBtn");
    answer.addEventListener("click", function(event){
        console.log("test")
    })
}




