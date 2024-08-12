let currVal = null;
let prevVal = null;
let operation = null;
let oneDecimal = false;
let input = false;

const display = document.querySelector('#display');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const allclear = document.querySelector('#allclear');
const negative = document.querySelector('#negative');
const backspace = document.querySelector('#backspace');

one.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '1';
        input = !input;
    }
    else {
        display.value = display.value + '1';
    }
    currVal = Number(display.value);
});

two.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '2';
        input = !input;
    }
    else {
        display.value = display.value + '2';
    }
    currVal = Number(display.value);
});

three.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '3';
        input = !input;
    }
    else {
        display.value = display.value + '3';
    }
    currVal = Number(display.value);
});

four.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '4';
        input = !input;
    }
    else {
        display.value = display.value + '4';
    }
    currVal = Number(display.value);
});

five.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '5';
        input = !input;
    }
    else {
        display.value = display.value + '5';
    }
    currVal = Number(display.value);
});

six.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '6';
        input = !input;
    }
    else {
        display.value = display.value + '6';
    }
    currVal = Number(display.value);
});

seven.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '7';
        input = !input;
    }
    else {
        display.value = display.value + '7';
    }
    currVal = Number(display.value);
});

eight.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '8';
        input = !input;
    }
    else {
        display.value = display.value + '8';
    }
    currVal = Number(display.value);
});

nine.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '9';
        input = !input;
    }
    else {
        display.value = display.value + '9';
    }
    currVal = Number(display.value);
});

zero.addEventListener('click', () => {
    if (input || display.value === '0') {
        display.value = '0';
        input = !input;
    }
    else {
        display.value = display.value + '0';
    }
    currVal = Number(display.value);
});

negative.addEventListener('click', () => {
    if (display.value === null || display.value === '0') {
        display.value = '-';
    }
    else if (display.value[0] === '-') {
        display.value = display.value.slice(1, display.value.length);
    } else {
        display.value = '-' + display.value;
    }
    currVal = Number(display.value);
});

decimal.addEventListener('click', () => {
    if (input) {
        display.value = '.';
        input = !input;
    }
    else if (oneDecimal === false) {
        display.value = display.value + '.';
        currVal = Number(display.value);
        oneDecimal = !oneDecimal;
    }
});

equals.addEventListener('click', () => {
    if (operation === 'add') {
        display.value = addition(prevVal, currVal);
    }
    else if (operation === 'subtract') {
        display.value = subtraction(prevVal, currVal);
    }
    else if (operation === 'multiply') {
        display.value = multiplication(prevVal, currVal);
    }
    else if (operation === 'divide') {
        display.value = division(prevVal, currVal);
    }
    else {
        display.value = currVal;
    }
    currVal = Number(display.value);
    operation = null;
    oneDecimal = false;
    input = true;
});

add.addEventListener('click', () => {
    if (currVal !== null && operation === 'add') {
        display.value = addition(prevVal, currVal);
        operation = 'add';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'subtract') {
        display.value = subtraction(prevVal, currVal);
        operation = 'add';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'multiply') {
        display.value = multiplication(prevVal, currVal);
        operation = 'add';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'divide') {
        display.value = division(prevVal, currVal);
        operation = 'add';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else {
        operation = 'add';
        prevVal = Number(display.value);
        currVal = null;
        oneDecimal = false;
    }
    input = true;
});

subtract.addEventListener('click', () => {
    if (currVal !== null && operation === 'add') {
        display.value = addition(prevVal, currVal);
        operation = 'subtract';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'subtract') {
        display.value = subtraction(prevVal, currVal);
        operation = 'subtract';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'multiply') {
        display.value = multiplication(prevVal, currVal);
        operation = 'subtract';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'divide') {
        display.value = division(prevVal, currVal);
        operation = 'subtract';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else {
        operation = 'subtract';
        prevVal = Number(display.value);
        currVal = null;
        oneDecimal = false;
    }
    input = true;
});

multiply.addEventListener('click', () => {
    if (currVal !== null && operation === 'add') {
        display.value = addition(prevVal, currVal);
        operation = 'multiply';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'subtract') {
        display.value = subtraction(prevVal, currVal);
        operation = 'multiply';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'multiply') {
        display.value = multiplication(prevVal, currVal);
        operation = 'multiply';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'divide') {
        display.value = division(prevVal, currVal);
        operation = 'multiply';
        prevVal = Number(display.value);
        oneDecimal = false;
    } else {
        operation = 'multiply';
        prevVal = Number(display.value);
        currVal = null;
        oneDecimal = false;
    }
    input = true;
});

divide.addEventListener('click', () => {
    if (currVal !== null && operation === 'add') {
        display.value = addition(prevVal, currVal);
        operation = 'divide';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'subtract') {
        display.value = subtraction(prevVal, currVal);
        operation = 'divide';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'multiply') {
        display.value = multiplication(prevVal, currVal);
        operation = 'divide';
        prevVal = Number(display.value);
        oneDecimal = false;
    }
    else if (currVal !== null && operation === 'divide') {
        display.value = division(prevVal, currVal);
        operation = 'divide';
        prevVal = Number(display.value);
        oneDecimal = false;
    } else {
        operation = 'divide';
        prevVal = Number(display.value);
        currVal = null;
        oneDecimal = false;
    }
    input = true;
});

clear.addEventListener('click', () => {
    operation = null;
    display.value = prevVal;
    oneDecimal = false;
    currVal = null;
    input = true;
});

allclear.addEventListener('click', () => {
    operation = null;
    display.value = '0';
    currVal = null;
    prevVal = null;
    oneDecimal = false;
    input = true;
});

backspace.addEventListener('click', () => {
    if (!input) {
        display.value = display.value.slice(0, display.value.length - 1);
        currVal = display.value;
    }
});

function addition(curr, next) {
    const val = Number(curr) + Number(next);
    if (Number.isInteger(val))
        return val;
    else
        return val.toFixed(15);
}

function subtraction(curr, next) {
    const val = Number(curr) - Number(next);
    if (Number.isInteger(val))
        return val;
    else
        return val.toFixed(15);
}

function multiplication(curr, next) {
    const val = Number(curr) * Number(next);
    if (Number.isInteger(val))
        return val;
    else
        return val.toFixed(15);
}

function division(curr, next) {
    if (Number(next) === 0) {
        return display.value = 'Error';
    }
    else {
        const val = Number(curr) / Number(next);
        if (Number.isInteger(val))
            return val;
        else
            return val.toFixed(15);
    }
}