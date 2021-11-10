export const stringCleaner = (stringToClean) => {
    console.log(stringToClean);
    let clean = stringToClean.toFixed(2)
    return `\$${clean}`
}