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
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

function updateDisplay(userInput) {
  const display = document.querySelector('.display');
  if (operator === undefined && displayValue.length === 0) {
    display.textContent = userInput;
    displayValue.push(userInput);
  } else if (operator === undefined) {
    switch (userInput) {
      case '+':
      case '-':
      case '*':
      case '/':
        operator = userInput;
        display.textContent += ` ${userInput} `;
        num1 = parseInt(displayValue.join(''));
        displayValue.length = 0;
        break;
      default:
        display.textContent += userInput;
        displayValue.push(userInput);
    }
  } else {
    switch (userInput) {
      case '=':
        num2 = parseInt(displayValue.join(''));
        const solution = operate(operator, num1, num2);
        display.textContent += ` = ${solution}`;
        displayValue.length = 0;
        break;
      default:
        display.textContent += userInput;
        displayValue.push(userInput);
    }
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
