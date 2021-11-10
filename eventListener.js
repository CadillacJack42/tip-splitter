import { tipPerPerson, totalPerPerson } from "./calculate.js";
import { stringCleaner } from "./textFormatter.js";

const tipEl = document.getElementById('tipPerPerson');
const totalEl = document.getElementById('totalPerPerson');

const billTotal = document.getElementById('bill-total');
const numberOfPeople = document.getElementById('numberOfPeople');

export const eListener = (btnArr, percentArr) => {
    for (let i = 0; i < btnArr.length-2; i++) {
        const element = btnArr[i];
        element.addEventListener('click', () => {
            let dirtyTip = tipPerPerson(billTotal.value, percentArr[i], numberOfPeople.value);
            let dirtyTotal = totalPerPerson(billTotal.value, percentArr[i], numberOfPeople.value);
            
            tipEl.textContent =  stringCleaner(dirtyTip);
            totalEl.textContent = stringCleaner(dirtyTotal);
        });
        
    };
};