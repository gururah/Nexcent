import React from "react";
import styled from "styled-components";
import { Instagram, Twitter, YouTube, Send } from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";
import Logonexw from "../assets/Logonexw.png";

const FooterContainer = styled.footer`
  background-color: #2d3a45;
  color: #fff;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  margin-top: 30px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h6`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 550;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const FooterText = styled.p`
  color: #999;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
  & > * {
    color: #fff !important;
    margin-right: 10px;
  }
`;

const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const EmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: #3b4a56;
    border-radius: 5px;
    & fieldset {
      border-color: #5e6c78;
    }
    input {
      color: #fff;
    }
  }
  flex-grow: 1;
`;

const CustomIconButton = styled(IconButton)`
  margin-left: 10px;
  background-color: #5e6c78;
  &:hover {
    background-color: #4a5561;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <LogoSection>
          <FooterTitle>
            <img src={Logonexw} alt="Logo" style={{ marginRight: "10px" }} />
          </FooterTitle>
          <FooterText>
            Copyright © 2020 Nexcent ltd.
            <br />
            All rights reserved
          </FooterText>
          <SocialIcons>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </SocialIcons>
        </LogoSection>

        <FooterLinks>
          <FooterTitle>Company</FooterTitle>
          <FooterLink href="#">About us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contact us</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </FooterLinks>

        <FooterLinks>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="#">Help center</FooterLink>
          <FooterLink href="#">Terms of service</FooterLink>
          <FooterLink href="#">Legal</FooterLink>
          <FooterLink href="#">Privacy policy</FooterLink>
          <FooterLink href="#">Status</FooterLink>
        </FooterLinks>

        <EmailSection>
          <FooterTitle>Stay up to date</FooterTitle>
          <EmailInputContainer>
            <CustomTextField variant="outlined" placeholder="Your email address" />
            <CustomIconButton>
              <Send style={{ color: "#fff" }} />
            </CustomIconButton>
          </EmailInputContainer>
        </EmailSection>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
