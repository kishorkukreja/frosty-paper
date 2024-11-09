import React from "react";
import styled from "styled-components";
import { Package, Truck, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin: 0;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.lightText};
  max-width: 600px;
  margin: 1rem 0 2rem;
  line-height: 1.6;
`;

const ConveyorBelt = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1rem;
  background: ${(props) => props.theme.colors.secondary}10;
  border-radius: 100px;
  animation: scroll 10s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(20%);
    }
    100% {
      transform: translateX(-20%);
    }
  }
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: white;
  text-decoration: none;
  border-radius: 100px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.secondary}40;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${(props) => props.theme.colors.secondary}60;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <Title>
        4<Package size={80} />4
      </Title>
      <Subtitle>Oops! Shipment Lost in Transit</Subtitle>
      <Description>
        Looks like this package got misrouted in our supply chain! Our logistics
        team is working on tracking it down, but in the meantime, let's get you
        back to the main warehouse (homepage).
      </Description>

      <ConveyorBelt>
        <IconWrapper>
          <Package />
        </IconWrapper>
        <IconWrapper>
          <Truck />
        </IconWrapper>
        <IconWrapper>
          <AlertCircle />
        </IconWrapper>
        <IconWrapper>
          <Package />
        </IconWrapper>
        <IconWrapper>
          <Truck />
        </IconWrapper>
      </ConveyorBelt>

      <HomeButton to="/">
        <ArrowLeft size={20} />
        Return to Homepage
      </HomeButton>
    </NotFoundContainer>
  );
}

export default NotFoundPage;
