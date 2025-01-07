import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const FooterContainer = styled.footer`
  background: #0b1437;
  color: rgba(255, 255, 255, 0.9);
  padding: 4rem 1rem 2rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 2rem 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(91, 192, 190, 0.4),
      transparent
    );
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  /* Mobile: Single column */
  grid-template-columns: 1fr;

  /* Tablet: Two columns */
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  /* Desktop: Four columns */
  @media (min-width: 1024px) {
    grid-template-columns: 2fr repeat(3, 1fr);
    gap: 4rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  /* Make company section full width on mobile */
  @media (max-width: 639px) {
    &:first-child {
      grid-column: 1 / -1;
    }
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.25rem;
  color: ${(props) => props.theme.colors.secondary};
  position: relative;
  padding-bottom: 0.75rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 100%;

  @media (min-width: 1024px) {
    max-width: 300px;
  }
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transform: translateX(4px);

    svg {
      opacity: 1;
    }
  }

  svg {
    width: 14px;
    height: 14px;
    margin-left: 4px;
    opacity: 0;
    transition: all 0.3s ease;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.9);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    color: ${(props) => props.theme.colors.secondary};
    flex-shrink: 0;
  }

  span {
    word-break: break-word;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }

  ${FooterLink} {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    margin: 0;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Supply Chain Consulting</FooterTitle>
          <CompanyDescription>
            Revolutionizing supply chains with data-driven solutions and
            AI-powered analytics for modern businesses.
          </CompanyDescription>

          <SocialIcons>
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook />
            </SocialIcon>
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter />
            </SocialIcon>
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </SocialIcon>
            <SocialIcon
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/services">
            Services <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/why-choose-us">
            Why Choose Us <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/case-studies">
            Case Studies <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/contact">
            Contact <ArrowUpRight />
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services#supplier-reliability">
            Supplier Reliability <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/services#sustainable-operations">
            Sustainable Operations <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/services#inventory-optimization">
            Inventory Optimization <ArrowUpRight />
          </FooterLink>
          <FooterLink to="/services#demand-forecasting">
            Demand Forecasting <ArrowUpRight />
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <Phone size={18} />
            <span>+44 7979255309</span>
          </ContactInfo>
          <ContactInfo>
            <Mail size={18} />
            <span>info@mahakaalconsulting.com</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <span>
          &copy; {currentYear} Supply Chain Consulting. All rights reserved.
        </span>
        <FooterNav>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/sitemap">Sitemap</FooterLink>
        </FooterNav>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
