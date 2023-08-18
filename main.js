const calculator = {
  previousNum: '',
  currentNum: '',
  operator: '',
  solution: '',
};

const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn');

numBtns.forEach((element) =>
  element.addEventListener('click', (e) => {
    if (calculator.solution !== '') {
      allClear();
    }
    calculator.currentNum += e.target.textContent;
    updateCurrentNumDisplay();
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener('click', (e) => {
    const str = e.target.textContent;
    if (str === '-' && calculator.currentNum === '') {
      calculator.currentNum = str;
      updateCurrentNumDisplay();
    } else if (calculator.operator !== '') {
      chainOperation(str);
    } else {
      assignOperator(str);
    }
  })
);

equalsBtn.addEventListener('click', () => {
  if (calculator.previousNum === '' || calculator.currentNum === '') {
    return;
  } else {
    operate();
  }
});

function updateCurrentNumDisplay() {
  const currentNumDisplay = document.querySelector('.current-num-display');
  if (calculator.currentNum === '') {
    currentNumDisplay.textContent = '0';
  } else {
    currentNumDisplay.textContent = calculator.currentNum;
  }
}

function assignOperator(str) {
  if (
    calculator.operator !== '' ||
    calculator.currentNum === '' ||
    calculator.currentNum === '-'
  ) {
    return;
  } else {
    calculator.operator = str;
    calculator.previousNum = calculator.currentNum;
    calculator.currentNum = '';
    updateExpressionDisplay();
  }
}

function updateExpressionDisplay(chainOperation) {
  const expressionDisplay = document.querySelector('.expression-display');
  if (calculator.solution === 'LOL') {
    expressionDisplay.textContent = "You can't do that!";
  } else if (calculator.previousNum === '') {
    expressionDisplay.innerHTML = '&nbsp;';
  } else if (calculator.currentNum === '' || chainOperation) {
    expressionDisplay.textContent = `${calculator.previousNum} ${calculator.operator}`;
  } else {
    expressionDisplay.textContent = `${calculator.previousNum} ${calculator.operator} ${calculator.currentNum} =`;
  }
}

function allClear() {
  calculator.previousNum = '';
  calculator.currentNum = '';
  calculator.operator = '';
  calculator.solution = '';
  updateCurrentNumDisplay();
  updateExpressionDisplay();
}

function del() {
  if (calculator.currentNum.length > 1) {
    calculator.currentNum = calculator.currentNum.slice(0, -1);
    updateCurrentNumDisplay();
  } else {
    allClear();
  }
}

function addDecimal() {
  if (calculator.currentNum.includes('.')) {
    return;
  } else {
    calculator.currentNum += '.';
    updateCurrentNumDisplay();
  }
}

function add(num1, num2) {
  calculator.solution = num1 + num2;
  updateExpressionDisplay();
  calculator.currentNum = calculator.solution;
  updateCurrentNumDisplay();
}

function subtract(num1, num2) {
  calculator.solution = num1 - num2;
  updateExpressionDisplay();
  calculator.currentNum = calculator.solution;
  updateCurrentNumDisplay();
}

function multiply(num1, num2) {
  calculator.solution = num1 * num2;
  updateExpressionDisplay();
  calculator.currentNum = calculator.solution;
  updateCurrentNumDisplay();
}

function divide(num1, num2) {
  if (num2 === 0) {
    calculator.solution = 'LOL';
  } else {
    calculator.solution = num1 / num2;
  }
  updateExpressionDisplay();
  calculator.currentNum = calculator.solution;
  updateCurrentNumDisplay();
}

function operate() {
  const num1 = Number(calculator.previousNum);
  const num2 = Number(calculator.currentNum);
  switch (calculator.operator) {
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

function chainOperation(str) {
  if (calculator.currentNum === '' || calculator.currentNum === '-') {
    return;
  }
  operate();
  if (calculator.solution === 'LOL') {
    updateExpressionDisplay();
  } else {
    calculator.operator = str;
    calculator.previousNum = calculator.currentNum;
    calculator.currentNum = '';
    calculator.solution = '';
    updateExpressionDisplay(true);
  }
}
