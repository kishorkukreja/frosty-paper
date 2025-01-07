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

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
  }

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
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => `${props.theme.colors.secondary}08`};

    svg {
      transform: rotate(45deg);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    gap: 0.5rem;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: calc(100% + 1rem);
    left: 1rem;
    right: 1rem;
    background: white;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    transform-origin: top;
    animation: slideDown 0.3s ease-out forwards;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-8px);
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
  transition: all 0.3s ease;
  position: relative;
  font-size: 0.95rem;

  ${(props) =>
    props.active &&
    `
    color: ${props.theme.colors.secondary};
    background: ${props.theme.colors.secondary}08;
  `}

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: ${(props) => (props.active ? "30px" : "0")};
      height: 2px;
      background: linear-gradient(
        90deg,
        ${(props) => props.theme.colors.secondary},
        ${(props) => props.theme.colors.primary}
      );
      transition: all 0.3s ease;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      background: ${(props) => `${props.theme.colors.secondary}08`};

      &:after {
        width: 30px;
      }
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
    padding: 0.75rem;
    border: 1px solid
      ${(props) =>
        props.active ? props.theme.colors.secondary + "20" : "transparent"};

    &:hover {
      background: ${(props) => `${props.theme.colors.secondary}08`};
      border-color: ${(props) => `${props.theme.colors.secondary}20`};
    }
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
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: ${(props) => `${props.theme.colors.secondary}10`};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => `${props.theme.colors.secondary}40`};

    svg {
      transform: translateX(2px);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav ref={navRef}>
        <Logo to="/">
          <Link2 size={50} />
          Supply Chain Consulting
        </Logo>
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
        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
