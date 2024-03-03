const quizData = [
    {
        question: "Qui a peint la Joconde ?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Michel-Ange",
        correct: "b",
    },
    {
        question: "Qui a sculpté le David de marbre ?",
        a: "Michel-Ange",
        b: "Donatello",
        c: "Raphaël",
        d: "Leonardo da Vinci",
        correct: "a",
    },
    {
        question: "Quel mouvement artistique est associé à Salvador Dalí ?",
        a: "Surréalisme",
        b: "Impressionnisme",
        c: "Cubisme",
        d: "Baroque",
        correct: "b",
    },
    {
        question: "Qui est l\'auteur de la sculpture 'Le Penseur'?",
        a: "Edgar Degas",
        b: "Édouard Manet",
        c: "Auguste Rodin",
        d: "Henri Matisse",
        correct: "c",
    },
    {
        question: "Quel artiste est connu pour ses peintures de champs de tournesols ?",
        a: "Georgia O\'Keeffe",
        b: "Pablo Picasso",
        c: "Claude Monet",
        d: "Vincent van Gogh",
        correct: "d",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

var startTime;
var timerInterval;

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2 style="text-align: center;"> Vous avez répondu aux ${score}/${quizData.length} questions correctes. Bonne chance à la prochaine fois! </h2>
            
            <button onclick="location.reload()"> Reload </button>`
        }
    }
})
function startQuiz(){
container.style.display="none";
quiz.style.display="block";
startTime = new Date().getTime(); // Enregistrer le temps de début
timerInterval = setInterval(updateTimer, 1000); // Mettre à jour le timer chaque seconde
loadQuiz()

}

function updateTimer() {
    var currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;
    var seconds = Math.floor(elapsedTime / 1000);

        document.getElementById("timer").innerHTML = "Temps écoulé : " + seconds + " secondes";
    }
