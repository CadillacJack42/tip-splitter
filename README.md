# tip-splitter

#### An application to calculate the amounts each person in a party would have to pay to split a bill


### Things we need

3 Div

2 Label/Input

5 Spans

7 buttons


### Why do we need these
Divs
- Main
- To house inputs 'section'
- To display outputs



Inputs
- Total bill amount
- How many people will split the bill

Spans
- Try label to label area 
- Descriptor of field * 2
- Calculation Displays

Buttons
- 6 Options of tip amount
- Reset Button

# Testing

### What needs to be tested?
1. Caculate.js
1. EventListener.js
1. TextFormatter.js
1. Custom input function
1. Reset button function

### Why does it need to be tested?
1. To verify that the amounts being displayed are 
correct for tip amount and total per person
1. Should generate eventListeners for each fixed value button
1. Should ensure numbers are 2 decimals places and add $ sign to beginning and return 
properly formatted string
1. Should take in value from custom input button and display tip amount and total per person
1. Should set all non fixed values to a default value such as $0.00 or ''

### How can it be tested?
1. Take the product of bill amount and tip percent and 
divide them by number of people (following PEMDAS) and
return tip per person
    1. Take the quotient of bill total and number of people 
    and add it to the product of bill total and percent then divide
    by number of people (following PEMDAS) and should return total per person

1. I dont know...
1. Use regex to verify that the string being produced by the textFormatter 
begins with a $ is succedded by any number of numbers followed by a decimal place and 2 numbers
1. Should take an input value from the user input, and use that value in place of fixed tip values
to execute calculate.js functions
1. Should set all non-fixed value fields to a blank string or $0.00

# Stretch Goals
- Add validation
