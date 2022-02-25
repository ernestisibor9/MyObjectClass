let diceRandom = Math.floor(Math.random() * 6 + 1);

let preDice1 = "dice"+ diceRandom + ".png";
let dice1 = "dice/"+preDice1;

let myDice = document.querySelectorAll('img')[0];
myDice.setAttribute('src', dice1);



let diceRandom2 = Math.floor(Math.random() * 6 + 1);
let preDice2 = "dice" + diceRandom2 + ".png";
let dice2 = "dice/" +preDice2;

let myDice2 = document.querySelectorAll('img')[1];
myDice2.setAttribute('src', dice2);

const title = document.getElementById('title');
const myBtn = document.getElementById('myBtn')

myBtn.addEventListener('click', myDiceGame)

function myDiceGame(){
    
    if(dice1 > dice2){
        //alert("You won!")
        const result = document.getElementById('result');
        result.innerHTML = 'Player One wins!'
        result.style.color = 'green'
        result.style.textAlign = 'center'
        // title.style.display = 'none'
    }
    else if (dice1 < dice2){
        //alert('You lost')
        const result2 = document.getElementById('result');
        result2.innerHTML = 'Player Two wins!'
        result2.style.color = 'red'
        result2.style.textAlign = 'center'
        // title.style.display = 'none'
    }
    else{
        const result3 = document.getElementById('result');
        result3.innerHTML = 'Draw!'
        result3.style.color = 'blue'
        result3.style.textAlign = 'center'
        // title.style.display = 'none'
    }
}

