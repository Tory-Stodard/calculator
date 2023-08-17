let num1 = '';
let num2 = '';
let currentNum = '';
let operator = '';

const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn');

numberBtns.forEach((element) =>
  element.addEventListener('click', (e) => {
    const str = e.target.textContent;
    currentNum += str;
    updateCurrentNumberDisplay(currentNum);
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener('click', (e) => {
    const str = e.target.textContent;
    assignOperator(str);
  })
);

equalsBtn.addEventListener('click', () => {
  if (num1 === '') {
    return;
  } else if (currentNum != '') {
    num2 = currentNum;
    operate(num1, num2, operator);
  }
});

function add(num1, num2) {
  const solution = num1 + num2;
  updateExpressionDisplay(false, solution);
}

function subtract(num1, num2) {
  const solution = num1 - num2;
  updateExpressionDisplay(false, solution);
}

function multiply(num1, num2) {
  const solution = num1 * num2;
  updateExpressionDisplay(false, solution);
}

function divide(num1, num2) {
  const solution = num1 / num2;
  updateExpressionDisplay(false, solution);
}

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
  }
}

function updateCurrentNumberDisplay(currentNum) {
  const currentNumDisplay = document.querySelector('.current-number-display');
  currentNumDisplay.textContent = currentNum;
}

function updateExpressionDisplay(shouldClear, solution) {
  const expressionDisplay = document.querySelector('.expression-display');
  if (shouldClear) {
    expressionDisplay.innerHTML = '&nbsp';
  } else if (num1 === '') {
    num1 = currentNum;
    currentNum = '';
    expressionDisplay.textContent = `${num1} ${operator}`;
  } else {
    expressionDisplay.textContent = `${num1} ${operator} ${num2} = ${solution}`;
  }
}

function allClear() {
  num1 = '';
  num2 = '';
  currentNum = '';
  operator = '';
  updateCurrentNumberDisplay('0');
  updateExpressionDisplay(true);
}

function assignOperator(str) {
  if (currentNum === '') {
    return;
  } else {
    operator = str;
    updateExpressionDisplay();
  }
}
