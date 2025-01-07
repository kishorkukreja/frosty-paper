import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChevronRight, ArrowRight, Sparkles, Download } from "lucide-react";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
  overflow-x: hidden;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 6rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: -2rem;
    background: radial-gradient(
      circle at 80% 50%,
      ${(props) => `${props.theme.colors.secondary}08`},
      transparent 60%
    );
    z-index: -1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    margin-bottom: 4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  position: relative;
  min-width: 0;
`;

const HeroImage = styled.div`
  flex: 1;
  position: relative;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px ${(props) => `${props.theme.colors.primary}10`};
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.6s ease;

  &:hover {
    transform: perspective(1000px) rotateY(0deg);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${(props) => `${props.theme.colors.primary}40`},
      ${(props) => `${props.theme.colors.secondary}40`}
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    max-width: 600px;
    height: 300px;
    transform: none;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 250px;
    border-radius: 16px;
  }
`;

const SparkleIcon = styled(Sparkles)`
  @keyframes sparkleRotate {
    0%,
    100% {
      transform: rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(15deg) scale(1.2);
    }
    50% {
      transform: rotate(0deg) scale(1);
    }
    75% {
      transform: rotate(-15deg) scale(1.2);
    }
  }

  @keyframes sparkleGlow {
    0%,
    100% {
      color: ${(props) => props.theme.colors.secondary};
      filter: drop-shadow(
        0 0 3px ${(props) => `${props.theme.colors.secondary}60`}
      );
    }
    50% {
      color: #ffd700;
      filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
    }
  }

  animation: sparkleRotate 3s ease-in-out infinite,
    sparkleGlow 2s ease-in-out infinite;
`;

const FeatureBadge = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0.375rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 100px;
  border: 1px solid ${(props) => `${props.theme.colors.secondary}15`};
  box-shadow: 0 4px 20px ${(props) => `${props.theme.colors.secondary}15`},
    0 0 0 1px ${(props) => `${props.theme.colors.secondary}10`};
  backdrop-filter: blur(10px);
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    max-width: 280px;
    padding: 0.5rem;
  }
`;

const BadgeLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 100px;
  background: ${(props) => `${props.theme.colors.secondary}08`};
  position: relative;
  overflow: hidden;

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const BadgeTag = styled.span`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: ${(props) => props.theme.colors.white};
  padding: 0.625rem 1.25rem;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px ${(props) => `${props.theme.colors.secondary}25`},
    inset 0 1px 0 ${(props) => `${props.theme.colors.white}20`};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px ${(props) => `${props.theme.colors.secondary}30`},
      inset 0 1px 0 ${(props) => `${props.theme.colors.white}20`};
  }

  .ai-text {
    background: linear-gradient(135deg, #ffd700, #ffa500);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 14px;
    height: 14px;
    stroke-width: 2px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;

  span {
    display: inline-block;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    br {
      display: none;
    }
  }
`;

const Subheadline = styled.h2`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.colors.primary}99;
  font-weight: 400;
  max-width: 80%;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Banner = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary}0A,
    ${(props) => props.theme.colors.secondary}0A
  );
  border: 1px solid ${(props) => `${props.theme.colors.secondary}15`};
  border-radius: 16px;
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
    gap: 1rem;
  }
`;

const BannerContent = styled.div`
  flex: 1;
`;

const BannerTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  span {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const BannerDescription = styled.p`
  color: ${(props) => props.theme.colors.primary}99;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const BannerButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => `${props.theme.colors.secondary}15`};
  white-space: nowrap;
  box-shadow: 0 2px 4px ${(props) => `${props.theme.colors.secondary}10`};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px ${(props) => `${props.theme.colors.secondary}15`};
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

const CTAButton = styled(Link)`
  background: ${(props) => (props.$secondary ? "#f8fafc" : "#334155")};
  color: ${(props) => (props.$secondary ? "#334155" : "#ffffff")};
  padding: 0.875rem 1.75rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9375rem;
  position: relative;
  white-space: nowrap;
  border: 1px solid ${(props) => (props.$secondary ? "#e2e8f0" : "transparent")};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-1px);
    background: ${(props) => (props.$secondary ? "#f1f5f9" : "#1e293b")};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  svg {
    transition: transform 0.2s ease;
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }

  &:hover svg {
    transform: translateX(3px);
    opacity: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

const OfferSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-top: 2rem;
  }
`;

const OfferCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const OfferImage = styled.div`
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(58, 80, 107, 0.2),
      rgba(91, 192, 190, 0.2)
    );
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 160px;
  }
