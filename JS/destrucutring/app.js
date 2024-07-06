//Destructuring of array and object

// let obj = {
//   fullName: "Bilal",
//   class: "XII",
//   fatherName: "Jawed",
//   gender: "male",
//   isMarried: true,
//   siblings: 4,
//   age: 27,
//   isActive: false,
// };

// let { fullName, fatherName, age, isActive = true } = obj;

// let fullName = obj.fullName
// let fatherName = obj.fatherName

// console.log(fullName);
// console.log(fatherName);
// console.log(age);
// console.log(isActive);

// const arr = ["abc", "efg", "hij"];

// let [first, , third, fourth = "klm"] = arr;

// console.log("a==>", first);
// console.log("b==>", sec);
// console.log("c==>", third);
// console.log("d==>", fourth);

// function sum(a = 10, b = 30) {
//   return a + b;
// }

// console.log(sum(40, 40));

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let [a, ...b] = arr;

// console.log("a=>", a);
// console.log("b=>", b);

let list = document.getElementById("list");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => displayPosts(posts));

function displayPosts(posts) {
  posts.forEach((data , ind) => {
    const { title, body } = data;
    let ele = `<div class='card'>
    <h4>${ind + 1}) ${title}</h4>
    <p>${body}</p>
    </div>`;

    list.innerHTML += ele;
  });
}
