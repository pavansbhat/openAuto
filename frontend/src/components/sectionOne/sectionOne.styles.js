import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #181f28;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLeftSection = styled.div`
  width: 40%;
  padding: 100px 5px 30px 50px;

  @media (max-width: 1100px) {
    padding: 50px 20px;
    width: 80%;
  }
`;

export const StyledHeader = styled.div`
  color: #d0d1d4;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Open Sans";
  font-weight: 700;
  font-size: 45px;
  text-transform: capitalize;
  padding-left: 15px;
  padding-right: 15px;

  @media (max-width: 1100px) {
    font-size: 28px;
    padding: 10px;
    text-align: center;
  }
`;

export const StyledText = styled.div`
  font-size: 15px;
  color: #d0d1d4;
  margin-top: 25px;
  padding: 0px 15px 0px 15px;
  font-weight: 300;
  line-height: 25px;

  @media (max-width: 1100px) {
    text-align: center;
    font-size: 12px;
  }
`;

export const StyledRightSection = styled.div`
  width: 60%;
  padding: 30px 30px 0px 0px;
  @media (max-width: 1100px) {
    padding: 50px 10px;
    width: 80%;
  }
`;

export const PickupImage = styled.img`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const FooterSectionOne = styled.div`
  display: flex;
  background-color: #181f28;
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const StyledSocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 45%;

  @media (max-width: 1100px) {
    justify-content: center;
    width: 100%;
  }
`;

export const PageScrollArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StyledScrollContainer = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const PageScroll = styled.img`
  height: 35px;
`;

export const SocialMediaFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const MediaSVG = styled.img`
  padding: 10px;
  height: 15px;
`;

export const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1100px) {
    button {
      width: 100%;
    }
    input {
      width: 94%;
    }
  }
`;

export const StyledButtonContainer = styled.div`
  margin: 10px 0px;
`;
