// var username = "basit";

// username.toUpperCase();

// console.log(username);

// var a = "a";
// var A = "A";

// console.log(a.toUpperCase() == A.toUpperCase());

// var cities = ['karachi', 'lahore', 'sukkur'];
// var userCity = prompt("Enter your City");

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
//     if (cities[i] === userCity.toLowerCase()) {
//         alert("city match");
//     }
// }

// var username = prompt("Enter your name")

// if(username.length < 3 || username.length > 12) {
//     alert("name should be grater then 3 less then 12")
// } else (
//     console.log(username)

// )
// console.log(a.length);

// var a = "Hello my name is Bilal.";

// console.log(a[2]);
// console.log(a.slice(0, 5));

// var username = "basit";
// var sentence =
//   "Send document on my email attari1235@gmail.com.After going through document I will be sending queries!.";

// console.log(username[0].toUpperCase() + username.slice(1));

// console.log(sentence.indexOf("document"));

// console.log(sentence.lastIndexOf("document"));

// //charAt

// console.log(sentence.charAt(3));

// for (var i = 0; i < sentence.length; i++) {
//   if (sentence.charAt(i) === "!") {
//     console.log(i);
//     alert("Exclamation point found!");
//     break;
//   }
// }

//replace
// var txt = "Bilal got first position in class.";
// txt = txt.replace("first", "1st");
// console.log(txt);

// //trim
// var email = "  attari1235@gmail.com   ";
// console.log(email.length);
// console.log("Trim=>", email.trim().length);

// var sentence = "Javascript is Wonderful Programing Language";

// var vowelCount = 0;
// var constCount = 0;

// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i].toLowerCase() === "a" || sentence[i].toLowerCase() === "e" || sentence[i].toLowerCase() === "i" || sentence[i].toLowerCase() === "o" || sentence[i].toLowerCase() === "u") {
//     vowelCount++;
//   } else if (sentence[i] != " ") {
//     constCount++;
//   }
// }

// var vowels = ["a", "e", "i", "o", "u"];

// for (let i = 0; i < sentence.length; i++) {
//   var vowelFound = false;

//   for (var j = 0; j < vowels.length; j++) {
//     if (sentence[i].toLowerCase() === vowels[j]) {
//       vowelFound = true;
//       break;
//     }
//   }
//   if (vowelFound) vowelCount++;
//   if (!vowelFound && sentence[i] !== " ") constCount++;
// }

// console.log("vowelCount-> ", vowelCount);
// console.log("constCount-> ", constCount);

// var sentence = "Javascript is Wonderful Programing Language";

//Q1.Count the number of letter a used in sentence.

// var count = 0;
// for (var i = 0; i < sentence.length; i++) {
//   if (sentence.charAt(i).toLowerCase() === "a") count++;
// }

// console.log("Number A's in this sentence are", count);

//Q2.Capitilize first letter of each word.

// var userName = "bilal raza aaa aa aaa aa";
// var arr = userName.split(" ");
// console.log(userName);
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   var word = arr[i];
//   arr[i] = word[0].toUpperCase() + word.slice(1);
// }

// console.log(arr);
// var updated = arr.join(" ");
// console.log(updated);

//Q3.Password must include 1 capital letter , 1 number , min length should be 8.

// var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var SPECIAL = "!_@$";

// var password = prompt("Enter password min length 8 , 1 Uppercase , 1 Number");

// console.log(password);

// var userName = "bilal raza aaa aa aaa aa";
// var arr = userName.split(" ");
// console.log(userName);
// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//   var word = arr[i];
//   arr[i] = word[0].toUpperCase() + word.slice(1);
// }

// console.log(arr);
// var updated = arr.join(" ");
// console.log(updated);

//document object modal

// var car = {
//   name: "Civic",
//   modal: 2020,
// };

// var h1 = document.getElementById("heading");
// var userInput = document.getElementById("userInput");

// function abc() {
//   console.log(userInput.value);
//   h1.innerText = userInput.value;
//   userInput.value = "";
// }

//replace example

// var h1 = document.getElementById("heading");
// var input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");

// function replace() {
//   var value = h1.innerText;
//   var input1Value = input1.value;
//   var input2Value = input2.value;

//   value = value.replace(input1Value, input2Value);
//   h1.innerText = value;
// }

// var para = document.getElementById("para");
// var wordCount = document.getElementById("wordCount");

// function seeInfo() {
//   var value = para.value;
//   var totalWords = value.split(" ").length;
//   var totalLetters = value.length;
//   wordCount.innerText =
//     "Total Words " + totalWords + " Total Letters " + totalLetters;
// }

var box = document.getElementById("box");
console.log(box.style);

function changeRed() {
  box.style.backgroundColor = "red";
}
function changeOrange() {
  box.style.backgroundColor = "orange";
}
function changeBlue() {
  box.style.backgroundColor = "blue";
}
function changeBlack() {
  box.style.backgroundColor = "black";
}
function changeYellow() {
  box.style.backgroundColor = "yellow";
}
