
const quizData =[
    {
          question: 'How old are you?',
          a: '10',
          b: '15',
          c: '20',
          d: '25',
          correct_answer:'10'
    },
    {
          question: 'Who is the President of Nigeria?',
          a: 'Buhari',
          b: 'Jonathan',
          c: 'Obasanjo',
          d: 'Atiku',
          correct_answer:'Buhari'
    },
    {
          question: '2 + 3 * 5 = ',
          a: '25',
          b: '50',
          c: '100',
          d: '10',
          correct_answer:'25'
    },
    
]

const quizContainer = document.getElementById('quizContainer');
const questionContainer = document.getElementById('questionContainer');
const optionContainer = document.getElementById('optionContainer');
const buttonContainer = document.getElementById('buttonContainer');
const resultContainer = document.getElementById('resultContainer')
const result = document.getElementById('result')
const submitBtn = document.getElementById('submitBtn')

submitBtn.style.display = 'none';
result.style.display = 'none'
questionContainer.innerHTML = '<h2>Quiz CBT</h2>'

let currentQuestion = 0;
let score = 0

function loadQuiz(){
    const quiz = quizData[currentQuestion]

    questionContainer.innerHTML = quiz.question;
    optionContainer.innerHTML = `
         <input type="radio" name="answer" value = '${quiz.a}'>${quiz.a} <br>
         <input type="radio" name="answer" value = '${quiz.b}'>${quiz.b} <br>
         <input type="radio" name="answer" value = '${quiz.c}'>${quiz.c} <br>
         <input type="radio" name="answer" value = '${quiz.d}'>${quiz.d} <br>
    `
    buttonContainer.innerHTML = `<button type = 'submit' id = 'nextBtn' class = 'heading'>Next</button>`
}
loadQuiz()

buttonContainer.addEventListener('click', sendBtn);

function sendBtn(){
    let myRadio = document.querySelector('input[type = radio]:checked')
    if(!myRadio){
          alert('Please select an answer')
    }
    else{
          let selectedValue = myRadio.value
          if(selectedValue == quizData[currentQuestion].correct_answer){
            score += 5;
          }
          if(currentQuestion == quizData.length - 1){
              submitBtn.style.display = 'block'
              buttonContainer.style.display = 'none'

          }
          console.log(`You score ${score}`);
          currentQuestion++
          loadQuiz();
    }
}
submitBtn.addEventListener('click', submitBtnClick)

function submitBtnClick(){
    let myScore = score;
    let myTotal = quizData['length'] * 5;
    let percent = myScore/myTotal * 100;

    let grade;
    if(percent < 49){
        grade = 'Fail'
    }
    else if(percent < 69 && percent > 50){
        grade = 'Credit'
    }
    else{
        grade = 'Distinction'
    }

    quizContainer.style.display = 'none'
    result.style.display = 'block'
    result.style.color = 'white'
    document.body.style.backgroundColor = 'green'
    result.innerHTML = `
        <h2>Your result</h2>
        <h3>Your percentage score is ${Math.floor(percent)} %</h3>
        <h1>${grade}</h1>
    `
}