export const stringCleaner = (stringToClean) => {
    let clean = stringToClean.toFixed(2)
    console.log(clean);
    return `\$${clean}`
}