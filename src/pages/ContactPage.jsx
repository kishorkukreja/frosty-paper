import React, { useState } from "react";
import styled from "styled-components";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import { supabase } from "../lib/supabaseClient";

const ContactContainer = styled.div`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 3rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoHeader = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #ffffff; /* Explicit white color */
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  color: black;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: black; /* Explicit white color */
  transition: all 0.3s ease;
  font-size: 1rem;
  line-height: 1.5;

  &:hover {
    transform: translateX(10px);
  }

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2px;
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff; /* Explicit white color */
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const FormSection = styled.div`
  padding: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.colors.secondary}20`};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  background: #ffffff;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 0 3px ${(props) => `${props.theme.colors.secondary}20`};
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const SubmitButton = styled.button`
  background: ${(props) =>
    props.theme.colors.secondary}; /* Single color instead of gradient */
  color: black;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${(props) =>
      props.theme.colors.secondary}ee; /* Slightly lighter on hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => `${props.theme.colors.secondary}40`};
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px ${(props) => `${props.theme.colors.secondary}40`};
  }

  &:disabled {
    background: ${(props) => props.theme.colors.secondary}80;
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #10b981;
  padding: 1rem;
  border-radius: 8px;
  background: #10b98110;
  margin-top: 1rem;
`;

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim() || !/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    if (!formData.company.trim()) {
      toast.error("Please enter your company name");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Insert into Supabase
      const { error } = await supabase.from("enquiries_supply_chain").insert([
        {
          name: formData.name,
          email_id: formData.email,
          phone_number: formData.phone,
          company: formData.company,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      // Trigger n8n workflow
      const emailRecipients = [
        "info@mahakaalconsulting.com",
        "kishorkukreja76@gmail.com",
      ];
      const enquiryType = ["SupplyChainConsulting"];

      const n8nResponse = await fetch(
        "https://mahakaal.app.n8n.cloud/webhook/96d7aabe-7e30-44e2-8297-3e405254b7d5",
        {
          method: "POST",
          headers: {
            Authorization: "Basic " + btoa("admin:admin123"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            emailRecipients,
            enquiryType,
          }),
        }
      );

      if (!n8nResponse.ok) {
        console.error("n8n workflow failed:", await n8nResponse.text());
        throw new Error("n8n workflow failed");
      }

      // ✅ If Both Succeed
      toast.success(
        "Thank you for your inquiry! We'll get back to you within 24 hours.",
        { duration: 5000 }
      );

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message || error);
      toast.error(
        "Something went wrong. Please try again or contact us directly.",
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <Header>
        <Title>Contact Us</Title>
        <Description>
          Get in touch with our expert team to discuss how we can optimize your
          supply chain and drive business growth.
        </Description>
      </Header>

      <ContentWrapper>
        <ContactInfo>
          <div>
            <InfoHeader>Let's talk about your supply chain</InfoHeader>
            <InfoList>
              <InfoItem>
                <Phone />
                <span>+44 7979255309</span>
              </InfoItem>
              <InfoItem>
                <Mail />
                <span>info@mahakaalconsulting.com</span>
              </InfoItem>
            </InfoList>
          </div>

          <SocialLinks>
            <SocialLink
              href="https://linkedin.com/company/mahakaal-consulting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink
              href="https://twitter.com/mahakaalconsult"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </ContactInfo>

        <FormSection>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label>How can we help you?</Label>
              <TextArea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </InputGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send />
                </>
              )}
            </SubmitButton>
          </Form>
        </FormSection>
      </ContentWrapper>
    </ContactContainer>
  );
}

export default ContactPage;
