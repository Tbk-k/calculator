import React from "react";
import Btn from "./btn/Btn";
import { StyledKeypad, Wrapper } from "./Keypad.styles";

const Keypad = ({ handleDigit }) => {
  const calculatorKeys = [
    { id: "key-7", value: "7", type: "digit" },
    { id: "key-8", value: "8", type: "digit" },
    { id: "key-9", value: "9", type: "digit" },
    { id: "key-delete", value: "del", type: "other" },
    { id: "key-4", value: "4", type: "digit" },
    { id: "key-5", value: "5", type: "digit" },
    { id: "key-6", value: "6", type: "digit" },
    { id: "key-add", value: "+", type: "operator" },
    { id: "key-1", value: "1", type: "digit" },
    { id: "key-2", value: "2", type: "digit" },
    { id: "key-3", value: "3", type: "digit" },
    { id: "key-subtract", value: "-", type: "operator" },
    { id: "key-decimal", value: ".", type: "other" },
    { id: "key-0", value: "0", type: "digit" },
    { id: "key-divide", value: "/", type: "operator" },
    { id: "key-multiply", value: "*", type: "operator" },
    { id: "key-reset", value: "reset", type: "other" },
    { id: "key-equals", value: "=", type: "operator" },
  ];

  return (
    <Wrapper>
      <StyledKeypad onClick={handleDigit}>
        {calculatorKeys.map(({ ...props }) => (
          <Btn key={props.id} {...props} />
        ))}
      </StyledKeypad>
    </Wrapper>
  );
};

export default Keypad;
