
function showSignup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
}


function showLogin() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}


function signup() {
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    
 
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    

    document.getElementById('signup-login').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}


function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    

    let savedUsername = localStorage.getItem('username');
    let savedPassword = localStorage.getItem('password');
    

    if (username === savedUsername && password === savedPassword) {

        document.getElementById('signup-login').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}














const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {
                text: "Home Tool Markup Language", correct: false
            },
            { text: "Hyberlinks and Text Markup Language", correct: false },
            { text: " Hyber Text Markup Language", correct: true },

        ]
    },
    {
        question: "Who is making the Web standards?",
        answers: [
            {
                text: "the world wide web consortium", correct: true
            },
            { text: "Google", correct: false },
            { text: "microsoft", correct: false },
            { text: "mozila", correct: false },


        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: [
            {
                text: "h6", correct: false
            },
            { text: "h1", correct: true },
            { text: "heading", correct: false },
            { text: "head", correct: false },


        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?  ",
        answers: [
            {
                text: "break", correct: false
            },
            { text: "br", correct: true },
            { text: "ib", correct: false },

        ]
    },
    {
        question: "Choose the correct HTML element to define important text ",
        answers: [
            {
                text: "i", correct: false
            },
            { text: "strong", correct: true },
            { text: "important", correct: false },
            { text: "b", correct: false },


        ]
    },
    {
        question: "Choose the correct HTML element to define emphasized text ",
        answers: [
            {
                text: "i", correct: false
            },
            { text: "em", correct: true },
            { text: "italic", correct: false },

        ]
    },
    {
        question: "Which HTML element defines the title of a document?        ",
        answers: [
            {
                text: "meta", correct: false
            },
            { text: "head", correct: false },
            { text: "tittle", correct: true },

        ]
    },
    {
        question: "Which character is used to indicate an end tag?  ",
        answers: [
            {
                text: "^", correct: false
            },
            { text: "/", correct: true },
            { text: "*", correct: false },

        ]
    },
    {
        question: "How can you make a numbered list?",
        answers: [
            {
                text: "dl", correct: false
            },
            { text: "ol", correct: true },
            { text: "ul", correct: false },

        ]
    },
    {
        question: "How can you make a bulleted list?        ",
        answers: [
            {
                text: "ol", correct: false
            },
            { text: "ul", correct: true },
            { text: "list", correct: false },

        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    };
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz()
