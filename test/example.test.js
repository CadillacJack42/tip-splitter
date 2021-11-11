// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, sub, multiply, divide } from '../utils.js';

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


test('Should use addition to solve a basic math problem', (expect) => {
    const expected = 5;

    const actual = add(2, 3);

    expect.equal(actual, expected);
});


test('Should use subtraction to solve a basic math problem', (expect) => {
    const expected = 2;

    const actual = sub(5, 3);

    expect.equal(actual, expected);
});


test('Should use multiplication to solve a basic math problem', (expect) => {
    const expected = 25;

    const actual = multiply(5, 5);

    expect.equal(actual, expected);
});


test('Should use division to solve a basic math problem', (expect) => {
    const expected = 1;

    const actual = divide(5, 5);

    expect.equal(actual, expected);
});