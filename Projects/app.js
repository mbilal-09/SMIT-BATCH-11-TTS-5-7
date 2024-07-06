var obj = {
  name: "Event 1",
  date: "5/12/2023",
};

var array = [
  {
    name: "Event 1",
    date: "5/12/2023",
  },
  {
    name: "Event 2",
    date: "5/16/2023",
  },
  {
    name: "Event 3",
    date: "5/1/2023",
  },
  {
    name: "Event 4",
    date: "5/4/2023",
  },
  {
    name: "Event 5",
    date: "5/5/2023",
  },
];

var number_html = document.getElementById("number");
var start_btn = document.getElementById("start_btn");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");

var runningNumber = 0;
var interval;

function start() {
  if (user_input.value) {
    interval = setInterval(function () {
      if (runningNumber >= 1000) {
        clearInterval(interval);
        runningNumber = 0;
        number_html.innerText = runningNumber;
        result.innerText = "You are late";
        start_btn.disabled = false;
      } else {
        runningNumber++;
        number_html.innerText = runningNumber;
      }
    }, 10);
    start_btn.disabled = true;
  } else {
    alert("Number to daaldo");
  }
}
function stop() {
  console.log(user_input.value);
  console.log(runningNumber);
  clearInterval(interval);
  if (user_input.value == runningNumber) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You Lose";
  }
  runningNumber = 0;
  number_html.innerText = 0;
  start_btn.disabled = false;
}
