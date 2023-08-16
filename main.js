const num1 = [];
const num2 = [];
let operator;

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
  if (num1.length === 0) {
    display.textContent = userInput;
    num1.push(userInput);
  } else if (operator === undefined) {
    display.textContent += userInput;
    num1.push(userInput);
  }
}
