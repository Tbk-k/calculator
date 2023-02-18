import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const StyledKeypad = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.frame};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
