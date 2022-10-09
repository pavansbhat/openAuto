import styled from "styled-components";

export const StyledInput = styled.input`
  border: ${props=>props.isError? '1px solid #dd5353' : '1px solid #2c343e'};
  height: 40px;
  border-radius: 20px;
  width: 250px;
  color: #ffffff;
  background: transparent;
  padding: 2px 10px;

  &::placeholder {
    padding-left: 10px;
    text-transform: capitalize;
  }
`;

export const StyledHelperText = styled.div`
  color: #dd5353;
  font-size: 12px;
  text-align: left;
  padding-top: 9px;
  padding-left: 10px;
  text-transform: capitalize;
`;

export const StyledInputContainer = styled.div`
  margin: 10px 0px;
`;
