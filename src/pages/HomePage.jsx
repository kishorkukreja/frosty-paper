import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Sparkles } from "lucide-react";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem); /* Header height + desired spacing */
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
  }
`;

const HeroContent = styled.div`
  flex: 1;
  position: relative;
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
    height: 300px;
    transform: none;
  }
`;

// const FeatureBadge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   margin-bottom: 2rem;
//   padding: 0.375rem;
//   background: linear-gradient(
//     135deg,
//     rgba(255, 255, 255, 0.95),
//     rgba(255, 255, 255, 0.9)
//   );
//   border-radius: 100px;
//   border: 1px solid ${(props) => `${props.theme.colors.secondary}15`};
//   box-shadow: 0 4px 20px ${(props) => `${props.theme.colors.secondary}15`},
//     0 0 0 1px ${(props) => `${props.theme.colors.secondary}10`};
//   backdrop-filter: blur(10px);
//   position: relative;
//   isolation: isolate;

//   &::before {
//     content: "";
//     position: absolute;
//     inset: -1px;
//     border-radius: 100px;
//     padding: 1px;
//     background: linear-gradient(
//       135deg,
//       ${(props) => `${props.theme.colors.primary}20`},
//       ${(props) => `${props.theme.colors.secondary}20`}
//     );
//     -webkit-mask: linear-gradient(#fff 0 0) content-box,
//       linear-gradient(#fff 0 0);
//     mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
//     -webkit-mask-composite: xor;
//     mask-composite: exclude;
//   }

//   @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
//     width: fit-content;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// const BadgeLabel = styled.span`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   color: ${(props) => props.theme.colors.primary};
//   padding: 0.625rem 1.25rem;
//   font-size: 0.875rem;
//   font-weight: 600;
//   letter-spacing: 0.01em;
//   border-radius: 100px;
//   transition: all 0.3s ease;
//   background: ${(props) => `${props.theme.colors.secondary}08`};

//   svg {
//     width: 16px;
//     height: 16px;
//     stroke-width: 2.5px;
//     color: ${(props) => props.theme.colors.secondary};
//     filter: drop-shadow(
//       0 2px 4px ${(props) => `${props.theme.colors.secondary}30`}
//     );
//   }
// `;

// const BadgeTag = styled.span`
//   background: linear-gradient(
//     135deg,
//     ${(props) => props.theme.colors.primary},
//     ${(props) => props.theme.colors.secondary}
//   );
//   color: ${(props) => props.theme.colors.white};
//   padding: 0.625rem 1.25rem;
//   border-radius: 100px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   box-shadow: 0 2px 5px ${(props) => `${props.theme.colors.secondary}25`},
//     inset 0 1px 0 ${(props) => `${props.theme.colors.white}20`};
//   transition: all 0.3s ease;
//   letter-spacing: 0.01em;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 4px 8px ${(props) => `${props.theme.colors.secondary}30`},
//       inset 0 1px 0 ${(props) => `${props.theme.colors.white}20`};
//   }

//   .ai-text {
//     background: linear-gradient(135deg, #fff, #f0f0f0);
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     font-weight: 700;
//   }

//   svg {
//     width: 14px;
//     height: 14px;
//     stroke-width: 2.5px;
//     filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
//     animation: sparkle 2s infinite;

//     @keyframes sparkle {
//       0%,
//       100% {
//         transform: scale(1);
//         opacity: 1;
//       }
//       50% {
//         transform: scale(1.2);
//         opacity: 0.8;
//       }
//     }
//   }
// `;

// const FeatureBadge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   margin-bottom: 2rem;
//   padding: 0.25rem;
//   background: rgba(255, 255, 255, 0.9);
//   border-radius: 100px;
//   border: 1px solid ${(props) => `${props.theme.colors.secondary}15`};
//   box-shadow: 0 2px 10px ${(props) => `${props.theme.colors.secondary}10`},
//     0 0 0 1px ${(props) => `${props.theme.colors.secondary}10`};
//   backdrop-filter: blur(10px);

