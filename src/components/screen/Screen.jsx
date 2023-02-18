import React from "react";
import { StyledScreen, Wrapper } from "./Screen.styles";

const Screen = ({ result }) => {
  return (
    <Wrapper>
      <StyledScreen>
        <p>{result}</p>
      </StyledScreen>
    </Wrapper>
  );
};

export default Screen;