`;

const OfferContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const OfferTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
`;

const OfferDescription = styled.p`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.lightText};
  line-height: 1.6;
`;

const FloatingSparkle = styled.span`
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-3px) rotate(10deg);
    }
  }

  animation: float 2s ease-in-out infinite;
  display: inline-block;
`;

const AnimatedSparkles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: "✦";
    position: absolute;
    font-size: 10px;
    animation: floatSparkle 3s ease-in-out infinite;
    color: ${(props) => props.theme.colors.secondary};
    opacity: 0;
  }

  &::before {
    top: 20%;
    left: 20%;
    animation-delay: 0.5s;
  }

  &::after {
    bottom: 20%;
    right: 20%;
    animation-delay: 1s;
  }

  @keyframes floatSparkle {
    0% {
      transform: translateY(0) scale(0);
      opacity: 0;
    }
    50% {
      transform: translateY(-10px) scale(1);
      opacity: 0.8;
    }
    100% {
      transform: translateY(-20px) scale(0);
      opacity: 0;
    }
  }
`;

function HomePage() {
  return (
    <HomeContainer>
      <Hero>
        <HeroContent>
          <FeatureBadge>
            <BadgeLabel>
              <SparkleIcon />
              New Feature
              <AnimatedSparkles />
            </BadgeLabel>
            <BadgeTag>
              <FloatingSparkle>
                <span className="ai-text">AI</span>
              </FloatingSparkle>
              -Powered Analytics
              <SparkleIcon />
            </BadgeTag>
          </FeatureBadge>

          <Headline>
            Optimize Your
            <br />
            Supply Chain
          </Headline>
          <Subheadline>Data-driven solutions for modern businesses</Subheadline>
          <ButtonGroup>
            <CTAButton to="/contact">
              Get Started
              <ArrowRight size={18} />
            </CTAButton>
            <CTAButton to="/services" $secondary>
              Explore Services
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton to="/resources" $secondary>
              Download Free Resources
              <ChevronRight size={18} />
            </CTAButton>
            <CTAButton to="/case-studies" $secondary>
              Case Studies
              <ChevronRight size={18} />
            </CTAButton>
          </ButtonGroup>
        </HeroContent>

        <HeroImage>
          <img
            src="https://plus.unsplash.com/premium_photo-1661899574771-7489680d5e13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Supply Chain Operations"
          />
        </HeroImage>
      </Hero>

      <OfferSection>
        <OfferCard>
          <OfferImage>
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
              alt="Research Framework"
            />
          </OfferImage>
          <OfferContent>
            <OfferTitle>Deep Research Framework</OfferTitle>
            <OfferDescription>
              Download our comprehensive framework for conducting thorough
              supply chain research and analysis. Perfect for professionals and
              researchers.
            </OfferDescription>
            <CTAButton to="/resources" $secondary>
              Download Framework
              <Download size={18} />
            </CTAButton>
          </OfferContent>
        </OfferCard>

        <OfferCard>
          <OfferImage>
            <img
              src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop"
              alt="Automation Templates"
            />
          </OfferImage>
          <OfferContent>
            <OfferTitle>n8n Automation Templates</OfferTitle>
            <OfferDescription>
              Get started with our pre-built n8n workflows for supply chain
              automation. Includes inventory tracking, order processing, and
              supplier management templates.
            </OfferDescription>
            <CTAButton to="/resources" $secondary>
              View Templates
              <ChevronRight size={18} />
            </CTAButton>
          </OfferContent>
        </OfferCard>

        <OfferCard>
          <OfferImage>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="Data Analytics"
            />
          </OfferImage>
          <OfferContent>
            <OfferTitle>$1 Diagnostic Report</OfferTitle>
            <OfferDescription>
              Unlock insights into your supply chain's potential with our
              comprehensive analysis.
            </OfferDescription>
            <CTAButton to="/diagnostic-report" $secondary>
              Get Your Report
            </CTAButton>
          </OfferContent>
        </OfferCard>

        <OfferCard reverse>
          <OfferImage>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
              alt="Pilot Program"
            />
          </OfferImage>
          <OfferContent>
            <OfferTitle>Risk-Free Pilot Program</OfferTitle>
            <OfferDescription>
              Experience our expertise with a no-obligation 2-week pilot
              project.
            </OfferDescription>
            <CTAButton to="/pilot-program" $secondary>
              Start Your Pilot
            </CTAButton>
          </OfferContent>
        </OfferCard>
      </OfferSection>
    </HomeContainer>
  );
}

export default HomePage;
