//---------------------------------------------
//  Stored DOM elements once for efficiency.
//---------------------------------------------
const inputElement = document.querySelector('.js-input');
const clrBtn = document.querySelector('.js-clear-button');
const deleteBtn = document.querySelector('.js-delete-button');
const percentageBtn = document.querySelector('.js-percentage-button');
const divBtn = document.querySelector('.js-division-button');
const mulBtn = document.querySelector('.js-multiplication-button');
const subBtn = document.querySelector('.js-subtraction-button');
const addBtn = document.querySelector('.js-plus-button');
const equalBtn = document.querySelector('.js-equal-button');
const pointBtn = document.querySelector('.js-point-button');
const doubleZeroBtn = document.querySelector('.js-00-button');

//---------------------------------------------
//  Created calculator variables 
//---------------------------------------------
let previousNumber = '';
let currentNumber = '';
let operation = null;

//---------------------------------------------
//  Takes a number from clicked button & stores value in variable.
//  Then displays it 
//---------------------------------------------
function appendNumber(number) {
    if (number === 0 && currentNumber === '0') return;
    currentNumber = currentNumber + number.toString();
    updateDisplay();
}

//---------------------------------------------
//  Choose a operation and stores it in a variable 
//---------------------------------------------
function chooseOperation(opSymbol) {
    if (currentNumber === '' && previousNumber === '') return;
    if (currentNumber === '' && previousNumber !== '') {
        operation = opSymbol; // change pending operation
        updateDisplay();
        return;
    }
    if (previousNumber !== '') compute();
    operation = opSymbol;
    previousNumber = currentNumber;
    currentNumber = '';
}

//---------------------------------------------
//  Add double zero feature 
//---------------------------------------------
function addDoubleZero() {
    currentNumber = currentNumber + '00';
    updateDisplay();
}

//---------------------------------------------
//  Delete last degit feature 
//---------------------------------------------
function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

//---------------------------------------------
//  Adds float point to current number 
//---------------------------------------------
function appendPoint() {
    currentNumber = currentNumber + '.';
    updateDisplay();
}

//---------------------------------------------
//  Logic behind compute percentage feature 
//---------------------------------------------
function computePercent() {
    if (currentNumber === '') return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay();
}

//---------------------------------------------
//  Main function that performes all the calculator operations '+,-,*,/' 
//---------------------------------------------
function compute() {
    if (currentNumber === '' || previousNumber === '') return;

    currNo = parseFloat(currentNumber);
    prevNo = parseFloat(previousNumber);

    switch (operation) {
        case '+': currentNumber = (prevNo + currNo).toString(); break;
        case '-': currentNumber = (prevNo - currNo).toString(); break;
        case '*': currentNumber = (prevNo * currNo).toString(); break;
        case '/': currentNumber = currNo === 0 ? 'Error' : (prevNo / currNo).toString(); break;
        default : return;
    }

    operation = null;
    previousNumber = '';
    updateDisplay();
}

//---------------------------------------------
//  This function is used to display every digit to input field 
//---------------------------------------------
function updateDisplay() {
    let displayValue = currentNumber || previousNumber || '0';

    // Prevent formatting for non-numeric values like 'Error'
    if (isNaN(displayValue)) {
        inputElement.value = displayValue;
        return;
    }

    // Split into integer and decimal parts
    const [intPart, decimalPart] = displayValue.split('.');

    // Format integer part with commas
    const formattedInt = parseInt(intPart, 10).toLocaleString();

    // Combine with decimal if exists
    inputElement.value = decimalPart !== undefined
        ? `${formattedInt}.${decimalPart}`
        : formattedInt;
}

//---------------------------------------------
//  Clear button feature 
//---------------------------------------------
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

//---------------------------------------------
//  Used DOM variables to add event listener to call every function 
//---------------------------------------------
divBtn.addEventListener('click', () => { chooseOperation('/') });
mulBtn.addEventListener('click', () => { chooseOperation('*') });
addBtn.addEventListener('click', () => { chooseOperation('+') });
subBtn.addEventListener('click', () => { chooseOperation('-') });
equalBtn.addEventListener('click', compute);
clrBtn.addEventListener('click', clearDisplay);
doubleZeroBtn.addEventListener('click', addDoubleZero);
deleteBtn.addEventListener('click', deleteLast);
pointBtn.addEventListener('click', appendPoint);
percentageBtn.addEventListener('click', computePercent);

updateDisplay();
window.appendNumber = appendNumber;
