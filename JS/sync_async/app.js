//asynchronous
// fetch , api se data ko fetch krna
// settimeout , timer lag jata he or aik particular time ke bad function execute hojata he
// promise , asynchronous function he

// var a = "A";
// var b = "B";

// //asynchronous
// setTimeout(() => {
//   console.log(a);
// }, 0);

// console.log(b);

// ['1','2','3','4'].forEach(()=>{})

//callback
var token = "";
function login(func) {
  setTimeout(() => {
    token = (Math.random() * 1000000).toString();
    func(token)
  }, 500);
}
function getUserData(token) {
  if (token) {
    setTimeout(() => {
      const user = {
        name: "ABC",
      };
      console.log("user=>", user);
    }, 200);
  } else {
    console.log("No Token");
  }
}
login(getUserData);




// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// console.log(b);

// Callbacks

//1. Login
//2. 2s ke baad msg show krna he
//3. phr userka naam display krna he
//4. user ke stats dikhane hen

//callback kehte hen , aik function ke parameter mein 2sre function ko pass krna
// function doStep1(init) {
//   return init + 1;
// }

// function doStep2(init) {
//   return init + 2;
// }

// function doStep3(init) {
//   return init + 3;
// }

// function doOperation() {
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   console.log(`result: ${result}`);
// }

// doOperation();

// function sum(a, b, callBack) {
//   var result = a + b;
//   callBack(result);
// }

// function addGstTax(amount, callBack) {
//   var tax = amount * 0.18;
//   var amountAfterTax = amount + tax;
//   callBack(tax, amountAfterTax);
// }

// function addServiceCharges(amount, callBack) {
//   var service = amount * 0.1;
//   var amountAfterService = amount + service;
//   callBack(service, amountAfterService);
// }

//callback hell
// sum(100, 100, (result) => {
//   console.log("Result", result);
//   addGstTax(result, (tax, taxedAmount) => {
//     console.log("Tax=>", tax);
//     console.log("taxedAmount=>", taxedAmount);
//     addServiceCharges(taxedAmount, (service, amountAfterService) => {
//       console.log("service=>", service);
//       console.log("amountAfterService=>", amountAfterService);
//     });
//   });
// });

// var isError = true;

// function sum(a, b) {
//   return new Promise((resolve, reject) => {
//     resolve(a + b);
//   });
// }

// function addGstTax(amount) {
//   return new Promise((resolve, reject) => {
//     var tax = amount * 0.18;
//     var taxedAmout = amount + tax;
//     resolve(taxedAmout);
//   });
// }

// function addServiceCharges(amount) {
//   return new Promise((resolve, reject) => {
//     var service = amount * 0.1;
//     var amountAfterService = amount + service;
//     resolve(amountAfterService);
//   });
// }

// sum(100, 100).then((amount) => {
//   addGstTax(amount).then((taxedAmout) => {
//     console.log("TaxAmount=>", taxedAmout);
//     addServiceCharges(taxedAmout).then((amount) =>
//       console.log("Amount atfer service", amount)
//     );
//   });
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//   });

// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?lat=35.3967&lon=74.6311&appid=c153479685c47f1b34a83591f3b1acbe"
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("temperatur").innerText =
//       data.main.temp - 273 + "C";
//   });
