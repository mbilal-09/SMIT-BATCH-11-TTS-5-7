//var hello = undefined
//var hell1 = undefined
//function greetings(){
//    alert('Welcome to out platform')
//}

// console.log(greetings);

// console.log(hello);

//console.log(hello2); // is not defined

// var hello = "Hello";

// console.log("hello=>", hello);

// var hell1 = "Hello1";

// function greetings() {
//   alert("Welcome to out platform");
// }

// diffference in  var &  let

//1.variable made using var can be redeclared but variable
//made using let/const cannot be redeclare

// var firstName = "Bilal";
// var firstName = "Bilal Raza";

// let lastName = "Raza"
//  lastName = "Raza"

// console.log("firstName=>", firstName);

//2.Variable made using var can be used before it is declared
//but variable made using let/const cannot be used before
// it is declared

// console.log("name=>", userName);
// var userName = "Bilal Raza";

// Temporal red zone
// console.log("name=>", userName);
// let userName = "Bilal Raza";

//3.variable made using var have either global or functional scope
//variable made using let/const have block scope

function calculateSavings() {
  // var inc  = undefined
  console.log(inc);
  let total = 3 + 6;

  var income = 40;

  if (income) {
    // var inc = income + 90; //functional
    var inc = income + 90; //block scope
    income = inc;
    return inc;
  }

  return total + income;
}

console.log("calculateSavings()=>", calculateSavings());
