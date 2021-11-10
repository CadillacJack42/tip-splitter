


// export const tipPerPerson = (billTotal, percent, numOfPeople) => {
//   return billTotal*percent / numOfPeople;
// }

export const tipPerPerson = (billTotal, percent, numOfPeople) => {
  return ((billTotal*percent) / numOfPeople);
}


// export const totalPerPerson = (billTotal, percent, numOfPeople) => {
//   const people = billTotal*percent / numOfPeople + billTotal
//   return people;
// }


export const totalPerPerson = (billTotal, percent, numOfPeople) => {
  const people = (billTotal / numOfPeople) + ((billTotal*percent) / numOfPeople)
  return people;
}


