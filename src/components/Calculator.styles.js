import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCalculator = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
`;
