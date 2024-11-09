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

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
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
