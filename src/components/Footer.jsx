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
  MapPin,
  ArrowUpRight,
} from "lucide-react";

// const FooterContainer = styled.footer`
//   background: linear-gradient(
//     to bottom,
//     ${(props) => props.theme.colors.primary},
//     ${(props) => `${props.theme.colors.primary}f0`}
//   );
//   color: ${(props) => props.theme.colors.white};
//   padding: 6rem 2rem 3rem;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 1px;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       ${(props) => props.theme.colors.secondary}40,
//       transparent
//     );
//   }
// `;

// // Option 1: Darker background with subtle gradient
// const FooterContainer = styled.footer`
//   background: linear-gradient(to bottom, #1a1f36, #151928);
//   color: ${(props) => props.theme.colors.white};
//   padding: 6rem 2rem 3rem;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 1px;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       ${(props) => props.theme.colors.secondary}40,
//       transparent
//     );
//   }
// `;

// Option 2: Rich navy background
const FooterContainer = styled.footer`
  background: #0b1437;
  color: rgba(255, 255, 255, 0.9);
  padding: 6rem 2rem 3rem;
  position: relative;
  overflow: hidden;

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
      ${(props) => props.theme.colors.secondary}40,
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      110deg,
      rgba(91, 192, 190, 0.05) 0%,
      transparent 30%,
      transparent 70%,
      rgba(91, 192, 190, 0.05) 100%
    );
  }
`;

// // Option 3: Modern deep blue-gray with mesh gradient
// const FooterContainer = styled.footer`
//   background: linear-gradient(110deg, #1e2a4a, #1a2544, #162038);
//   color: ${(props) => props.theme.colors.white};
//   padding: 6rem 2rem 3rem;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background: radial-gradient(
//         circle at 0% 0%,
//         rgba(91, 192, 190, 0.03) 0%,
//         transparent 50%
//       ),
//       radial-gradient(
//         circle at 100% 100%,
//         rgba(91, 192, 190, 0.03) 0%,
//         transparent 50%
//       );
//     pointer-events: none;
//   }
// `;

// // Option 4: Slate with subtle texture (Recommended)
// const FooterContainer = styled.footer`
//   background-color: #1e293b;
//   background-image: linear-gradient(to bottom, #1e293b, #0f172a);
//   color: ${(props) => props.theme.colors.white};
//   padding: 6rem 2rem 3rem;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 1px;
//     background: linear-gradient(
//       90deg,
//       transparent,
//       ${(props) => props.theme.colors.secondary}40,
//       transparent
//     );
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     inset: 0;
//     background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E");
//     pointer-events: none;
//   }
// `;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
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
  margin-bottom: 2rem;
  max-width: 300px;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: 0.75rem;
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
  margin-top: 1rem;
`;

// const SocialIcon = styled.a`
//   color: ${(props) => props.theme.colors.white}cc;
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.3s ease;
//   background: ${(props) => props.theme.colors.primary};
//   border: 1px solid ${(props) => props.theme.colors.white}20;

//   &:hover {
//     color: ${(props) => props.theme.colors.secondary};
//     background: ${(props) => props.theme.colors.white}10;
//     transform: translateY(-3px);
//   }

//   svg {
//     width: 18px;
//     height: 18px;
//   }
// `;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);

  svg {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

// Then update these styled components to work better with the new background
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
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  ${FooterLink} {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;

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
            <MapPin size={18} />
            <span>
              123 Supply Chain St, Business District, City, State 12345
            </span>
          </ContactInfo>
          <ContactInfo>
            <Phone size={18} />
            <span>+1 (555) 123-4567</span>
          </ContactInfo>
          <ContactInfo>
            <Mail size={18} />
            <span>info@supplychainconsulting.com</span>
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
