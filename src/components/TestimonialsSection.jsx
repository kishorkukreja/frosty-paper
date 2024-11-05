import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  padding: 4rem 2rem;
`;

const TestimonialsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

const testimonials = [
  {
    text: "Supply Chain Consulting transformed our operations. We've seen a 30% reduction in costs and improved efficiency across the board.",
    author: "Jane Doe, CEO of XYZ Corp",
  },
  {
    text: "The team's expertise in data analytics helped us make informed decisions that significantly improved our supply chain resilience.",
    author: "John Smith, COO of ABC Industries",
  },
  {
    text: "Their sustainable supply chain solutions not only reduced our environmental impact but also improved our brand image.",
    author: "Emily Brown, Sustainability Director at GreenTech",
  },
];

function TestimonialsSection() {
  return (
    <TestimonialsContainer>
      <TestimonialsContent>
        <h2>What Our Clients Say</h2>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
}

export default TestimonialsSection;
