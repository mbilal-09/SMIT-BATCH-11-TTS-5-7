var string = "She is going.";
// string = string.toUpperCase();

string = string.replace("She", "He");

console.log("string=>", string);

var arr = ["1", "2", "3", "4"];
arr.push("5");

var obj = {
  name: "Bilal",
};

obj.name = "Bilal Raza";

console.log(obj);

// immutable variable ko agr dusre variable mein assign kren to
// poori value copy hoke usko assign hojati he
// jabke mutable ko agr assign karen to reference assign hota he
// poori value assign nahn hoti

// var test = "test";
// var test1 = test;

// var obj = {
//   name: "Ahmed",
// };

// var obj1 = obj;
// obj.name = "Abdullah";

// console.log("obj=>", obj);
// console.log("obj1=>", obj1);

// test = "testing";
// console.log("test=>", test);
// console.log("test1=>", test1);

var arr = ["1", "2", "3", "4"];
var arr1 = arr;
var arr2 = ["1", "2", "3", "4"];

// arr.push("4");
// console.log("arr==>", arr);
// console.log("arr1==>", arr1);

console.log("1st=>", arr === arr1);
console.log("2nd=>", arr1 === arr2);

var arr = [
  {
    name: "Ahmed",
  },
  {
    name: "Bilal",
  },
  {
    name: "Hassan",
  },
];
console.log("arr==>", arr);

var obj = arr[1];
obj.name = "Bilal (Edited)";
console.log("Obj==>", obj);
console.log("arr after updated==>", arr);

