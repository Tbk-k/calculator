import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.btns.primary.color};
  span {
    font-weight: bold;
    font-size: 18px;
  }
  div {
    datalist {
      display: flex;
      color: white;
      width: 100%;
      justify-content: space-between;
      padding: 0 5px;
    }
    span {
      font-size: 12px;
      text-transform: uppercase;
    }
    input {
      cursor: pointer;
      appearance: none;
      width: 50px;
      border-radius: 20px;
      outline: none;
      background-color: ${({ theme }) => theme.frame};
      padding: 0 5px;
      &::-webkit-slider-thumb {
        appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
      }
    }
  }
`;
