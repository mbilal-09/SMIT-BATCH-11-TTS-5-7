function add(a, b) {
  var result = a + b;
  alert(result);
  return true;
}

var input = document.getElementById("num");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
//declaration
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function checkNumber() {
  if (isEven(input.value)) {
    result.innerText = "Number is Even";
  } else {
    result.innerText = "Number is Odd";
  }
}

function calculate(sign = "+") {
  var num1Val = num1.value;
  var num2Val = num2.value;
  if (sign == "+")
    return (result.innerText = parseInt(num1Val) + parseInt(num2Val));
  if (sign == "-") return (result.innerText = num1Val - num2Val);
  if (sign == "x") return (result.innerText = num1Val * num2Val);
  console.log("---------------------");

  if (sign == "/") return (result.innerText = num1Val / num2Val);
}
