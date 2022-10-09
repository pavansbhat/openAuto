import styled from "styled-components";

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px 20px;
`;

export const StyledLogoContainer = styled.div`
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
`;

export const StyledLogo = styled.img`
  padding: 2px;
  height: 35px;
  width: 150px;
`;

export const StyledMenuContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width:1100px){
    display:none;
  }
`;

export const StyledText = styled.div`
  font-size: 14px;
  color: #ffffff;
  margin-left: 10px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledIcon = styled.img`
  height: 20px;
`;
