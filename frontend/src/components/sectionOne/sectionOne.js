import React, { useState } from "react";

import { useForm } from "react-hook-form";
import {
  StyledContainer,
  StyledLeftSection,
  StyledHeader,
  StyledText,
  StyledRightSection,
  PickupImage,
  FooterSectionOne,
  SocialMediaFooter,
  MediaSVG,
  PageScrollArea,
  StyledScrollContainer,
  StyledSocialMediaContainer,
  PageScroll,
  StyledForm,
  StyledButtonContainer,
} from "./sectionOne.styles";
import { Input } from "../input";
import { Button } from "../button";
import { userRequest } from "../../services/user";

import Pickup from "../../assets/pickup.png";
import FacebookLogo from "../../assets/fb.svg";
import TwitterLogo from "../../assets/twt.svg";
import YoutubeLogo from "../../assets/yt.svg";
import LinkedInLogo from "../../assets/ln.svg";
import InstagramLogo from "../../assets/insta.svg";
import noHover from "../../assets/noShow.svg";
import hover from "../../assets/show.svg";

export const SectionOne = () => {
  const [isShown, setIsShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => userRequest(data);
  return (
    <>
      <StyledContainer>
        <StyledLeftSection>
          <StyledHeader>
            Vehicle Maintenence from the comfort of your home
          </StyledHeader>
          <StyledText>
            Open Auto sooths the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worrie-free
          </StyledText>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              name="name"
              placeholder="enter your name"
              register={register}
              validations={{ required: "Please Enter Your name" }}
              errors={errors}
            />
            <Input
              id="email"
              name="email"
              placeholder="enter your email"
              register={register}
              validations={{
                required: "Please Enter Your Email",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "invalid email",
                },
              }}
              errors={errors}
            />
            <StyledButtonContainer>
              <Button type="submit" text="Submit" width="270px" />
            </StyledButtonContainer>
          </StyledForm>
        </StyledLeftSection>
        <StyledRightSection>
          <PickupImage src={Pickup} />
        </StyledRightSection>
      </StyledContainer>
      <FooterSectionOne>
        <StyledScrollContainer>
          <PageScrollArea
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <PageScroll src={isShown ? hover : noHover} />
          </PageScrollArea>
        </StyledScrollContainer>
        <StyledSocialMediaContainer>
          <SocialMediaFooter>
            <MediaSVG src={FacebookLogo} alt="facebook" />
            <MediaSVG src={TwitterLogo} alt="twitter" />
            <MediaSVG src={YoutubeLogo} alt="twitter" />
            <MediaSVG src={LinkedInLogo} alt="LinkedIn" />
            <MediaSVG src={InstagramLogo} alt="instagram" />
          </SocialMediaFooter>
        </StyledSocialMediaContainer>
      </FooterSectionOne>
    </>
  );
};
