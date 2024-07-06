// var dada = document.getElementById('dada')
// var pota = document.getElementById('pota')
var clicksHistory = document.getElementById('clicks-history')
var input = document.getElementById('userInput')

// jitne elements iske child honge unko leke aajaega
// console.log("dada=>", dada.children)

// child nodes jo he wo extra lines bhe le aata he
//console.log("Junk Artifects=>", dada.childNodes)


//Abu ko dekhne ke lye
// console.log("pota ke aba=>", pota.parentNode)

// var name = "bilal"

// console.log(`hello ${name}`)


function addRecord() {
    console.log(input.value)

    var li = `<li> <span>${input.value} </span> 
    <button onclick="editThis(this)"> Edit</button>
    <button onclick="deleteThis(this)"> Del</button> </li>`

    // var now = new Date()
    // var time = now.toLocaleTimeString() 
    // var listview = `<li>User clicked on ${time} <button onclick="deleteThis(this)"> Del</button> </li>`
    clicksHistory.innerHTML += li
}


function deleteThis(currentElement) {
    currentElement.parentElement.remove()
}

function editThis(currentElement) {

    var newTxt = prompt('Edit jo krna he wo likh do', currentElement.parentElement.firstElementChild.innerText)

    currentElement.parentElement.firstElementChild.innerText = newTxt

}
