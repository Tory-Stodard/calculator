let num1;
let num2;
let operator;
const displayValue = [];

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  let solution;
  if (num1 === undefined || (num2 === undefined && displayValue.length === 0)) {
    return;
  } else {
    switch (operator) {
      case '+':
        solution = add(num1, num2);
        console.log(solution);
      // updateDisplay(solution);
      case '-':
        solution = subtract(num1, num2);
      // updateDisplay(solution);
      case '*':
        solution = multiply(num1, num2);
      // updateDisplay(solution);
      case '/':
        solution = divide(num1, num2);
      // updateDisplay(solution);
    }
  }
}

function updateDisplay(userInput) {
  const display = document.querySelector('.display');
  // if (displayValue.length === 0 && num1 === undefined) {
  //   display.textContent = userInput;
  //   displayValue.push(userInput);
  // } else if (num2 != undefined) {
  //   display.textContent = userInput;
  // } else {
  //   display.textContent += userInput;
  //   displayValue.push(userInput);
  // }

  // console.log(displayValue);

  if (displayValue.length === 0) {
    display.textContent = userInput;
    displayValue.push(userInput);
  } else {
    display.textContent += userInput;
    displayValue.push(userInput);
  }
}

function allClear() {
  const display = document.querySelector('.display');
  display.textContent = '0';
  displayValue.length = 0;
  operator = undefined;
  num1 = undefined;
  num2 = undefined;
}

function assignOperator(userInput) {
  if (displayValue.length === 0 && userInput === '-') {
    updateDisplay(userInput);
  } else if (displayValue.length === 0 && userInput != typeof Number) {
    return;
  } else {
    operator = userInput;
    // updateDisplay(` ${operator} `);
    assignNum();
  }
}

function assignNum() {
  if (num1 === undefined) {
    num1 = parseInt(displayValue.join(''));
    displayValue.length = 0;
    // console.log(num1);
  } else {
    num2 = parseInt(displayValue.join(''));
    displayValue.length = 0;
    operate(operator, num1, num2);
    // console.log(num2);
  }
}
