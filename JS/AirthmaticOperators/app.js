// Familier Operators

var num1 = 30
var num2 = 10

var addition = num1 + num2
var subtraction = num1 - num2
var multiplication = num1 * num2
var divide = num1 / num2
var modulas = 9 % 4

var bodmas = subtraction + multiplication - addition / 2 + divide * modulas

var bodmas1 = 5 * 10 + 3
var bodmas2 = 5 * 10 + addition / 2
var bodmas3 = 5 * divide + addition - subtraction
var bodmas4 = subtraction - divide + addition - subtraction

// console.log(addition)
// console.log(subtraction)
// console.log(multiplication)
// console.log(divide)
// console.log(modulas)
// console.log(bodmas)
// console.log(bodmas1)
// console.log(bodmas2)
// console.log(bodmas3)
// console.log(bodmas4)

// string pe arithmatic operators ko apply krna

// string mein agr ham number plus (+) krenge to wo concatenate
//hojaega or number bhe string mein convert hojaega
// or agr plus ke
// elawa koi or operator lagaenge to agr string number huwa to apply
// hojaega warna
// NaN aajaega

var number1 = '40'
var number2 = 5

// console.log(number1 + number2)
// console.log(number1 * number2)
// console.log(number1 - number2)
// console.log(number1 / number2)

// console.log("ABCD" * 5)

// UnFamilier Operators

//++ , --

// var number = 20
//post increment/decrement
// number++
// number--

//pre increment/decrement
// ++number
// --number

// console.log(number)

// jiske aage ++/-- lagega wohi variable update hoga.
// post mein pehle variable ko value assign hogi phr update hogi.
// pre mein pehle variable update hoga phr value assign hogi.
var pNum = 10
var pNewNum = pNum++

console.log(pNum)
console.log(pNewNum)

//post decrement
var pdNum = 10
var pdNewNum = pdNum--

console.log(pdNum)
console.log(pdNewNum)

//pre increment
var prNum = 10
var prNewNum = ++prNum

console.log(prNum)
console.log(prNewNum)

//pre decrement
var prdNum = 10
var prdNewNum = --prdNum

console.log(prdNum)
console.log(prdNewNum)

var abc = 10

console.log(abc++)
console.log(abc++)
console.log(abc)
console.log(abc)