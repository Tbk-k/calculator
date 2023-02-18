import React from "react";
import { StyledNav } from "./Nav.styles";

const Nav = () => {
  return (
    <StyledNav>
      <span>calc</span>
      <div>
        <span>theme</span>
        <datalist id="themes">
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
        </datalist>
        <input type="range" min="1" max="3" step="1" list="themes" />
      </div>
    </StyledNav>
  );
};

export default Nav;
