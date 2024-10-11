//document.getElementById('count-el').innerText = 5 

// intialiaze the count as 0
// listen for clicks on the increment button
//increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl) 

let count = 0

function increment() {
     count +=  1
     countEl.textContent = count
}

function save() {
       let quantityOfPeople = count + "-"

       saveEl.textContent += quantityOfPeople

       countEl.textContent = 0
       count = 0

 }


