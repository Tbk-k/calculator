import React from "react";
import { StyledScreen, Wrapper } from "./Screen.styles";

const Screen = ({ result }) => {
  return (
    <Wrapper>
      <StyledScreen>
        <input type="text" value={result} disabled maxLength={10} />
      </StyledScreen>
    </Wrapper>
  );
};

export default Screen;
