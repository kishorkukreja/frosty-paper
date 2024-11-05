import React, { useState } from "react";
import styled from "styled-components";
import {
  TrendingUp,
  Building,
  Truck,
  Users,
  Globe,
  BarChart2,
  ArrowRight,
  ShoppingBag,
  Factory,
  Award,
} from "lucide-react";

const CaseStudiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
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

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 100px;
  background: ${(props) =>
    props.active
      ? `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`
      : "#ffffff"};
  color: ${(props) => (props.active ? "#ffffff" : props.theme.colors.primary)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid
    ${(props) =>
      props.active ? "transparent" : props.theme.colors.primary + "20"};
  box-shadow: ${(props) =>
    props.active
      ? `0 4px 12px ${props.theme.colors.secondary}40`
      : "0 2px 4px rgba(0, 0, 0, 0.05)"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${(props) =>
        props.active
          ? props.theme.colors.secondary + "40"
          : "rgba(0, 0, 0, 0.1)"};
  }
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const CaseStudyCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

    .card-image img {
      transform: scale(1.1);
    }

    .read-more {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const CardImage = styled.div`
  height: 240px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.primary}10;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const Industry = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme.colors.secondary}10;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ResultsList = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.secondary}20;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  svg {
    color: ${(props) => props.theme.colors.secondary};
    width: 20px;
    height: 20px;
  }
`;

const ResultText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

const ReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
  margin-top: 1.5rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const caseStudies = [
  {
    title: "Global Retailer Supply Chain Optimization",
    industry: "Retail",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Implemented advanced inventory optimization strategies for a Fortune 500 retailer, leveraging AI and machine learning.",
    results: [
      "20% reduction in carrying costs",
      "15% improvement in product availability",
      "ROI achieved within 6 months",
    ],
    category: "retail",
  },
  {
    title: "Sustainable Manufacturing Operations",
    industry: "Manufacturing",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Developed comprehensive emissions reduction strategies for a leading manufacturing client while maintaining productivity.",
    results: [
      "30% decrease in carbon emissions",
      "25% energy cost savings",
      "Improved sustainability rating",
    ],
    category: "manufacturing",
  },
  {
    title: "Logistics Network Redesign",
    industry: "Logistics",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Complete redesign of logistics network for a multinational consumer goods company, optimizing routes and hubs.",
    results: [
      "15% reduction in transportation costs",
      "48-hour improvement in delivery time",
      "99.9% on-time delivery rate",
    ],
    category: "logistics",
  },
  {
    title: "E-commerce Fulfillment Optimization",
    industry: "Retail",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Revolutionized e-commerce fulfillment processes for a major online retailer using advanced automation and AI.",
    results: [
      "40% faster order processing",
      "28% reduction in fulfillment costs",
      "99.8% order accuracy",
    ],
    category: "retail",
  },
  {
    title: "Smart Factory Implementation",
    industry: "Manufacturing",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Implemented IoT and smart manufacturing solutions for a leading automotive parts manufacturer.",
    results: [
      "35% productivity increase",
      "45% defect reduction",
      "60% faster changeover times",
    ],
    category: "manufacturing",
  },
  {
    title: "Global Supply Chain Resilience",
    industry: "Logistics",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description:
      "Developed and implemented comprehensive risk management and resilience strategies for global supply chain operations.",
    results: [
      "50% risk reduction",
      "Zero major disruptions",
      "20% supplier reliability improvement",
    ],
    category: "logistics",
  },
];

function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All Industries", value: "all" },
    { label: "Retail", value: "retail" },
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Logistics", value: "logistics" },
  ];

  const filteredStudies =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <CaseStudiesContainer>
      <Header>
        <Title>Case Studies</Title>
        <Subtitle>
          Discover how we've helped businesses transform their supply chains and
          achieve remarkable results
        </Subtitle>
      </Header>

      <FilterSection>
        {filters.map((filter) => (
          <FilterButton
            key={filter.value}
            active={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterSection>

      <CaseStudyGrid>
        {filteredStudies.map((study, index) => (
          <CaseStudyCard key={index}>
            <CardImage>
              <img src={study.image} alt={study.title} className="card-image" />
            </CardImage>

            <CardContent>
              <Industry>
                <study.icon />
                {study.industry}
              </Industry>

              <CardTitle>{study.title}</CardTitle>
              <CardDescription>{study.description}</CardDescription>

              <ResultsList>
                {study.results.map((result, idx) => (
                  <ResultItem key={idx}>
                    <TrendingUp />
                    <ResultText>{result}</ResultText>
                  </ResultItem>
                ))}
              </ResultsList>

              <ReadMore className="read-more">
                Read full case study <ArrowRight />
              </ReadMore>
            </CardContent>
          </CaseStudyCard>
        ))}
      </CaseStudyGrid>
    </CaseStudiesContainer>
  );
}

export default CaseStudiesPage;
