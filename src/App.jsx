import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterSignup from "./components/NewsletterSignup";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop"; // Add this import

// Import all pages normally since we removed the Router from main.jsx
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import DiagnosticReportPage from "./pages/DiagnosticReportPage";
import PilotProgramPage from "./pages/PilotProgramPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

import ResourcesPage from "./pages/ResourcesPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
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

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppContainer>
            <Header />
            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                {/* Add this line */}
                <Route
                  path="/diagnostic-report"
                  element={<DiagnosticReportPage />}
                />
                <Route path="/pilot-program" element={<PilotProgramPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainContent>
            {/* <NewsletterSignup /> */}
            <Footer />
            <ScrollToTopButton />
          </AppContainer>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
