// const myDiv = document.createElement('div');
// const ul = document.createElement('ul');
// const li = document.createElement('li');
//       li.innerHTML = '<li>Home</li>';
//       li.innerHTML = '<li>About us</li>';
//       li.innerHTML = '<li>Services</li>';
//       li.innerHTML= '<li>Contact</li>';
//       li.innerHTML = '<li>Blog</li>';
//       ul.appendChild(li);
// const h2 = document.createElement('h2');
//       h2.textContent = '<strong>Heading</strong>'
//       console.log(myDiv);
//       myDiv.innerHTML = '<p>Hello World</p>';
//       console.log(myDiv);
//       myDiv.id = 'content';
//       console.log(myDiv);
//       myDiv.className = 'good';
//       console.log(myDiv);
//       myDiv.appendChild(h2);
//       myDiv.appendChild(ul);
//       myDiv.removeChild(ul);
//       document.body.appendChild(myDiv);
//       console.log(myDiv);

// let btnSend = document.querySelector('#btnSend');

// if (btnSend) {
//     btnSend.setAttribute('name', 'send');
// }
// console.log(btnSend);
// let inp = document.querySelector('#myInput');
//       inp.setAttribute('name', 'FirstName');
//       inp.setAttribute('placeholder', 'Enter your firstName')
//       inp.classList.add('info');
//       inp.classList.add('success');
//       inp.classList.add('bad','visible','block');
//       inp.classList.remove('bad', 'visible')
//       inp.classList.replace('success', 'danger')
//       console.log(inp);

//       setTimeout(function(){
//             let q = prompt('What\'s your name?');
//       }, 3000)



// const link = document.querySelector('a');

//       link.addEventListener('click', direct);

//       function direct(e){
//             e.preventDefault();
//             console.log('clicked');
//       }

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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sendBtn = document.getElementById('sendBtn');

let currentQuestion = 0;
let score = 0

loadQuiz()

function loadQuiz(){
      const currentQuiz = quizData[currentQuestion];
      console.log(currentQuiz);

      questionEl.innerText = currentQuiz.question
      a_text.innerText = currentQuiz.a
      b_text.innerText = currentQuiz.b
      c_text.innerText = currentQuiz.c
      d_text.innerText = currentQuiz.d  
      // if(currentQuestion > quizData.length){
      //       alert('Game Over')
      //       window.location.reload();
      // }
      // else{
     
      // }

      
sendBtn.addEventListener('click', sendQuiz);

function sendQuiz(){
      let myRadio = document.querySelector('input[type = radio]:checked')
      if(!myRadio){
            alert('Please select an answer')
      }
      else{
            let selectedValue = myRadio.value
            console.log(selectedValue);
            currentQuestion++
            loadQuiz();
      }
}

// function loadQuiz(){
//       if(currentQuestion >= quizData.length){
//             alert('Game Over')
//       }
//       else{
//             const currentQuiz = quizData[currentQuestion];
//             console.log(currentQuiz);
      
//             questionEl.innerText = currentQuiz.question
//             a_text.innerText = currentQuiz.a
//             b_text.innerText = currentQuiz.b
//             c_text.innerText = currentQuiz.c
//             d_text.innerText = currentQuiz.d
//             currentQuestion++
            
//       }

}