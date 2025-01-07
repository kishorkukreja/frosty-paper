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
  const [isSuccess, setIsSuccess] = useState(false);
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
    setIsSuccess(false); // Reset success state before submitting

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

      setIsSuccess(true);
      toast.success(
        "Thank you for your inquiry! We'll get back to you within 24 hours."
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
      setIsSuccess(false); // Ensure success is false on error
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
            {isSuccess && (
              <SuccessMessage>
                <CheckCircle />
                Your message has been sent successfully!
              </SuccessMessage>
            )}
          </Form>
        </FormSection>
      </ContentWrapper>
    </ContactContainer>
  );
}

export default ContactPage;
