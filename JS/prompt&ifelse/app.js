// var firstName = prompt('Enter your first name?')
// var lastName = prompt('Enter your last name?')

// console.log(firstName)
// console.log(lastName)

// var tableNumber = prompt('Table you want')

// document.write(`<h1> Table of ${tableNumber}</h1>`)
// document.write(`<li>${tableNumber} x 1 = ${tableNumber * 1}</li>`)
// document.write(`<li>${tableNumber} x 2 = ${tableNumber * 2}</li>`)
// document.write(`<li>${tableNumber} x 3 = ${tableNumber * 3}</li>`)

//round bracket ke andar condition lagegi
//curly brackets mein agr condition true huwi to jo hamen kaam krwana
// hoga wo curly brackets mein krenge

//compraision oprators

// ==   donu chezen equal hen ya nahn
// ===  donu chezen equal hen ya nahn plus donu ki data type
// !=  not equal to
// > greater then
// >= greater then or equals gto
// < less then
// =< less then or equals to

// if (10 === '10') {
//   console.log('Condition true')
// } else {
//   console.log('Condition false hogye')
// }

// var num = prompt('Give number and check if is even or Odd')

// if (num % 2 == 0) {
//   document.write(`<h2>${num} is even.</h2>`)
// } else {
//   document.write(`<h2>${num} is odd. </h2>`)
// }

var age = prompt('User Age')

if (age >=  18) {
  document.write(`<h2>You are adult.</h2>`)
} else {
  document.write(`<h2>You are not adult. </h2>`)
}

// var city = prompt("Enter City Name")

// if (city === "karachi") {
//     console.log(city);
// } else if (city === "lahore"){
//     console.log(city);
// } else {
//     console.log("invalid");
// }

// var age = prompt("Enter your age");
// var username = prompt("Enter your name");

// && use krte heen ke sari condition match honi chahiye
// if (age > 12 && age < 18 && username) {
//   console.log("boy");
// } else {
//   console.log("invalid");
// }

// var username = prompt("Enter username")
// var password = prompt("Enter password")
// var email = prompt("Enter email")

// if (username || password || email) {
//   console.log(username , email, password);
// } else {
//   console.log("invalid");
// }

// || use krte heen ke koi aik condition bhi match hojay
// if (age > 12 || username === 'zain') {
//     console.log("boy");
//   } else {
//     console.log("invalid");
//   }

// prmot se phele + lagane se variable type string se number me convert hojati he
// var num1 = +prompt("number 1");
// var num2 = +prompt("number 2");

// console.log(typeof num1);
// console.log(num1 + num2);

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// var side1 = prompt("side 1");
// var side2 = prompt("side 2");
// var side3 = prompt("side 3");

// if (side1 === side2 && side1 === side3) {

//   console.log("triangle");

// } else if (side1 === side2 || side2 === side3 || side1 === side3){

//     console.log("isoceles triangle");
// }

var num1 = Number(prompt("Enter any number"));
// var result =
if (num1 % 2 !== 0 && num1 > 20) {
  console.log(` ${num1} is even and greater than 10`);
} else {
  console.log(num1);
}


// var num = 10;
// console.log(num % 3);

// var userNum = +prompt();

// if (userNum % 2 == 0) {
//   console.log("Number is even");
// } else if (userNum != 0) {
//   console.log("NUMBER IS ODD");
// }

// var pass = prompt("Enter your password")
// var confirmPass = prompt("Re-Enter your password")

// var password = prompt("Enter password")
// var confirmPassword = prompt("Re-Enter password")

// if (password === confirmPassword) {
//     console.log(password);
// } else {
//     console.log("invalid password");
// }

// var userNum = +prompt();

// var num = 1234;

// console.log(userNum);

// if (userNum > 0 && userNum % 2 == 0 && userNum <= 10) {
//   console.log("Number is even");
// } else {
//   console.log("invalid");
// }

// var num = true;

// console.log(num);

// num = "bilal";

// console.log(num);

// /var username = prompt("Enter your name");
// var code = +prompt("Enter your code");

// if ((username === "saif" || username === "huzaifa") && code === 786) {
//   console.log(username);
//   console.log(code);
// } else {
//   console.log("Invalid name");
// }

var num1 = prompt("")
var num2 = prompt("")
var num3 = prompt("")

if(num1 === num2 && num2 === num3 && num1 === num3){
    console.log("All are equal");
} else if(num1 === num2 || num2 === num3 || num1 === num3){
    console.log("Two a equal");
}
