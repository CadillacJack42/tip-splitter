// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { tipPerPerson, totalPerPerson } from "../calculate.js";
import { stringCleaner } from "../textFormatter.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//  Tests for Calculator
test('Should return the correct amount for individual tip', (expect) => {
    const expected = 1.25;
    const actual = tipPerPerson(100, .05, 4);
    expect.equal(actual, expected);
});

test('Should return the correct total amount for each individual', (expect) => {
    const expected = 26.25;
    const actual = totalPerPerson(100, .05, 4);
    expect.equal(actual, expected);
});
//  DO NOT FORGET TO ADD TESTS FOR EACH TIP VALUE

// Tests for Event Listener generator
// ........
// ........
// ........


// Tests for string Formatter
test('Should take in a string and format to start with a dollar symbol, followed by an arbitrary number of numerical digits, followed by an optional decimal point and 2 numerical digits', (expect) => {
    const expected = '$0.00';
    const actual = stringCleaner(0.0);
    expect.equal(actual, expected);
});

test('Should take in a string and format to start with a dollar symbol, followed by an arbitrary number of numerical digits, followed by an optional decimal point and 2 numerical digits', (expect) => {
    const expected = '$0.20';
    const actual = stringCleaner(0.20);
    expect.equal(actual, expected);
});

test('Should take in a string and format to start with a dollar symbol, followed by an arbitrary number of numerical digits, followed by an optional decimal point and 2 numerical digits', (expect) => {
    const expected = '$1000.00';
    const actual = stringCleaner(1000);
    expect.equal(actual, expected);
});

test('Should take in a string and format to start with a dollar symbol, followed by an arbitrary number of numerical digits, followed by an optional decimal point and 2 numerical digits', (expect) => {
    const expected = '$10.00';
    const actual = stringCleaner(10.000000000000);
    expect.equal(actual, expected);
});

test('Should take in a string and format to start with a dollar symbol, followed by an arbitrary number of numerical digits, followed by an optional decimal point and 2 numerical digits', (expect) => {
    const expected = '$0.00';
    const actual = stringCleaner();
    expect.equal(actual, expected);
});


//  Tests for user input tip amount
test('Should take input from "Custom" field and replace fixed tip amount with input.value', (expect) => {
    const expected = 3.25;
    const actual = tipPerPerson(100, .13, 4);
    expect.equal(actual, expected);
});

test('Should take input from "Custom" field and replace fixed tip amount with input.value', (expect) => {
    const expected = 28.25;
    const actual = totalPerPerson(100, .13, 4);
    expect.equal(actual, expected);
});


//  Tests for Reset button
// test('Should reset all non-fixed values to either a blank string, or $0.00', (expect) => {
//     const expected = ''
//     const actual = 
// });

