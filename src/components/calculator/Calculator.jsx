import React, { useState } from "react";
import { StyledCalculator, Wrapper } from "./Calculator.styles";
import Nav from "../nav/Nav";
import Screen from "../screen/Screen";
import Keypad from "../keypad/Keypad";

const Calculator = ({ ...props }) => {
  const [digits, setDigits] = useState({ first: 0, second: 0 });
  let value;

  const getDigit = (digit) => {
    if (digits.first == 0) {
      value = digit;
    } else {
      value = parseInt(digits.first.toString() + digit.toString());
    }
  };

  const deleteDigit = () => {
    let stringNum = digits.first.toString();
    if (stringNum.length > 1) {
      value = parseInt(stringNum.slice(0, -1));
    } else {
      value = 0;
    }
  };

  const handleDigit = (e) => {
    let name = e.target.name;
    let digit = e.target.value;
    switch (name) {
      case "digit":
        getDigit(digit);
        break;
      case "other":
        if (digit == "del") {
          deleteDigit();
        } else if (digit == "reset") {
          value = 0;
        }
        break;
      case "operator":
        value = digits.first;
        break;
    }
    setDigits((prev) => ({ ...prev, first: value }));
  };

  return (
    <Wrapper>
      <StyledCalculator>
        <Nav {...props} />
        <Screen result={digits.first} />
        <Keypad handleDigit={handleDigit} />
      </StyledCalculator>
    </Wrapper>
  );
};

export default Calculator;
