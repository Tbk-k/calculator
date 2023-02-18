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
  p {
    font-size: 50px;
    color: ${({ theme }) => theme.screen.color};
    font-weight: bold;
  }
`;
