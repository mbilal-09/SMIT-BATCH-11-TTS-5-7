<<<<<<< HEAD
// var city1 = "Karachi";
// var city2 = "Lahore";
// var city3 = "Hyderabad";

// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad"];

// console.log(cities[0]);

// cities[0] = "Karachi-The City of Lights";

// document.write(cities[0] + " is the largest city of Pakistan. <br>");
// document.write(cities[1] + " is the capital of Punjaab. <br>");
// document.write(cities[2] + " is the industrial hub. <br>    ");
// document.write(cities[3] + " is the capital of Pakistan.");

// console.log(cities);
// // index , variable ke naam ke baad [] brackets aenge , square brackets mein index ka number likh denge

// // length
// // show single value
// // update single value

// // methods
// // push , add 1 or more element in the last of an array
// // pop , remove one element from last of an array
// // unshift , add 1 or more element in the start of an array
// // shift , remove one element from start of an array

// // push
// cities.push("Peshawar", "Swat", "Quetta", "Kashmir");
// console.log("cities after push-->", cities);

// //pop
// cities.pop();
// console.log("cities after pop-->", cities);

// // unshift
// cities.unshift("Behria Town", "Larkana", "Hyderabad");
// console.log("cities after unshift-->", cities);

// //shift
// cities.shift();
// console.log("cities after shift-->", cities);

// // length of an array

// var length = cities.length;
// console.log(length);

// // cities.length = 1;
// // console.log(cities);

// // console.log(cities[cities.length - 1])

// console.log(cities[0]);

var foods = ["Apple", "Banana", "Watermelon", "Grapes"];
//splice
// splice original array ko update krta he

//splice ka method 3 paramaters
//1. index number (jahan se hamen add ya remove krna he)
//2. kitne items remove krne hen
//3. jo items hamen add krne hen
//only add
// foods.splice(1, 0, "Orange");
// console.log("Aftr add->", foods);

//only remove
// foods.splice(3, 1);
// console.log("Aftr remove->", foods);

//add and remove
// foods.splice(2, 2, "Watermelon", "Grapes", "Kiwai", "Guawa");
// console.log("Aftr add and remove->", foods);

//6.slice
// array se elements ko copy krne ke lye
// slice original array mein koi change nahn krta
// slice copy krke new array return krdeta hun
// slice ke 2 paramaters he
// 1.kahan se copy krna start krna he
// 2.jahan tk copy krna he us se aik number zyada dete hen

// var copy = foods.slice(1, 2);
// console.log("copy using slice-->", copy);

//copy all elements after index number

// var copyAll = foods.slice(1);
// console.log(copyAll);

// var qualifications = ["Matric", "Enter", "Masters", "Phd"];

// qualifications.splice(2, 0, "Bachelors");
// console.log(qualifications);

//7.indexOf
// var students = [213, 2142, 421, 2321, 21, 242, 54, 523, 123];
// var userRollNumber = +prompt("Enter user roll number");

// var userRollNumberInd = students.indexOf(userRollNumber);
// console.log(userRollNumberInd);

// if (userRollNumberInd == -1) {
//   alert("Not Allowed");
// } else {
//   alert("Allow");
// }

// agr city hamari list mein he to usko already added ka msg show
// or agr nahn he to usko add krdo
// var cities = ["karachi", "lahore", "hyderabad", "islamabad"];
// var yourCity = prompt("Your city");
// var indexOfCity = cities.indexOf(yourCity);
// if (indexOfCity === -1) {
//   cities.push(yourCity);
// } else {
//   alert("Alredy Added");
// }

// var yourCity1 = prompt("Your city");
// var indexOfCity = cities.indexOf(yourCity1);
// if (indexOfCity === -1) {
//   cities.push(yourCity1);
// } else {
//   alert("Alredy Added");
// }

// console.log(cities);


=======
// var city1 = "Karachi";
// var city2 = "Lahore";
// var city3 = "Hyderabad";

// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad"];

// console.log(cities[0]);

// cities[0] = "Karachi-The City of Lights";

// document.write(cities[0] + " is the largest city of Pakistan. <br>");
// document.write(cities[1] + " is the capital of Punjaab. <br>");
// document.write(cities[2] + " is the industrial hub. <br>    ");
// document.write(cities[3] + " is the capital of Pakistan.");

// console.log(cities);
// // index , variable ke naam ke baad [] brackets aenge , square brackets mein index ka number likh denge

// // length
// // show single value
// // update single value

// // methods
// // push , add 1 or more element in the last of an array
// // pop , remove one element from last of an array
// // unshift , add 1 or more element in the start of an array
// // shift , remove one element from start of an array

// // push
// cities.push("Peshawar", "Swat", "Quetta", "Kashmir");
// console.log("cities after push-->", cities);

// //pop
// cities.pop();
// console.log("cities after pop-->", cities);

// // unshift
// cities.unshift("Behria Town", "Larkana", "Hyderabad");
// console.log("cities after unshift-->", cities);

// //shift
// cities.shift();
// console.log("cities after shift-->", cities);

// // length of an array

// var length = cities.length;
// console.log(length);

// // cities.length = 1;
// // console.log(cities);

// // console.log(cities[cities.length - 1])

// console.log(cities[0]);

var foods = ["Apple", "Banana", "Watermelon", "Grapes"];
//splice
// splice original array ko update krta he

//splice ka method 3 paramaters
//1. index number (jahan se hamen add ya remove krna he)
//2. kitne items remove krne hen
//3. jo items hamen add krne hen
//only add
// foods.splice(1, 0, "Orange");
// console.log("Aftr add->", foods);

//only remove
// foods.splice(3, 1);
// console.log("Aftr remove->", foods);

//add and remove
// foods.splice(2, 2, "Watermelon", "Grapes", "Kiwai", "Guawa");
// console.log("Aftr add and remove->", foods);

//6.slice
// array se elements ko copy krne ke lye
// slice original array mein koi change nahn krta
// slice copy krke new array return krdeta hun
// slice ke 2 paramaters he
// 1.kahan se copy krna start krna he
// 2.jahan tk copy krna he us se aik number zyada dete hen

// var copy = foods.slice(1, 2);
// console.log("copy using slice-->", copy);

//copy all elements after index number

// var copyAll = foods.slice(1);
// console.log(copyAll);

// var qualifications = ["Matric", "Enter", "Masters", "Phd"];

// qualifications.splice(2, 0, "Bachelors");
// console.log(qualifications);

//7.indexOf
// var students = [213, 2142, 421, 2321, 21, 242, 54, 523, 123];
// var userRollNumber = +prompt("Enter user roll number");

// var userRollNumberInd = students.indexOf(userRollNumber);
// console.log(userRollNumberInd);

// if (userRollNumberInd == -1) {
//   alert("Not Allowed");
// } else {
//   alert("Allow");
// }

// agr city hamari list mein he to usko already added ka msg show
// or agr nahn he to usko add krdo
// var cities = ["karachi", "lahore", "hyderabad", "islamabad"];
// var yourCity = prompt("Your city");
// var indexOfCity = cities.indexOf(yourCity);
// if (indexOfCity === -1) {
//   cities.push(yourCity);
// } else {
//   alert("Alredy Added");
// }

// var yourCity1 = prompt("Your city");
// var indexOfCity = cities.indexOf(yourCity1);
// if (indexOfCity === -1) {
//   cities.push(yourCity1);
// } else {
//   alert("Alredy Added");
// }

// console.log(cities);


>>>>>>> 9166cb51f7ddd7a88c0a604588afa78bd515655f
