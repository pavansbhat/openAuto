import {
  StyledNavContainer,
  StyledLogoContainer,
  StyledLogo,
  StyledMenuContainer,
  StyledText,
  StyledIcon,
  StyledTextContainer,
} from "./navbar.styles";
import { Button } from "../button";
import Logo from "../../assets/logo.png";
import MailLogo from "../../assets/mail.svg";
import CallLogo from "../../assets/call.svg";

export const Navbar = () => {
  return (
    <StyledNavContainer>
      <StyledLogoContainer>
        <StyledLogo src={Logo} alt="logo" />
      </StyledLogoContainer>
      <StyledMenuContainer>
        <StyledTextContainer>
          <StyledIcon src={CallLogo} alt="mail-logo" />
          <StyledText> +7892786453</StyledText>
        </StyledTextContainer>
        <StyledTextContainer>
          <StyledIcon src={MailLogo} alt="mail-logo" />
          <StyledText> service@openauto.ca</StyledText>
        </StyledTextContainer>
        <StyledText></StyledText>
        <Button text="Download Mobile App" />
      </StyledMenuContainer>
    </StyledNavContainer>
  );
};
