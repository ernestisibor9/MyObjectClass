// let questions = [
//     {
//         prompt: "What is the capital of Nigeria? \n (a) Abuja \n (b) Lagos\n (c) Nairobi \n (d) Rome",
//         answer: 'a'
//     },
//     {
//         prompt: "What is the capital of Germany? \n (a) London \n (b) Munich\n (c) Berlin \n (d) Dortmund",
//         answer: 'c'
//     },
//     {
//         prompt: "What is the capital of England? \n (a) London \n (b) Manchester \n (c) Liverpool \n (d) Birmingham",
//         answer: 'b'
//     },
//     {
//         prompt: "What is the capital of Spain? \n (a) Barcelona \n (b) Betis \n (c) Madrid \n (d) Mallorca",
//         answer: 'c'
//     },
//     {
//         prompt: "What is the capital of Italy? \n (a) Milan \n (b) Turin \n (c) Naples \n (d) Rome",
//         answer: 'd'
//     },
// ]

// let score = 0;

// for (i = 0; i < questions.length; i++){
//    // let response = prompt(questions[i].prompt)
// //    console.log(questions[i].prompt);
//       let response = prompt(questions[i].prompt)
//       if(response == questions[i].answer){
//             score ++;
//             alert('Correct')
//       } 
//       else{
//           alert('Fail')
//       }
// }
// alert (`You score ${score}/${questions.length}`)



// let color = ['red', 'blue', 'yellow', 'black'];

// let change = document.getElementById('change');
// let colorMan = document.getElementById('colorMan')

//     change.addEventListener('click', changeBtn)


//     function changeBtn (){
//         let randomColor = Math.floor(Math.random() * color.length);
//         document.body.style.backgroundColor = color[randomColor];
//         colorMan.textContent = color[randomColor];
//         console.log(randomColor);
//     }


// async function getRandomMeal(){
//     const response = await fetch ('https://www.themealdb.com/api/json/v1/1/categories.php');
//     const randomFood = await response.json();


//     let data = '';
//     randomFood.categories.map((item)=>{
//             data += `<div>
//                 <img src=${item.strCategoryThumb} alt="">
//                 <h1>${item.strCategory} </h1>
//                 <p>${item.strCategoryDescription} </p>
//             </div>`
//         })
//         document.getElementById('card').innerHTML = data;

//     console.log(randomFood.categories);
// }
// getRandomMeal();


const myCounter = document.getElementById('counter');
myCounter.setAttribute('name', 'myCount')
console.log(myCounter);
let x = 0
let varCount = setInterval(function(){
    x++;
    myCounter.innerHTML = x;
}, 1000);

setTimeout(function(){
    alert('Am comin home')
}, 5000)