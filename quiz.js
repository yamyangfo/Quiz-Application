
const quizData = [
    {
        question: "Question 1: What does HTML stand for?",
        answers: [
            { option: "Hypertext Markup Language", correct: true },
            { option: "Hyper Transfer Markup Language", correct: false },
            { option: "Hypertext Machine Language", correct: false },
            { option: "Hyperlink and Text Markup Language", correct: false }
        ]
    },
    {
        question: "Question 2: Which CSS property is ued to control the spacing between elements?",
        answers: [
            { option: "margin", correct: true },
            { option: "padding", correct: false },
            { option: "spacing", correct: false},
            { option: "border-spacing", correct: false},
        ]
    },

    {

        question: "Question 3:  Who is the main author of the HTML?",
        answers: [
            { option: "Brendan Eich", correct: false },
            { option: "Tim Berners-Lee", correct: true },
            { option: "Web developer", correct: false},
            { option: "Google Inc", correct: false},
       ]
   },

   {

        question: "Question 4: If we want to set the style for just one element, which css selector will we use?",
        answers: [
       
            { option: "class", correct: false },
            { option: "text", correct: false },
            { option: "id", correct: true},
            { option: "name", correct: false},
   ]
},

{

        question: "Question 5: What does CSS stand for?",
        answers: [
   
           { option: "CSS is designed to separate the presentation and content, including layout, colors, and fonts", correct: false },
           { option: "CSS is a style sheet language", correct: true },
           { option: "CSS is the language used to style the HTML documents", correct: false},
           { option: "All of the above", correct: false},
    ]
},

{

    question: "Question 6:  Which of the following type of HTML tag is used to define an internal style sheet?",
    answers: [

       { option: "<script>",correct: false },
       { option: "<link>", correct: false },
       { option: "<style>", correct: true},
       { option: "<class>", correct: false},
]
},

  
]


let currentQuestionIndex = 0;
let score = 0;
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionElements = document.querySelectorAll('.answer');
const submitButton = document.getElementById('submit');

const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
const option_4 = document.getElementById("option_4");


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionElements.forEach((optionElement, index) => {
        optionElement.nextElementSibling.textContent = currentQuestion.answers[index].option;
        optionElement.checked = false;
    });
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    const answer = selectedOption.nextElementSibling.textContent;
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct === true).option;

    if (answer === correctAnswer) {
        alert('Correct!');
   
    } else {
        alert(`Incorrect. The correct answer is: ${correctAnswer}`);
    }


    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    } 
        
}



function showResults() {
    quizContainer.innerHTML = '<h2>Quiz Completed</h2><p>Thank you for taking the quiz!</p>';
    submitButton.style.display = 'none';
}


function showResults() {
    const totalQuestions = quizData.length;
    const percentageScore = (score / totalQuestions) * 10;

    quiz.innerHTML = `
        <h2>You answered ${score}/${totalQuestions} questions correctly</h2>
        <h2>Your score is ${percentageScore.toFixed(2)}%</h2>

        
`;
}


submitButton.addEventListener('click', checkAnswer);


loadQuestion();
