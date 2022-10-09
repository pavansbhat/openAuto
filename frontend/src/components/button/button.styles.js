import styled from "styled-components";

export const StyledButton = styled.button`
  border: 0.7px solid #2c343e;
  border-radius: 20px;
  width: ${props=>props.width};
  height: 40px;
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  text-transform: capitalize;
  padding: 2px 10px;

  &:hover {
    background: #7e0fe1;
    border: none;
    cursor: pointer;
  }
`;
