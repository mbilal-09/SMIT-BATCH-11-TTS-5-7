var userData = [
  {
    name: "Abdullah",
    fatherName: "Mushtaq",
    age: 37,
    rollNo: 4654,
  },
  {
    name: "Bilal",
    fatherName: "abc",
    age: 34,
    rollNo: 4565,
  },
  {
    name: "Junaid",
    fatherName: "xyz",
    age: 87,
    rollNo: 768,
  },
];

var userTable = document.getElementById("userTable");
var userName = document.getElementById("name");
var fatherName = document.getElementById("fatherName");
var rollno = document.getElementById("rollno");
var age = document.getElementById("age");

function addData() {
  userTable.innerHTML = "";
  for (var i = 0; i < userData.length; i++) {
    userTable.innerHTML += `
    <tr>
            <td>0${i + 1}</td>
            <td>${userData[i].name}</td>
            <td>${userData[i].fatherName}</td>
            <td>${userData[i].rollNo}</td>
            <td>${userData[i].age}</td>
            <td onclick="likeUser(this)"><i class="fa-regular fa-heart"></i></td>
        </tr>
    `;
  }
}
addData();

function addUser() {
  var obj = {
    name: userName.value,
    fatherName: fatherName.value,
    rollNo: rollno.value,
    age: age.value,
  };

  userData.push(obj);
  console.log(userData);
  addData();
}

function likeUser(element) {
  if (element.firstElementChild.className === "fa-regular fa-heart") {
    element.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    element.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
}
