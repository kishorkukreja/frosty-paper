import React, { useState } from "react";
import styled from "styled-components";
import {
  Search,
  CheckCircle,
  BarChart2,
  FileText,
  Clock,
  Shield,
  Lock,
  Send,
  AlertCircle,
  Loader,
  DollarSign,
} from "lucide-react";

import { Mail, Phone, Building } from "lucide-react"; // Add these to your existing lucide-react imports

const DiagnosticReportContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
  background: ${(props) => props.theme.colors.background || "#f8fafc"};
  min-height: 100vh;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PriceTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${(props) => `${props.theme.colors.secondary}15`};
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 100px;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 2rem;

  svg {
    width: 18px;
    height: 18px;
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
  color: black;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Step = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: ${(props) => `${props.theme.colors.secondary}08`};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: ${(props) => `${props.theme.colors.secondary}12`};
  }
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.secondary};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const StepDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Deliverables = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => `${props.theme.colors.secondary}20`};
`;

const DeliverablesList = styled.div`
  display: grid;
  gap: 1rem;
`;

const DeliverableItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid ${(props) => `${props.theme.colors.secondary}20`};

  svg {
    color: ${(props) => props.theme.colors.secondary};
    width: 20px;
    height: 20px;
  }
`;

const FormSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1px solid ${(props) => `${props.theme.colors.secondary}20`};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.colors.secondary}20`};
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 1px solid ${(props) => `${props.theme.colors.secondary}20`};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.colors.secondary}20`};
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => `${props.theme.colors.secondary}40`};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const PrivacyNote = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.875rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const LoadingIcon = styled(Loader)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: ${(props) => `${props.theme.colors.secondary}10`};
  color: #059669;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`;

function DiagnosticReportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const steps = [
    {
      title: "Submit Information",
      description:
        "Fill out a brief form about your supply chain operations and challenges.",
    },
    {
      title: "Expert Analysis",
      description:
        "Our team analyzes your information using advanced analytics tools.",
    },
    {
      title: "Receive Report",
      description: "Get a comprehensive diagnostic report within 48 hours.",
    },
    {
      title: "Review Session",
      description: "Schedule a call to discuss findings and recommendations.",
    },
  ];

  const deliverables = [
    "Comprehensive Supply Chain Assessment",
    "Key Performance Metrics Analysis",
    "Risk Identification Report",
    "Improvement Recommendations",
    "Cost Reduction Opportunities",
    "Implementation Roadmap",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <DiagnosticReportContainer>
      <Header>
        <Title>Supply Chain Diagnostic Report</Title>
        <PriceTag>
          <DollarSign />
          Just $1 for Complete Analysis
        </PriceTag>
        <Description>
          Get a comprehensive analysis of your supply chain's potential and
          discover opportunities for optimization and cost reduction.
        </Description>
      </Header>

      <MainContent>
        <InfoSection>
          <ProcessSteps>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepNumber>{index + 1}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </Step>
            ))}
          </ProcessSteps>

          <Deliverables>
            <StepTitle>What You'll Receive</StepTitle>
            <DeliverablesList>
              {deliverables.map((item, index) => (
                <DeliverableItem key={index}>
                  <CheckCircle />
                  <span>{item}</span>
                </DeliverableItem>
              ))}
            </DeliverablesList>
          </Deliverables>
        </InfoSection>

        <FormSection>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>
                <Building />
                Company Name
              </Label>
              <Input type="text" required />
            </FormGroup>

            <FormGroup>
              <Label>
                <Mail />
                Email Address
              </Label>
              <Input type="email" required />
            </FormGroup>

            <FormGroup>
              <Label>
                <Phone />
                Phone Number
              </Label>
              <Input type="tel" required />
            </FormGroup>

            <FormGroup>
              <Label>
                <FileText />
                Supply Chain Challenges
              </Label>
              <TextArea
                placeholder="Describe your current supply chain operations and key challenges"
                rows="5"
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoadingIcon />
                  Processing...
                </>
              ) : (
                <>
                  Get Your Report
                  <Send />
                </>
              )}
            </SubmitButton>

            {isSuccess && (
              <SuccessMessage>
                <CheckCircle />
                Thank you! We'll send your diagnostic report within 48 hours.
              </SuccessMessage>
            )}

            <PrivacyNote>
              <Lock />
              Your information is secure and will never be shared with third
              parties.
            </PrivacyNote>
          </Form>

          {isSuccess && (
            <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
              <CheckCircle />
              Thank you! We'll send your diagnostic report within 48 hours.
            </div>
          )}
        </FormSection>
      </MainContent>
    </DiagnosticReportContainer>
  );
}

export default DiagnosticReportPage;
