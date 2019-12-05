var questions = [
    {
        questionId: 1,
        question: "Who is the best singer",
        correctAnswerId: 1,
        answers: [
            { id: 1, name: "answer 1" },
            { id: 2, name: "answer 2" },
            { id: 3, name: "answer 3" }
        ]
    },
    {
        questionId: 2,
        question: "two",
        correctAnswerId: 3,
        answers: [
            { id: 1, name: "answer 1 kjasdfhk" },
            { id: 2, name: "answer 2 kjsdfh" },
            { id: 3, name: "answer 3 ha " }
        ]
    },
    {
        questionId: 3,
        question: "there",
        correctAnswerId: 2,
        answers: [
            { id: 1, name: "answer 1" },
            { id: 2, name: "answer 2" },
            { id: 3, name: "answer 3" }
        ]
    },
    {
        questionId: 4,
        question: "four",
        correctAnswerId: 1,
        answers: [
            { id: 1, name: "answer 1" },
            { id: 2, name: "answer 2" },
            { id: 3, name: "answer 3" }
        ]
    },
    {
        questionId: 5,
        question: "five",
        correctAnswerId: 3,
        answers: [
            { id: 1, name: "answer 1" },
            { id: 2, name: "answer 2" },
            { id: 3, name: "answer 3" }
        ]
    }
];

var userAnswers = [];

var i = 0;

var backButton = document.querySelector(".back");
var nextButton = document.querySelector(".nex");
var finishButton = document.querySelector(".finish");

function initApp() {
    nextQuestion();
    backButton.style.display = "none";
    finishButton.style.display = "none";
}
initApp();

function nextQuestion() {
    document.querySelector(".ques").textContent = questions[i].question;
    document.querySelector("#questionNumber").textContent = i + 1;

    var answers = questions[i].answers;

    document.querySelector(".answers").innerHTML = "";

    for (var index = 0; index < answers.length; index++) {
        var element = answers[index];

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "lady";
        input.id = element.id;
        input.className = "answer";
        document.querySelector(".answers").appendChild(input);

        var label = document.createElement("label");
        label.className = "radi";
        label.htmlFor = element.id;
        label.innerText = element.name;
        document.querySelector(".answers").appendChild(label);
    }
}

function storeUserAnswer() {
    var currentQuestion = questions[i - 1];
    var selectedAnswerId = document.querySelector('input[name="lady"]:checked')
        .id;

    userAnswers.push({
        answerId: selectedAnswerId,
        correctAnswerId: currentQuestion.correctAnswerId
    });
}

nextButton.addEventListener("click", function() {
    backButton.style.display = "block";
    if (i < questions.length - 1) {
        i = ++i;
        storeUserAnswer();
        nextQuestion();
    }
    if (i === questions.length - 1) {
        nextButton.style.display = "none";
        finishButton.style.display = "block";
    }
});

backButton.addEventListener("click", function() {
    nextButton.style.display = "block";

    if (i > 0) {
        i = --i;
        nextQuestion();
    }

    if (i === 0) {
        backButton.style.display = "none";
    }
});

document.querySelector(".finish").addEventListener("click", function() {
    storeUserAnswer();

    var result = 0;
    for (let index = 0; index < userAnswers.length; index++) {
        const element = userAnswers[index];
        if (element.answerId == element.correctAnswerId) {
            ++result;
        }
    }

    console.log(result);
});
