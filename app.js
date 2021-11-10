import { tipPerPerson, totalPerPerson } from "./calculate.js"
import { eListener } from "./eventListener.js"
import { stringCleaner } from "./textFormatter.js"

// Cache the DOM 
const tipEl = document.getElementById('tipPerPerson')
const totalEl = document.getElementById('totalPerPerson')
const tipCustom = document.getElementById('btn-custom')
const resetBtn = document.getElementById('resetBtn')
const tipAmountEl = document.getElementsByClassName('btn')
const billTotal = document.getElementById('bill-total')
const numberOfPeople = document.getElementById('numberOfPeople')

// We want to grab the bill total and select a tip and divide by the number of people.
// The goal is to split the tip amount evenly per person 

let arr = [];
for (let i = 0; i < tipAmountEl.length-1; i++) {
  const number = tipAmountEl[i].textContent.slice(0, -1)
  arr.push(+number/100) 
  }

console.log(arr);

  // Function that generates Event Listeners
eListener(tipAmountEl, arr)

// Event Listener for custom tip amount
tipCustom.addEventListener('change', () => {
  const change = tipAmountEl[5].value/100

    let dirtyTip = tipPerPerson(billTotal.value, change, numberOfPeople.value)
    let dirtyTotal = totalPerPerson(+billTotal.value, change, +numberOfPeople.value)

    tipEl.textContent =  stringCleaner(dirtyTip)
    totalEl.textContent = stringCleaner(dirtyTotal)
})

// Event Listener for resetting inputs and output displays
resetBtn.addEventListener('click', () => {
  tipEl.textContent = '$0.00' 
  totalEl.textContent = '$0.00'
  billTotal.value = '';
  numberOfPeople.value = '';
})
