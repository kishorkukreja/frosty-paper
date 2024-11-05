import React, { useState } from "react";
import styled from "styled-components";

const NewsletterContainer = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
`;

const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h2`
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
`;

const NewsletterButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    console.log("Submitted email:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <NewsletterContainer>
      <NewsletterContent>
        <NewsletterTitle>
          Stay Updated with Supply Chain Insights
        </NewsletterTitle>
        <p>
          Subscribe to our newsletter for the latest industry trends and expert
          advice.
        </p>
        <NewsletterForm onSubmit={handleSubmit}>
          <NewsletterInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <NewsletterButton type="submit">Subscribe</NewsletterButton>
        </NewsletterForm>
      </NewsletterContent>
    </NewsletterContainer>
  );
}

export default NewsletterSignup;
