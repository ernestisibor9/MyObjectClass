// function alabian(){
//     // content
//     alert('Welcome to Alabian Solution');
// }

// alabian();

// function myFirstFunction(name, age){
//     console.log(`My name is ${name} and I am ${age} years old`);
// }

// myFirstFunction('Johnson', '10')

// function myDiscount(price = 60, discount){
//     let total = price * discount/100;
//     console.log(`The total price is = ${total}`);
// }

// myDiscount(10000)

// Correction

function arithmetic(number1, number2){
    let sum = number1 + number2;
    let mult = number1 * number2;
    let divide = number1 / number2;
    let sub = number1 - number2;

    console.log(`The sum is = ${sum}`);
    console.log(`The multiplication is = ${mult}`);
    console.log(`The division is = ${Math.floor(divide)}`);
    console.log(`The subtraction is = ${sub}`);
}

arithmetic(7, 2)