import React from "react";
import {
  StyledContainer,
  StyledContainerTwo,
  StyledMobileSection,
  PickupMobileImage,
  StyledRightSectionTwo,
  StyledHeaderSectionTwo,
  StyledTextSectionTwo,
  StyledButtonContainer,
  FooterAreaOne,
  Logo,
  Contact,
  Phone,
  Email,
  EmailImage,
  PhoneImage,
  LeftFooterSection,
  FooterContent,
  RightFooterSection,
  SocialMediaFooter,
  MediaSVG,
  StyledPageDocLinks,
  StyledPageDocText
} from "./sectionTwo.styles";
import { Button } from "../button";

import pickup2 from "../../assets/pickup2.png";
import logo from "../../assets/logo.svg";
import email from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import facebook from "../../assets/fb.svg";
import twitter from "../../assets/twt.svg";
import yt from "../../assets/yt.svg";
import ln from "../../assets/ln.svg";
import insta from "../../assets/insta.svg";

export const SectionTwo = ({ mainRef }) => {
  return (
    <StyledContainer ref={mainRef}>
      <StyledContainerTwo>
        <StyledMobileSection>
          <PickupMobileImage src={pickup2} alt="mobile image" />
        </StyledMobileSection>
        <StyledRightSectionTwo>
          <StyledHeaderSectionTwo>
            Focussed on Time Saving
          </StyledHeaderSectionTwo>
          <StyledTextSectionTwo>
            Lorem ipsum is simply the dummy text of printing and typesetting
            industry. Lorem ipsum has been industry's standard dummy text ever
            since 1500s. When an unknown printer took a gallery of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into the electronic typesetting,
            remaining essentially unchanged. It was
          </StyledTextSectionTwo>
          <StyledButtonContainer>
            <Button text="Download Mobile App" />
          </StyledButtonContainer>
        </StyledRightSectionTwo>
      </StyledContainerTwo>
      <FooterAreaOne>
        <LeftFooterSection>
          <Logo src={logo} alt="Logo" />
          <Contact>
            <Phone>
              <PhoneImage src={phone} alt="Phone" />
              +769 586 4558
            </Phone>
            <Email>
              <EmailImage src={email} alt="Email" />
              service@openauto.ca
            </Email>
          </Contact>
        </LeftFooterSection>

        <RightFooterSection>
          <FooterContent>Open Auto @ all rights reserved</FooterContent>
          <StyledPageDocLinks>
            <StyledPageDocText>Privacy policy</StyledPageDocText>
            <StyledPageDocText>Term of use</StyledPageDocText>
            <StyledPageDocText>Cookie policy</StyledPageDocText>
          </StyledPageDocLinks>
          <SocialMediaFooter>
            <MediaSVG src={facebook} alt="facebook" />
            <MediaSVG src={twitter} alt="twitter" />
            <MediaSVG src={yt} alt="twitter" />
            <MediaSVG src={ln} alt="LinkedIn" />
            <MediaSVG src={insta} alt="instagram" />
          </SocialMediaFooter>
        </RightFooterSection>
      </FooterAreaOne>
    </StyledContainer>
  );
};
