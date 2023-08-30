const questions = [
    {
        question: "When did India gain independence?",
        options: ["1942", "1947", "1950", "1962"],
        correctAnswer: 1
    },
    {
        question: "When did Pakistan gain independence?",
        options: ["1942", "1947", "1950", "1962"],
        correctAnswer: 1
    },
    {
        question: "When did Bangladesh gain independence?",
        options: ["1942", "1947", "1950", "1962"],
        correctAnswer: 3
    },
    {
        question: "When did Sri Lanka gain independence?",
        options: ["1942", "1947", "1950", "1962"],
        correctAnswer: 2
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

loadQuestion();
