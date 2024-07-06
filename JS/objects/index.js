var obj = {
  name: "bilal",
  age: 30,
  fatherName: "umar",
  ismarried: true,
  getAge: function () {
    var date = new Date();
    var birthDate = new Date(obj.date);
    console.log(birthDate);
    var age = date.getFullYear() - birthDate.getFullYear();
    return age;
  },
  date: "01-05-2010",
};

// var allUsers = [obj, obj];

// console.log("allUsers==>", allUsers);
// document.getElementById("username").innerText = allUsers[1].name;
// document.getElementById("fathername").innerText = allUsers[1].fatherName;
// document.getElementById("age").innerText = allUsers[1].getAge();

function HelloMsg(msg, name, attendance) {
  // console.log("this==>", this);
  this.message = msg;
  this.name = name;
  this.isStudent = true;
  this.attendance = attendance;
  this.totalClasses = 50;
  this.isPunctual = function () {
    var perc = this.attendance / this.totalClasses;
    if (perc >= 0.9) {
      return true;
    } else {
      return false;
    }
  };
}

var student1 = new HelloMsg("Welcome", "Bilal", 45);
var student2 = new HelloMsg("Khush Amdeed", "Ahmed", 40);
var student3 = new HelloMsg("Marhaba", "Abdullah", 30);
var student4 = new HelloMsg("Tashreef layye", "Usman", 22);
var student5 = new HelloMsg("Pakher Ragal", "Nawaz", 50);
var student6 = new HelloMsg("Ji Aayano", "Imran", 48);

var list = document.getElementById("list");
var allStudents = [student1, student2, student3, student4, student5, student6];

console.log("allStudents==>", allStudents);

// for (var i = 0; i < allStudents.length; i++) {
//   // console.log("i=>", i, "data=>", allStudents[i]);
//   // console.log(`${allStudents[i].message} ${allStudents[i].name}`);
// }

function renderData() {
  list.innerHTML = "";
  allStudents.forEach(function (data, index) {
    list.innerHTML += `<div id= ${index} class = 'flex items-center'><h1 class ='text-2xl my-4'> ${data.message} ${data.name}</h1> 
    <button class= 'ms-4 px-3 h-[30px] text-white outline-primary bg-red-500' onclick="deleteObj(this)">Delete</button>
    <button class= 'ms-4 px-3 h-[30px] text-white outline-primary bg-blue-500' onclick="editObj(this)">Edit</button> </div>`;
  });
}
renderData();

function deleteObj(ele) {
  // console.log(ele.parentElement.id);
  // console.log(allStudents[ele.parentElement.id]);
  allStudents.splice(ele.parentElement.id, 1);
  console.log("allStudents===>", allStudents);
  renderData();
}

function editObj(ele) {
  // console.log(ele.parentElement.id);
  console.log(allStudents[ele.parentElement.id]);
  var obj = allStudents[ele.parentElement.id];
  obj.name = prompt('Update your name' ,obj.name );
  renderData()

  // allStudents.splice(ele.parentElement.id, 1);
  // console.log("allStudents===>", allStudents);
}
