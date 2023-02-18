import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 20%;
  aspect-ratio: 1;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.btns.primary.bg};
  box-shadow: ${({ theme }) => `0px 4px 0px 0px ${theme.btns.primary.shadow}`};
  color: ${({ theme }) => theme.btns.primary.color};
  position: relative;
  z-index: 10;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.btns.primary.hover};
  }
  &:last-child,
  &:nth-last-child(2) {
    width: 47%;
    aspect-ratio: 2.5;
  }
  &[value="del"],
  &[value="reset"] {
    background-color: ${({ theme }) => theme.btns.secondary.bg};
    color: ${({ theme }) => theme.btns.secondary.color};
    box-shadow: ${({ theme }) =>
      `0px 4px 0px 0px ${theme.btns.secondary.shadow}`};
    &:hover {
      background-color: ${({ theme }) => theme.btns.secondary.hover};
    }
  }
  &[value="="] {
    background-color: ${({ theme }) => theme.btns.additional.bg};
    color: ${({ theme }) => theme.btns.additional.color};
    box-shadow: ${({ theme }) =>
      `0px 4px 0px 0px ${theme.btns.additional.shadow}`};
    &:hover {
      background-color: ${({ theme }) => theme.btns.additional.hover};
    }
  }
`;
