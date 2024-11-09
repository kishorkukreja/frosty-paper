import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowUp } from "lucide-react";

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: translateY(${(props) => (props.visible ? "0" : "20px")});
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.secondary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${(props) => props.theme.colors.secondary}60;
  }
`;

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      visible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </Button>
  );
}

export default ScrollToTopButton;
