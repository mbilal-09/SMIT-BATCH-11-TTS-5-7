console.log("Day js==>", dayjs());

function sum(a, b) {
  return a + b;
}

// const sum1 = (a, b) => a + b;

const isEven = (num) => num % 2 === 0;

let number = [1, 23, 42, 1244, 213, 43, 265, 3, 2, 3215, 322, 254, 32, 11];

let evenNumbers = number.filter((data) => isEven(data));
let oddNumbers = number.filter((data) => !isEven(data));

// console.log("evenNumbers=>", evenNumbers);
// console.log("oddNumbers=>", oddNumbers);
// let evenNumbers = [];

// number.forEach((data, ind) => {
//   if (isEven(data)) {
//     evenNumbers.push(data);
//   }
// });

let todoList = document.getElementById("todo_list");
let search_input = document.getElementById("search_input");
let priority_dropdown = document.getElementById("priority");
let sort_dropdown = document.getElementById("sort");

var todos = [
  {
    task: "Buy groceries",
    category: "Personal",
    priority: "High",
    date: "2024-06-10",
  },
  {
    task: "Prepare presentation for Monday meeting",
    category: "Work",
    priority: "High",
    date: "2024-06-11",
  },
  {
    task: "Clean the house",
    category: "Personal",
    priority: "Medium",
    date: "2024-06-12",
  },
  {
    task: "Finish project report",
    category: "Work",
    priority: "High",
    date: "2024-06-13",
  },
  {
    task: "Schedule dentist appointment",
    category: "Health",
    priority: "Medium",
    date: "2024-06-14",
  },
  {
    task: "Go for a run",
    category: "Health",
    priority: "Low",
    date: "2024-06-15",
  },
  {
    task: "Call mom",
    category: "Personal",
    priority: "High",
    date: "2024-06-16",
  },
  {
    task: "Plan weekend trip",
    category: "Personal",
    priority: "Low",
    date: "2024-06-17",
  },
  {
    task: "Attend yoga class",
    category: "Health",
    priority: "Medium",
    date: "2024-06-18",
  },
  {
    task: "Complete online course",
    category: "Learning",
    priority: "High",
    date: "2024-06-19",
  },
  {
    task: "Read a book",
    category: "Personal",
    priority: "Low",
    date: "2024-06-20",
  },
  {
    task: "Update LinkedIn profile",
    category: "Work",
    priority: "Medium",
    date: "2024-06-21",
  },
  {
    task: "Water the plants",
    category: "Personal",
    priority: "Low",
    date: "2024-06-22",
  },
  {
    task: "Prepare for job interview",
    category: "Work",
    priority: "High",
    date: "2024-06-23",
  },
  {
    task: "Meditate for 15 minutes",
    category: "Health",
    priority: "Low",
    date: "2024-06-24",
  },
  {
    task: "Complete homework assignment",
    category: "Learning",
    priority: "High",
    date: "2024-06-25",
  },
  {
    task: "Watch educational video",
    category: "Learning",
    priority: "Medium",
    date: "2024-06-26",
  },
  {
    task: "Organize workspace",
    category: "Work",
    priority: "Medium",
    date: "2024-06-27",
  },
  {
    task: "Research new investment opportunities",
    category: "Learning",
    priority: "Medium",
    date: "2024-06-28",
  },
  {
    task: "Cook a healthy meal",
    category: "Health",
    priority: "Medium",
    date: "2024-06-29",
  },
];

function createElement(task, category, priority) {
  var ele = `<div class="border rounded-md p-3 m-2">
            <h1 class="font-bold text-2xl">${task}</h1>
            <h3 class="font-medium text-lg">${category}</h3>
            <h3 class="${
              priority === "High"
                ? `bg-red-600`
                : priority === "Medium"
                ? "bg-green-600"
                : "bg-blue-600"
            } inline-block py-1 px-3 my-3 text-white rounded-md">${priority}</h3>
        </div>`;
  return ele;
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
}
renderTodos();

search_input.addEventListener("change", function () {
  //search from task
  let searchFilter = todos.filter((data) =>
    data.task.toLowerCase().includes(this.value.toLowerCase())
  );

  // run for each on the array return from filter
  todoList.innerHTML = "";
  searchFilter.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
});

priority_dropdown.addEventListener("change", function () {
  let priorityFiltered = todos.filter((data) => data.priority == this.value);

  // run for each on the array return from filter
  todoList.innerHTML = "";
  priorityFiltered.forEach((data, ind) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
});

sort_dropdown.addEventListener("change", function () {
  console.log("dropdown=>", this.value);
  if (this.value == "a-z") {
    todos.sort((a, b) => (a.task > b.task ? 1 : -1));
  } else {
    console.log("else chal raha he");
    todos.sort((a, b) => (a.task > b.task ? -1 : 1));
  }

  todoList.innerHTML = "";
  todos.forEach((data) => {
    var todoItem = createElement(data.task, data.category, data.priority);
    todoList.innerHTML += todoItem;
  });
});

// sort number
// sort string
var arr = [10, 5, 3, 8, 4];

// 10 - 5 , number aya positive mein
//[5, 10 , 3 ,8 ,4]

// 10 - 3 , number aya positive mein
//[5, 3 , 10 ,8 ,4]

// 10 - 8 , number aya positive mein
//[5, 3 , 8 ,10 ,4]

// 10 - 4 , number aya positive mein
//[5, 3 , 8 ,4 ,10]

// 5 - 3 , number aya positive mein
//[3, 5 , 8 ,4 ,10]

// 5 - 8 , number aya negative mein aya ,original ko replace nahn krega
//[3, 5 , 8 ,4 ,10]

// 8 - 4 , number aya positive mein
//[3, 5 , 4 ,8 ,10]

// 5 - 4 , number aya positive mein
//[3, 4 , 5 ,8 ,10]
arr.sort((a, b) => a - b);
console.log(arr);

// 10 - 5 , number aya positive mein
//[10, 5 , 3 ,8 ,4]

// 3 - 5 , number aya negative mein
//[10, 5 , 3 ,8 ,4]

// 8 - 3 , number aya positive mein
//[10, 5 , 8 ,3 ,4]

// 3 - 4 , number aya positive mein
//[10, 5 , 8 ,4 ,3]

// 8 - 5 , number aya positive mein
//[10,8 , 5 ,4 ,3]

arr.sort((a, b) => b - a);
console.log(arr);

var names = ["bilal", "ahmed", "raza", "zahid", "usman"];

// bilal > ahmed , positive
//["ahmed","bilal" , "raza", "zahid", "usman"]

// bilal > raza , negative
//["ahmed","bilal" , "raza", "zahid", "usman"]

// raza > zahid , negative
//["ahmed","bilal" , "raza", "zahid", "usman"]

// zahid > usman , positive
//["ahmed","bilal" , "raza","usman", "zahid" ]

names.sort((a, b) => (a > b ? 1 : -1));

console.log("names=>", names);
