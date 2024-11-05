import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import DiagnosticReportPage from "./pages/DiagnosticReportPage";
import PilotProgramPage from "./pages/PilotProgramPage";
import NewsletterSignup from "./components/NewsletterSignup";

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Router basename="/frosty-paper">
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
            </Routes>
          </Router>
        </MainContent>
        <NewsletterSignup />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

{
  /* your routes */
}
