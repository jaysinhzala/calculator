//---------------------------------------------
//  Stored DOM elements once for efficiency
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


function appendNumber(number){
    previousNumber = previousNumber + number;
    inputElement.value = previousNumber;
    console.log(previousNumber);
}

function chooseOperation(opSymbol){
    operation = opSymbol;
    console.log(operation);   
}

divBtn.addEventListener('click',() => {chooseOperation('/')});
