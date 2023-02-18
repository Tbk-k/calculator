import React from "react";
import { StyledNav, ThemeSelect, Wrapper } from "./Nav.styles";

const Nav = ({ mode, change }) => {
  return (
    <StyledNav>
      <span>calc</span>
      <Wrapper>
        <span>theme</span>
        <ThemeSelect>
          <datalist id="themes">
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
          </datalist>
          <input
            type="range"
            min="1"
            max="3"
            step="1"
            value={mode}
            list="themes"
            onChange={change}
          />
        </ThemeSelect>
      </Wrapper>
    </StyledNav>
  );
};

export default Nav;
