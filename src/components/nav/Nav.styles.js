import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.screen.color};
  padding: 20px;
  span {
    font-weight: bold;
    font-size: 22px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  span {
    font-size: 12px;
    text-transform: uppercase;
    position: absolute;
    left: -100%;
    top: 50%;
  }
`;

export const ThemeSelect = styled.div`
  datalist {
    display: flex;
    color: white;
    width: 100%;
    justify-content: space-between;
    padding: 0 5px;
    option {
      font-size: 12px;
      color: ${({ theme }) => theme.screen.color};
    }
  }
  input {
    cursor: pointer;
    appearance: none;
    width: 60px;
    border-radius: 20px;
    outline: none;
    background-color: ${({ theme }) => theme.frame};
    padding: 0 5px;
    margin: 0;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.btns.additional.bg};
    }
  }
`;
