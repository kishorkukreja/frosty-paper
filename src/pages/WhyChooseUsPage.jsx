import React, { useState } from "react";
import styled from "styled-components";
import {
  BarChart2,
  Settings,
  Award,
  Clock,
  Users,
  Shield,
  CheckCircle,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  Leaf,
  AlertCircle,
  RefreshCcw,
  LineChart,
  BadgeCheck,
} from "lucide-react";

const WhyChooseUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    border-radius: 2px;
  }
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
  color: props.theme.colors.primary;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: black;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.9rem;
`;

const ReasonsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ReasonItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
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
    transform: translateX(10px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    &::before {
      opacity: 1;
    }

    .reason-icon {
      background: linear-gradient(
        135deg,
        ${(props) => props.theme.colors.primary},
        ${(props) => props.theme.colors.secondary}
      );
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => `${props.theme.colors.secondary}10`};
  color: ${(props) => props.theme.colors.secondary};
  transition: all 0.3s ease;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    stroke-width: 2px;
  }
`;

const ReasonContent = styled.div`
  flex: 1;
`;

const ReasonTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const ReasonDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  line-height: 1.6;
`;

const BenefitsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const BenefitCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 16px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

    &::before {
      opacity: 1;
    }

    .benefit-icon {
      transform: scale(1.1);
    }
  }
`;

function WhyChooseUsPage() {
  const stats = [
    {
      number: "40%",
      label: "Average Carbon Footprint Reduction Potential",
    },
    {
      number: "60%",
      label: "Risk Mitigation Improvement Opportunity",
    },
    {
      number: "15+",
      label: "Years of Sustainable Supply Chain Expertise",
    },
    {
      number: "3-4x",
      label: "Typical Return on Resilience Investment",
    },
    {
      number: "30%",
      label: "Average Cost Savings from Sustainable Practices",
    },
    {
      number: "24/7",
      label: "ESG-Focused Support",
    },
  ];

  const reasons = [
    {
      icon: BarChart2,
      title: "Data-Driven Approach",
      description:
        "We leverage advanced analytics and machine learning to provide actionable insights and optimize your supply chain.",
    },
    {
      icon: Settings,
      title: "Tailored Solutions",
      description:
        "Our team of experts crafts customized strategies to address your unique supply chain challenges and goals.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "With a history of successful projects across various industries, we have the experience to drive real results.",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description:
        "Optimize operations and reduce waste through data-driven insights.",
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description:
        "Identify and address potential risks before they impact your business.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description:
        "Quick deployment of solutions with minimal disruption to operations.",
    },
    {
      icon: Leaf,
      title: "Green Supply Chain Design",
      description:
        "Optimize your network for both environmental impact and operational efficiency.",
    },
    {
      icon: AlertCircle,
      title: "Risk Assessment & Mitigation",
      description:
        "Comprehensive analysis of supply chain vulnerabilities and resilience strategies.",
    },
    {
      icon: BadgeCheck,
      title: "ESG Compliance",
      description:
        "Navigate and exceed environmental, social, and governance requirements.",
    },
    {
      icon: RefreshCcw,
      title: "Circular Economy Solutions",
      description:
        "Transform linear supply chains into circular, sustainable systems.",
    },
    {
      icon: LineChart,
      title: "Performance Tracking",
      description:
        "Monitor and measure sustainability metrics and operational improvements.",
    },
    {
      icon: Award,
      title: "Industry Best Practices",
      description:
        "Implement proven sustainable and resilient supply chain strategies.",
    },
  ];

  return (
    <WhyChooseUsContainer>
      <Header>
        <Title>Why Choose Us</Title>
        <Subtitle>
          Partner with us to transform your supply chain with innovative
          solutions and proven expertise
        </Subtitle>
      </Header>

      <MainContent>
        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsSection>

        <ReasonsList>
          {reasons.map((reason, index) => (
            <ReasonItem key={index}>
              <IconWrapper className="reason-icon">
                <reason.icon />
              </IconWrapper>
              <ReasonContent>
                <ReasonTitle>{reason.title}</ReasonTitle>
                <ReasonDescription>{reason.description}</ReasonDescription>
              </ReasonContent>
            </ReasonItem>
          ))}
        </ReasonsList>
      </MainContent>

      <BenefitsSection>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index}>
            <IconWrapper className="benefit-icon">
              <benefit.icon />
            </IconWrapper>
            <ReasonTitle>{benefit.title}</ReasonTitle>
            <ReasonDescription>{benefit.description}</ReasonDescription>
          </BenefitCard>
        ))}
      </BenefitsSection>
    </WhyChooseUsContainer>
  );
}

export default WhyChooseUsPage;
