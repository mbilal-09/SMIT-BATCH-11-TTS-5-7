const users = [
  {
    name: "John Doe",
    fatherName: "Richard Doe",
    age: 16,
    rollNo: "101",
    class: "10th Grade",
    status: "",
  },
  {
    name: "Jane Smith",
    fatherName: "Robert Smith",
    age: 15,
    rollNo: "102",
    class: "9th Grade",
  },
  {
    name: "Michael Johnson",
    fatherName: "James Johnson",
    age: 17,
    rollNo: "103",
    class: "11th Grade",
  },
  {
    name: "Emily Davis",
    fatherName: "William Davis",
    age: 14,
    rollNo: "104",
    class: "8th Grade",
  },
  {
    name: "Jessica Brown",
    fatherName: "Charles Brown",
    age: 16,
    rollNo: "105",
    class: "10th Grade",
  },
  {
    name: "Daniel Wilson",
    fatherName: "Thomas Wilson",
    age: 15,
    rollNo: "106",
    class: "9th Grade",
  },
  {
    name: "Sarah Taylor",
    fatherName: "Andrew Taylor",
    age: 17,
    rollNo: "107",
    class: "11th Grade",
  },
  {
    name: "David Lee",
    fatherName: "George Lee",
    age: 14,
    rollNo: "108",
    class: "8th Grade",
  },
  {
    name: "Laura Martin",
    fatherName: "Paul Martin",
    age: 16,
    rollNo: "109",
    class: "10th Grade",
  },
  {
    name: "Kevin White",
    fatherName: "Mark White",
    age: 15,
    rollNo: "110",
    class: "9th Grade",
  },
  {
    name: "Anna Harris",
    fatherName: "Steven Harris",
    age: 17,
    rollNo: "111",
    class: "11th Grade",
  },
  {
    name: "Brian Clark",
    fatherName: "Edward Clark",
    age: 14,
    rollNo: "112",
    class: "8th Grade",
  },
  {
    name: "Sophia Lewis",
    fatherName: "Henry Lewis",
    age: 16,
    rollNo: "113",
    class: "10th Grade",
  },
  {
    name: "Christopher Walker",
    fatherName: "Frank Walker",
    age: 15,
    rollNo: "114",
    class: "9th Grade",
  },
  {
    name: "Grace Hall",
    fatherName: "Peter Hall",
    age: 17,
    rollNo: "115",
    class: "11th Grade",
  },
  {
    name: "Justin Allen",
    fatherName: "Patrick Allen",
    age: 14,
    rollNo: "116",
    class: "8th Grade",
  },
  {
    name: "Olivia Young",
    fatherName: "Bruce Young",
    age: 16,
    rollNo: "117",
    class: "10th Grade",
  },
  {
    name: "Nathan Hernandez",
    fatherName: "Larry Hernandez",
    age: 15,
    rollNo: "118",
    class: "9th Grade",
  },
  {
    name: "Mia King",
    fatherName: "Joe King",
    age: 17,
    rollNo: "119",
    class: "11th Grade",
  },
  {
    name: "Ethan Wright",
    fatherName: "Stanley Wright",
    age: 14,
    rollNo: "120",
    class: "8th Grade",
  },
  {
    name: "Ava Lopez",
    fatherName: "Timothy Lopez",
    age: 16,
    rollNo: "121",
    class: "10th Grade",
  },
  {
    name: "Jacob Scott",
    fatherName: "Chris Scott",
    age: 15,
    rollNo: "122",
    class: "9th Grade",
  },
  {
    name: "Samantha Green",
    fatherName: "Shawn Green",
    age: 17,
    rollNo: "123",
    class: "11th Grade",
  },
  {
    name: "Andrew Adams",
    fatherName: "Jason Adams",
    age: 14,
    rollNo: "124",
    class: "8th Grade",
  },
  {
    name: "Ella Baker",
    fatherName: "Ryan Baker",
    age: 16,
    rollNo: "125",
    class: "10th Grade",
  },
];

var present = [];
var absent = [];
var leave = [];

var list = document.getElementById("user-list");
var present_html = document.getElementById("present");
var absent_html = document.getElementById("absent");
var leave_html = document.getElementById("leave");

for (var i = 0; i < users.length; i++) {
  var ele = ` <tr>
    <td>${i + 1}</td>
    <td>${users[i].name}</td>
    <td>${users[i].fatherName}</td>
    <td>${users[i].rollNo}</td>
    <td>
      <label>
        <input onchange="updateStatus(this)" type="radio" name="${
          "attendance" + i
        }" value="Present" id="" />
        Present
      </label>
    </td>
    <td>
      <label>
        <input onchange="updateStatus(this)" type="radio" name="${
          "attendance" + i
        }" value="Absent" id="" /> Absent
      </label>
    </td>
    <td>
      <label>
        <input onchange="updateStatus(this)" type="radio" name="${
          "attendance" + i
        }" value="Leave" id="" /> Leave
      </label>
    </td>
  </tr>`;

  list.innerHTML += ele;
}

function updateStatus(ele) {

  if (ele.value === "Present") {
    present_html.innerText = ++present;
  }
  if (ele.value === "Absent") {
    absent_html.innerText = ++absent;
  }
  if (ele.value === "Leave") {
    leave.innerText = ++leave;
  }
}
