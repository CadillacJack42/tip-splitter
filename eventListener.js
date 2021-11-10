export const eListener = (arr) => {
    import { tipPerPerson, totalPerPerson } from "./calculate.js"

    
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        element.addEventListener('click', () => {
            
        })
        
    }
}