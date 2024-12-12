import React from "react";
import styled from "styled-components";
import {
  CheckCircle,
  Clock,
  Target,
  Users,
  ArrowRight,
  Send,
  Loader,
  AlertCircle,
  Lock,
  Mail,
  Phone,
  Building,
} from "lucide-react";
// Add these to your existing lucide-react imports

const PilotProgramContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
`;

const Header = styled.div`
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

const BenefitsSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BenefitItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => `${props.theme.colors.secondary}08`};
    transform: translateX(5px);
  }

  svg {
    color: ${(props) => props.theme.colors.secondary};
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const BenefitText = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Timeline = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => `${props.theme.colors.secondary}20`};
`;

const TimelineTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const TimelineSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TimelineStep = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: ${(props) => `${props.theme.colors.secondary}08`};
  border-radius: 12px;

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
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.secondary};
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
  margin-top: 1rem;

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

function PilotProgramPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const benefits = [
    {
      icon: Target,
      title: "Identify Opportunities",
      text: "Get a comprehensive analysis of your current operations and identify key areas for improvement.",
    },
    {
      icon: CheckCircle,
      title: "Zero Risk",
      text: "Experience our expertise with no long-term commitment or upfront costs.",
    },
    {
      icon: Users,
      title: "Expert Support",
      text: "Work directly with our experienced consultants throughout the pilot program.",
    },
  ];

  const timelineSteps = [
    "Initial consultation and scope definition",
    "Data collection and analysis",
    "Strategy development",
    "2-week implementation period",
    "Results presentation and recommendations",
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
    <PilotProgramContainer>
      <Header>
        <Title>Risk-Free Pilot Program</Title>
        <Description>
          Experience our expertise with a no-obligation 2-week pilot project
          addressing your supply chain challenges.
        </Description>
      </Header>

      <MainContent>
        <BenefitsSection>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <benefit.icon />
                <BenefitContent>
                  <BenefitTitle>{benefit.title}</BenefitTitle>
                  <BenefitText>{benefit.text}</BenefitText>
                </BenefitContent>
              </BenefitItem>
            ))}
          </BenefitsList>

          <Timeline>
            <TimelineTitle>Program Timeline</TimelineTitle>
            <TimelineSteps>
              {timelineSteps.map((step, index) => (
                <TimelineStep key={index}>
                  <Clock />
                  <span>{step}</span>
                </TimelineStep>
              ))}
            </TimelineSteps>
          </Timeline>
        </BenefitsSection>

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
                <Target />
                Supply Chain Challenge
              </Label>
              <TextArea
                placeholder="Describe the specific supply chain pain point you'd like us to address"
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
                  Start Pilot
                  <ArrowRight />
                </>
              )}
            </SubmitButton>

            <PrivacyNote>
              <Lock />
              Your information is secure and will never be shared with third
              parties.
            </PrivacyNote>
          </Form>

          {isSuccess && (
            <SuccessMessage>
              <CheckCircle />
              Thank you! We'll contact you within 24 hours to discuss your pilot
              program.
            </SuccessMessage>
          )}
        </FormSection>
      </MainContent>
    </PilotProgramContainer>
  );
}

export default PilotProgramPage;
