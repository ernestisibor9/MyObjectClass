const myData = [
    {
        id: 1,
        name: 'Alan Smith',
        job: 'Web Designer',
        image: 'images/ororo.jpg',
        description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit possimus quas consequatur delectus iusto eligendi placeat soluta corporis deserunt.',
    },
    {
        id: 2,
        name: 'Michael Jackson',
        job: 'Software Developer',
        image: 'images/messi.jpg',
        description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit possimus quas consequatur delectus iusto eligendi placeat soluta corporis deserunt.',
    },
    {
        id: 1,
        name: 'Queen Elizabeth',
        job: 'Digital Marketer',
        image: 'images/salzburg.jpg',
        description: '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit possimus quas consequatur delectus iusto eligendi placeat soluta corporis deserunt.',
    },
]

// const img = document.getElementsByTagName('img')
// const h3 = document.getElementsByTagName('h3')
// const h4 = document.getElementsByTagName('h4')
// const p = document.getElementsByTagName('p')
// const btnMan = document.getElementsByTagName('btnMan')

const myImage = document.getElementById('myImage')

const myName = document.getElementById('myName')

const myJob = document.getElementById('myJob')

const myDesc = document.getElementById('myDesc')

const btnMan = document.getElementById('btnMan')

const myPeople = document.getElementById('myPeople')
const myContainer = document.getElementById('myContainer')

console.log(myImage);

let randomPeople = 0;

window.addEventListener('DOMContentLoaded', function(){
    humans();
})

function humans(){
    let people = myData[randomPeople];
    
    myImage.src = people.image;
    myName.innerHTML = people.name;
    myJob.innerHTML = people.job;
    myDesc.innerHTML = people.description;
}


btnMan.addEventListener('click', function(){
    randomPeople++;
    humans()
})