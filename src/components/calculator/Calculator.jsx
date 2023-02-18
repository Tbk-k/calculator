import React from "react";
import { StyledCalculator, Wrapper } from "../Calculator.styles";
import Nav from "../nav/Nav";

const Calculator = () => {
  return (
    <Wrapper>
      <StyledCalculator>
        <Nav />
      </StyledCalculator>
    </Wrapper>
  );
};

export default Calculator;
