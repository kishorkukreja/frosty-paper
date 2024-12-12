import React, { useState } from "react";
import styled from "styled-components";
import {
  BarChart2,
  Truck,
  Package,
  Users,
  Leaf,
  Shield,
  ArrowRight,
  TrendingUp,
  List,
  Globe,
} from "lucide-react";

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem); /* Header height + spacing */
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      ${(props) => `${props.theme.colors.primary}20`},
      ${(props) => `${props.theme.colors.secondary}20`}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05);

    &::before {
      opacity: 1;
    }

    ${(props) =>
      props.accentColor &&
      `
      background: linear-gradient(
        135deg,
        ${props.accentColor}05,
        ${props.accentColor}10
      );
    `}

    .service-icon {
      transform: scale(1.1);
      color: ${(props) => props.accentColor || props.theme.colors.secondary};
    }

    .learn-more {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  background: ${(props) =>
    `${props.accentColor}10` || `${props.theme.colors.secondary}10`};
  color: ${(props) => props.accentColor || props.theme.colors.secondary};
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
  }
`;

const ServiceTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ServiceDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const services = [
  {
    icon: BarChart2,
    title: "Supply Chain Analytics",
    description:
      "Leverage data-driven insights to optimize your supply chain operations and decision-making processes.",
    accentColor: "#4C51BF",
    metrics: ["20% Cost Reduction", "30% Better Accuracy"],
  },
  {
    icon: Truck,
    title: "Logistics Optimization",
    description:
      "Streamline your logistics network to reduce costs and improve delivery times.",
    accentColor: "#38A169",
    metrics: ["40% Faster Delivery", "15% Cost Savings"],
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Optimize inventory levels to reduce carrying costs while maintaining service levels.",
    accentColor: "#D69E2E",
    metrics: ["25% Less Stock", "99% Availability"],
  },
  {
    icon: Users,
    title: "Supplier Relationship Management",
    description:
      "Develop and maintain strategic partnerships with suppliers to ensure reliability and quality.",
    accentColor: "#805AD5",
    metrics: ["90% Supplier Retention", "35% Better Terms"],
  },
  {
    icon: Leaf,
    title: "Sustainable Supply Chain",
    description:
      "Implement eco-friendly practices to reduce environmental impact and meet sustainability goals.",
    accentColor: "#38B2AC",
    metrics: ["50% Carbon Reduction", "100% Compliance"],
  },
  {
    icon: Shield,
    title: "Supply Chain Risk Management",
    description:
      "Identify and mitigate risks to ensure business continuity and resilience.",
    accentColor: "#E53E3E",
    metrics: ["75% Risk Reduction", "24/7 Monitoring"],
  },
];

function ServicesPage() {
  return (
    <ServicesContainer>
      <PageHeader>
        <Title>Our Services</Title>
        <Subtitle>
          Comprehensive solutions to transform and optimize your supply chain
          operations
        </Subtitle>
      </PageHeader>

      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} accentColor={service.accentColor}>
            <ServiceIcon
              accentColor={service.accentColor}
              className="service-icon"
            >
              <service.icon />
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <LearnMore className="learn-more">
              Learn more <ArrowRight />
            </LearnMore>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServicesContainer>
  );
}

export default ServicesPage;