//   @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
//     width: fit-content;
//     margin-left: auto;
//     margin-right: auto;
//   }
// `;

// const BadgeLabel = styled.span`
//   display: inline-flex;
//   align-items: center;
//   gap: 0.5rem;
//   color: ${(props) => props.theme.colors.primary};
//   padding: 0.5rem 1rem;
//   font-size: 0.875rem;
//   font-weight: 500;
//   border-radius: 100px;
//   transition: all 0.3s ease;
//   background: ${(props) => `${props.theme.colors.secondary}08`};

//   svg {
//     width: 16px;
//     height: 16px;
//     stroke-width: 2.5px;
//     color: ${(props) => props.theme.colors.secondary};
//   }
// `;

// const BadgeTag = styled.span`
//   background: linear-gradient(
//     135deg,
//     ${(props) => props.theme.colors.primary},
//     ${(props) => props.theme.colors.secondary}
//   );
//   color: ${(props) => props.theme.colors.white};
//   padding: 0.5rem 1.25rem;
//   border-radius: 100px;
//   font-size: 0.875rem;
//   font-weight: 600;
//   display: inline-flex;
//   align-items: center;
//   gap: 0.375rem;
//   box-shadow: 0 2px 5px ${(props) => `${props.theme.colors.secondary}25`};
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 4px 8px ${(props) => `${props.theme.colors.secondary}30`};
//   }

//   .ai-text {
//     background: linear-gradient(135deg, #fff, #f0f0f0);
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     font-weight: 700;
//   }

//   svg {
//     width: 14px;
//     height: 14px;
//     stroke-width: 2.5px;
//     animation: sparkle 2s infinite;

//     @keyframes sparkle {
//       0%,
//       100% {
//         transform: scale(1);
//         opacity: 1;
//       }
//       50% {
//         transform: scale(1.2);
//         opacity: 0.8;
//       }
//     }
//   }
// `;

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

const Headline = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  -webkit-background-clip: text;
  background-clip: text;

  line-height: 1.1;
  letter-spacing: -0.02em;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 2.75rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.colors.lightText};
  font-weight: 400;
  max-width: 80%;
  line-height: 1.4;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }
`;

const CTAButton = styled(Link)`
  background: ${(props) =>
    props.$secondary
      ? "transparent"
      : `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};
  color: ${(props) =>
    props.$secondary ? props.theme.colors.primary : props.theme.colors.white};
  padding: 1rem 2rem;
  text-decoration: none;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  position: relative;
  isolation: isolate;

  /* Bounding box effect */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 60px;
    padding: 4px;
    background: ${(props) =>
      props.$secondary
        ? `linear-gradient(135deg, ${props.theme.colors.primary}20, ${props.theme.colors.secondary}20)`
        : `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: ${(props) => (props.$secondary ? 0.3 : 0.5)};
    transition: all 0.3s ease;
  }

  /* Inner background */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: ${(props) =>
      props.$secondary
        ? "transparent"
        : `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);

    &::before {
      opacity: 1;
      inset: -6px;
      padding: 6px;
    }

    &::after {
      background: ${(props) =>
        props.$secondary
          ? `${props.theme.colors.primary}08`
          : `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const OfferSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const OfferCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  width: 48%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  ${(props) =>
    props.reverse &&
    `
    flex-direction: row-reverse;
    
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      flex-direction: column;
    }
  `}
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(58, 80, 107, 0.2),
      rgba(91, 192, 190, 0.2)
    );
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    height: 160px;
  }
`;

const OfferContent = styled.div`
  flex: 1;
`;

const OfferTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const OfferDescription = styled.p`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.lightText};
  line-height: 1.6;
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
            <CTAButton to="/diagnostic-report">Get Your Report</CTAButton>
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
            <CTAButton to="/pilot-program">Start Your Pilot</CTAButton>
          </OfferContent>
        </OfferCard>
      </OfferSection>
    </HomeContainer>
  );
}

export default HomePage;
