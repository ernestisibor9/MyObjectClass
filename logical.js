let isDeveloper = true;
let isAccountant = false;
let knowHTML = true;
let knowValuation = false;

// AND LOGICAL COMPARISON
isDeveloper && isAccountant // false
knowHTML && knowValuation // false
isDeveloper && knowHTML // true
isAccountant && knowValuation // false

// OR LOGICAL COMPARISON
isDeveloper || isAccountant // true
knowHTML || knowValuation // tru
isDeveloper || knowHTML // true
isAccountant || knowValuation // false

// NOT LOGICAL OPERATOR
!isDeveloper // false
!isAccountant // true
!knowHTML // false
!knowValuation // true

// let a = "girl";
// if(!a){
//     console.log("I don/'t want you");
// }
// else{
//     console.log("You are welcome to the club");
// }

// let gender = 'boy';
// let age =  18;
// if(gender == 'boy' && age >= 18){
//     alert("Come to the club");
// }
// else{
//     alert("Go back home");
// }

let age = prompt("How old are you?");

if(age >= 18){
    alert("You are welcome to the club");
}
else{
    alert("Go back home");
}
