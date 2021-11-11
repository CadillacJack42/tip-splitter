export const stringCleaner = (stringToClean) => {
    if(stringToClean === undefined){
        return '$0.00'
    } else {
        let clean = stringToClean.toFixed(2)
    return `\$${clean}`
    }
}