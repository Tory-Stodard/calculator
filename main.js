let num1 = "";
let num2 = "";
let operator;

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalsBtn = document.querySelector(".equals-btn");

numberBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    const str = e.target.textContent;
    if (operator === undefined) {
      num1 += str;
      updateDisplay(num1);
    } else {
      num2 += str;
      updateDisplay(num2);
    }
  })
);

operatorBtns.forEach((element) =>
  element.addEventListener("click", (e) => {
    const str = e.target.textContent;
    assignOperator(str);
  })
);

equalsBtn.addEventListener("click", () => {
  if (num1 === "" || num2 === "") {
    return;
  } else {
    operate(num1, num2, operator);
  }
});

function add(num1, num2) {
  const solution = num1 + num2;
  updateDisplay(solution);
}

function subtract(num1, num2) {
  const solution = num1 - num2;
  updateDisplay(solution);
}

function multiply(num1, num2) {
  const solution = num1 * num2;
  updateDisplay(solution);
}

function divide(num1, num2) {
  const solution = num1 / num2;
  updateDisplay(solution);
}

function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

function updateDisplay(str) {
  const display = document.querySelector(".display");
  display.textContent = str;
}

function assignOperator(str) {
  operator = str;
  updateDisplay(` ${operator} `);
}

function allClear() {
  num1 = "";
  num2 = "";
  operator = undefined;
  updateDisplay("0");
}
