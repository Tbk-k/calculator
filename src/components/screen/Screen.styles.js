import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const StyledScreen = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.screen.bg};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  input {
    font-size: 50px;
    width: 100%;
    color: ${({ theme }) => theme.screen.color};
    font-weight: bold;
    border: none;
    outline: none;
    background-color: transparent;
    text-align: end;
  }
`;
