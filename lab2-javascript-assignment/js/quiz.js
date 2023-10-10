/**
 * This is a constructor function which is representing Question Object.
 * @param {*} text Queston text.
 * @param {*} choices Possible options for answer.
 * @param {*} answer Correct answer.
 */
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

/**
 * This is an array of Ouestion object which is holding five different Questions object.
 */
var questions = [
    new Question("Which type of JavaScript language is ?", ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        "Object-Based"),
    new Question("Which one of the following also known as Conditional Expression", ["Alternative to if-else, Switch statement", "If-then-else statement", "immediate if"],
        "immediate if"),
    new Question("In JavaScript, what is a block of statement?", ["Conditional block", "block that combines a number of statements into a single compound statement",
            "both conditional block and a single statement", "block that contains a single statement"
        ],
        "block that contains a single statement"),
    new Question("The function and var are known as:", ["Keywords", "Data types", "Declaration statements", "Prototypes"],
        "Declaration statements"),
    new Question("Which of the following type of a variable is volatile?", ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        "Mutable variable")
];

let questionText;
let choice1;
let choice2;
let choice3;
let choice4;
let progressText;
let index = 0;
let questionContainer;
let resultContainer;
let resultText;
let score = 0;

/**
 * This function is responsible initialize all declared 
 * variable by fetching different HTML element's instance.
 */
function initialize() {
    questionText = document.getElementById("question");
    choice1 = document.getElementById("choice1");
    choice2 = document.getElementById("choice2");
    choice3 = document.getElementById("choice3");
    choice4 = document.getElementById("choice4");
    progressText = document.getElementById("progress-msg");
    questionContainer = document.getElementById("questionsection");
    resultContainer = document.getElementById("result");
    resultText = document.getElementById("score");
    this.loadQuestionAndOptions(questions[index], index);
    this.initializeBtnEventListener();
}

/**
 * This method is responsible to load each question item and its possible answer options.
 * @param {*} question Question Object.
 * @param {*} idx Index.
 */
function loadQuestionAndOptions(question, idx) {
    questionText.innerText = question.text;
    choice1.innerText = question.choices[0];
    choice2.innerText = question.choices[1];
    choice3.innerText = question.choices[2];
    choice4.innerText = question.choices[3];
    progressText.innerText = "Question " + ++idx + " of " + questions.length;
}

/**
 * This method is responsible to assign on click event listener to all answer options.
 */
function initializeBtnEventListener() {
    const btns = document.querySelectorAll('button[id^=btn]');
    btns.forEach(btn => {
        btn.addEventListener('click', event => {
            if (event.target.innerText === questions[index].answer) {
                ++score;
            }
            index++;
            if (index < questions.length) {
                this.loadQuestionAndOptions(questions[index], index);
            } else {
                this.calculateAndDisplayResult();
            }
        });
    });
}

/**
 * This method is responsible to publish result when quiz is completed.
 */
function calculateAndDisplayResult() {
    questionContainer.style = "display: none";
    questionText.style = "display: none";
    resultContainer.style = "display: block";
    resultText.innerText = "Your score: ".concat(score)
        .concat(" and marks percentage is: ").concat(((score / questions.length) * 100)).concat("%");
    progressText.classList.add('quiz-complete-text')
    progressText.innerText = "Quiz completed."
}