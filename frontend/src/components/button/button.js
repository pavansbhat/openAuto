import { StyledButton } from "./button.styles";

export const Button =({text,type='button',width='250px'})=>{
  return(
    <StyledButton type={type} width={width}>{text}</StyledButton>
  )
}