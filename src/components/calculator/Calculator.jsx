import React, { useState } from "react";
import { StyledCalculator, Wrapper } from "./Calculator.styles";
import Nav from "../nav/Nav";
import Screen from "../screen/Screen";
import Keypad from "../keypad/Keypad";
import {
  handleDisplay,
  handleOperators,
  handleOther,
} from "../../utils/helpers";

const Calculator = ({ ...props }) => {
  const [memory, setMemory] = useState({
    firstNum: "0",
    secondNum: "0",
    operator: null,
  });

  const keyFunctions = {
    digit: handleDisplay,
    operator: handleOperators,
    other: handleOther,
  };

  const handleClick = (e) => {
    let key = e.target.name;
    let digit = e.target.value;
    if (!key) return;
    let fnc = keyFunctions[key];
    fnc(digit, memory, setMemory);
  };

  return (
    <Wrapper>
      <StyledCalculator>
        <Nav {...props} />
        <Screen result={memory.firstNum} />
        <Keypad handleClick={handleClick} />
      </StyledCalculator>
    </Wrapper>
  );
};

export default Calculator;
