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

// console.log(tipAmountEl[0].innerText[tipAmountEl[0].innerText.length-1]);
console.log(tipAmountEl[0]);
console.log(billTotal.value, numberOfPeople);
console.log(tipAmountEl[5]);
// Add Event Listener 

// We want to grab the bill total and select a tip and divide by the number of people.
// The goal is to split the tip amount evenly per person 

let arr = [];
for (let i = 0; i < tipAmountEl.length-1; i++) {
  const number = tipAmountEl[i].textContent.slice(0, -1)

  arr.push(+number/100) 

  }

  // eListener(tipAmountEl)

  
  // Event Listener for 5% 
  tipAmountEl[0].addEventListener('click', () => {
      
    let dirtyTip = tipPerPerson(billTotal.value, arr[0], numberOfPeople.value)
    let dirtyTotal = totalPerPerson(+billTotal.value, arr[0], +numberOfPeople.value)

    tipEl.textContent =  stringCleaner(dirtyTip)
    totalEl.textContent = stringCleaner(dirtyTotal)
})


// Event Listener for 10% 
tipAmountEl[1].addEventListener('click', () => {
    let dirtyTip = tipPerPerson(billTotal.value, arr[1], numberOfPeople.value)
    let dirtyTotal = totalPerPerson(+billTotal.value, arr[1], +numberOfPeople.value)

    tipEl.textContent =  stringCleaner(dirtyTip)
    totalEl.textContent = stringCleaner(dirtyTotal)
})


// Event Listener for 15% 
tipAmountEl[2].addEventListener('click', () => {
let dirtyTip = tipPerPerson(billTotal.value, arr[2], numberOfPeople.value)
let dirtyTotal = totalPerPerson(+billTotal.value, arr[2], +numberOfPeople.value)

tipEl.textContent =  stringCleaner(dirtyTip)
totalEl.textContent = stringCleaner(dirtyTotal)
})


// Event Listener for 20% 
tipAmountEl[3].addEventListener('click', () => {
  let dirtyTip = tipPerPerson(billTotal.value, arr[3], numberOfPeople.value)
  let dirtyTotal = totalPerPerson(+billTotal.value, arr[3], +numberOfPeople.value)

  tipEl.textContent =  stringCleaner(dirtyTip)
  totalEl.textContent = stringCleaner(dirtyTotal)
})


// Event Listener for 25% 
tipAmountEl[4].addEventListener('click', () => {
  let dirtyTip = tipPerPerson(billTotal.value, arr[4], numberOfPeople.value)
  let dirtyTotal = totalPerPerson(+billTotal.value, arr[4], +numberOfPeople.value)

  tipEl.textContent =  stringCleaner(dirtyTip)
  totalEl.textContent = stringCleaner(dirtyTotal)
})


// Event Listener for custom
tipCustom.addEventListener('change', () => {
  const change = +tipAmountEl[5].value/100

    let dirtyTip = tipPerPerson(billTotal.value, change, numberOfPeople.value)
    let dirtyTotal = totalPerPerson(+billTotal.value, change, +numberOfPeople.value)

    tipEl.textContent =  stringCleaner(dirtyTip)
    totalEl.textContent = stringCleaner(dirtyTotal)
})




resetBtn.addEventListener('click', () => {
  tipEl.textContent = '$0.00' 
  totalEl.textContent = '$0.00'
  billTotal.value = '';
  numberOfPeople.value = '';
})
