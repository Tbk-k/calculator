import React from "react";
import { StyledBtn } from "./Btn.styles";

const Btn = ({ value, type }) => {
  return (
    <StyledBtn name={type} value={value}>
      {value}
    </StyledBtn>
  );
};

export default Btn;
