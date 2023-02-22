export const handleDisplay = (key, state, stateFnc) => {
  let { firstNum, secondNum, operator } = state;
  let num;
  if (firstNum === "0" && secondNum === "0") {
    stateFnc((prev) => ({ ...prev, firstNum: key }));
  } else if (firstNum != "0" && operator && secondNum === "0") {
    if (operator === "=") {
      stateFnc({ firstNum: key, secondNum: "0", operator: null });
    } else {
      stateFnc((prev) => ({
        ...prev,
        firstNum: key,
        secondNum: prev.firstNum,
      }));
    }
  } else {
    num = firstNum + key;
    stateFnc((prev) => ({ ...prev, firstNum: num }));
  }
};

const parseNumber = (num) => {
  if (num.includes(".")) {
    num = parseFloat(num);
  } else {
    num = parseInt(num);
  }
  return num;
};

const math = (num1, num2, operator) => {
  let result;
  num1 = parseNumber(num1);
  num2 = parseNumber(num2);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num2 - num1;
      break;
    case "/":
      result = num2 / num1;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  return result.toString();
};

export const handleOperators = (key, state, stateFnc) => {
  let { firstNum, secondNum, operator } = state;
  let result;
  if (firstNum != "0" && !operator) {
    stateFnc((prev) => ({ ...prev, operator: key }));
  } else if (firstNum != "0" && secondNum != "0" && operator) {
    result = math(firstNum, secondNum, operator);
    stateFnc({ firstNum: result, secondNum: "0", operator: key });
  } else if (firstNum != "0" && operator === "=") {
    stateFnc((prev) => ({ ...prev, operator: key }));
  }
};

export const handleOther = (key, state, stateFnc) => {
  let { firstNum } = state;
  if (key === "reset") {
    stateFnc({ firstNum: "0", secondNum: "0", operator: null });
  } else if (key === "del") {
    let value = firstNum.length > 1 ? firstNum.slice(0, -1) : "0";
    stateFnc((prev) => ({
      ...prev,
      firstNum: value,
    }));
  }
};
