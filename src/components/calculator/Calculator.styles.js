import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  @media screen and (min-width: 768px) {
    background-color: ${({ theme }) => theme.frame};
  }
`;

export const StyledCalculator = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: auto;
    height: auto;
  }
`;
