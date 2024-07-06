// var obj = {
//   name: "Bilal", // property
//   age: 18, // property
//   isVerified: true, // property
//   result: function () {
//     // method
//     console.log("Chal raha he");
//   },
// };

// // console.log(obj);
// // console.log("get single property ", obj.name);

// // obj.name = "Huzaifa"
// // console.log(obj);

// // console.log(obj.result());

// var now = new Date();

// console.log(now); // date
// console.log(typeof now); // get date type

// console.log(now.getDate()); // get date for date object
// console.log("Date", now.toLocaleDateString()); // full date

// var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

// console.log("Day ", dayNames[now.getDay()]);

// console.log(now.getMonth());
// console.log(now.getFullYear());

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var am_pm = document.getElementById("am-pm");
var currentSeconds = null;

setInterval(function () {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();

  if (currentDate.getHours() < 12) {
    am_pm.innerText = "AM";
  } else {
    am_pm.innerText = "PM";
  }

  if (currentDate.getSeconds() < 10) {
    currentSeconds = 0 + currentDate.getSeconds();
  } else {
    currentSeconds = currentDate.getSeconds();
  }

  hours.innerText = currentDate.getHours();
  minutes.innerText = currentDate.getMinutes();
  seconds.innerText = currentSeconds;
}, 1000);

//Date.getTime()
// Jan 1 1970 se abhe tk jitne milleseconds guzar gae wo lekar aajata he..

// var now = new Date();
// var bd = new Date("4/19/1997");  //mm/dd/yyyy
// var milleseconds = now.getTime();
// var bdMillseconds = bd.getTime();
// var diff = milleseconds - bdMillseconds;
// console.log("milleseconds=>", diff);
// console.log("seconds=>", Math.round(diff / 1000));
// console.log("minutes=>", Math.round(diff / 1000 / 60));
// console.log("hours=>", Math.round(diff / 1000 / 60 / 60));
// console.log("day=>", Math.round(diff / 1000 / 60 / 60 / 24));
// console.log("months=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30));
// console.log("years=>", Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12));

var attendanceTime = new Date();
attendanceTime.setHours(18);
attendanceTime.setMinutes(45);
attendanceTime.setSeconds(0);
console.log(attendanceTime);
var now = new Date();
var diff = now.getTime() - attendanceTime.getTime();
var minutes = Math.floor(diff / 1000 / 60);
console.log("minutes=>", minutes);
if (minutes <= 0) {
  console.log("You are on time.Keep it Up!");
} else if (minutes <= 5) {
  console.log("Bach gae aaj. Kal se fix 45 se pehle aajana");
} else {
  console.log("You are late.Salary kat gye.Yeah!");
}
