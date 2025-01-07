import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link2, Menu, X, ChevronRight } from "lucide-react";

const HeaderContainer = styled.header`
  background: ${(props) =>
    props.scrolled
      ? "rgba(255, 255, 255, 0.98)"
      : "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)"};
  padding: ${(props) => (props.scrolled ? "0.75rem 1rem" : "1rem")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: ${(props) =>
    props.scrolled
      ? "0 4px 20px rgba(0, 0, 0, 0.08)"
      : "0 2px 10px rgba(0, 0, 0, 0.02)"};
  transition: all 0.3s ease;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${(props) => (props.scrolled ? "0.75rem 2rem" : "1.25rem 2rem")};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1100;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    gap: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 72px; /* Adjust based on your header height */
    left: 0;
    right: 0;
    background: white;
    padding: 1.5rem;
    gap: 1rem;
    border-radius: 0 0 12px 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    overflow-y: auto;
    max-height: calc(100vh - 72px);
    animation: slideDown 0.3s ease-out forwards;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;

  &:hover {
    background: ${(props) => `${props.theme.colors.secondary}10`};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
    border: 1px solid
      ${(props) =>
        props.active ? props.theme.colors.secondary : "transparent"};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ActionButton = styled(Link)`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.secondary},
    ${(props) => props.theme.colors.primary}
  );
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1.5rem;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav>
        <Logo to="/">
          <Link2 size={32} />
          Supply Chain Consulting
        </Logo>
        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/services" active={isActive("/services")}>
            Services
          </NavLink>
          <NavLink to="/resources" active={isActive("/resources")}>
            Resources
          </NavLink>
          <NavLink to="/why-choose-us" active={isActive("/why-choose-us")}>
            Why Us
          </NavLink>
          <NavLink to="/case-studies" active={isActive("/case-studies")}>
            Case Studies
          </NavLink>
          <NavLink to="/contact" active={isActive("/contact")}>
            Contact
          </NavLink>
          <ActionButton to="/get-started">
            Get Started
            <ChevronRight size={16} />
          </ActionButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
