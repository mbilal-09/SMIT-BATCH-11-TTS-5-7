let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let square = [];
//numbers.forEach((num) => square.push(num * num));

// let square = numbers.map((num) => num * num);

// console.log("square=>", square);
// console.log("numbers=>", numbers);

var a = "A";
var b = "B";
var c = "C";

var p = new Promise((resolve) => resolve());

p.then(() => console.log(c));

setTimeout(() => {
  console.log(a);
}, 0);

console.log(b);
