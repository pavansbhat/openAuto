import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #161b24;
`;
export const StyledContainerTwo = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const StyledMobileSection = styled.div`
  width: 40%;
  padding: 100px 20px 30px 90px;

  @media(max-width:1100px){
    padding: 50px 20px;
    width:80%;
    display:flex;
    justify-content:center;
  }
`;

export const PickupMobileImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const StyledRightSectionTwo = styled.div`
  width: 60%;
  padding: 30px 15%;

  @media (max-width: 1100px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledHeaderSectionTwo = styled.div`
  color: #d0d1d4;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans";
  font-weight: 700;
  font-size: 45px;
  text-transform: capitalize;
  padding: 130px 0px 20px;
  width: 40%;

  @media (max-width: 1100px) {
    padding: 50px 20px;
    width: 80%;
    text-align: center;
  }
`;

export const StyledTextSectionTwo = styled.div`
  font-size: 15px;
  color: #d0d1d4;
  margin-top: 25px;
  font-weight: 300;
  line-height: 25px;

  @media (max-width: 1100px) {
    width: 80%;
    text-align: center;
  }
`;

export const StyledButtonContainer = styled.div`
  margin: 20px 0px;

  @media (max-width: 1100px) {
    display: flex;
    width: 80%;
    justify-content: center;

    button {
      width: 100%;
      border: 1px solid #ffffff;
    }
  }
`;

export const FooterAreaOne = styled.div`
  background-color: #161b24;
  padding-top: 30px;
  border-top: 4px solid #181f28;
  margin: 20px 50px;

  @media (max-width: 1100px) {
    padding: 40px 10px;
    margin: 10px 5px;
  }
`;

export const LeftFooterSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
  }
`;

export const RightFooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin: 0px 40px;
`;

export const FooterContent = styled.div`
  font-size: 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 45px;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 40px;
  @media (max-width: 1100px) {
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    width: 100%;
  }
`;

export const Phone = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
`;

export const Email = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
`;

export const PhoneImage = styled.img`
  height: 12px;
  margin: 0px 10px 0px 20px;
  vertical-align: middle;
`;

export const EmailImage = styled.img`
  height: 12px;
  margin: 0px 10px 0px 20px;
  vertical-align: middle;
`;

export const SocialMediaFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px 35px;

  @media (max-width: 1100px) {
    justify-content: space-around;
    width: 100%;
  }
`;

export const MediaSVG = styled.img`
  padding: 5px;
  height: 15px;
`;

export const StyledPageDocLinks = styled.div`
  display: none;

  @media (max-width: 1100px) {
    margin: 15px 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const StyledPageDocText = styled.div`
  color: #ffffff;
  font-size: 14px;
  padding:15px 0px;
`;
