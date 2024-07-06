var number = 5.0;
//round
console.log(Math.round(number));
//floor
console.log(Math.floor(number));
//ceil
console.log(Math.ceil(number));

// number ko string mein convert krna
console.log(typeof number);
console.log(typeof number.toString());

var price = "340a45.4";
console.log("parseInt=>", parseInt(price.replace("a", "")));
//string to number mein convert krna
//1. + lagado pehle
//2. Number() ke function mein dedo
//3. parseInt() ye decimal ko covert nahn krta
//4. parseFloat() ye decimal ko bhe covert krta he
// console.log("+=>", +price);
// console.log("Number=>", Number(price));
console.log("parseFloat=>", parseFloat(price));

//decimal ki length ko control krne ke lye
var divide = 10 / 3;
console.log(divide.toFixed(2));

var heading = document.getElementById("random");
function generateOTPNumber() {
  var random = Math.round(Math.random() * 10000);
  heading.innerText = random;
}

// var string = "ABCSD123asSALNFzALIsadWQnkdaslnd";
// var password_h1 = document.getElementById("password");

// var password = "";

// function generatePassword() {
//   password = "";
//   for (var i = 0; i < 10; i++) {
//     var randomNumber = Math.round(Math.random() * string.length);
//     console.log("randomNumber=>", randomNumber, string.charAt(randomNumber));
//     password = password + string.charAt(randomNumber);
//     console.log(password);
//   }
//   password_h1.innerText = password;
// }

var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var win_html = document.getElementById("win");
var loss_html = document.getElementById("loss");
var total = document.getElementById("total");
var msg = document.getElementById("msg");

var count = 10;
var win = 0;
var loss = 0;

function tryMyLuck(userNumber) {
  // alert(userNumber);
  var randomNumber = Math.random() * 6;
  var ceil = Math.ceil(randomNumber);
  console.log(ceil);
  user_number.innerText = userNumber;
  random_number.innerText = ceil;

  // total count mein se aik minus krdo
  total.innerText = --count;
  
  if (ceil === userNumber) {
    console.log("user wins");
    result.innerText = "You won";
    info_box_result.style.backgroundColor = "Green";
    result.style.color = "White";
    // total count mein se aik minus krdo
    win_html.innerText = ++win;
  } else {
    result.innerText = "You Loss";
    info_box_result.style.backgroundColor = "red";
    result.style.color = "White";
    loss_html.innerText = ++loss;
  }

  checkResult();
}

function checkResult() {
  if (count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
    } else {
      msg.innerText = "Sorry! You loss try again";
    }
    count = 10;
    win = 0;
    loss = 0;
    total.innerText = count;
    win_html.innerText = loss;
    loss_html.innerText = win;
  }
}
