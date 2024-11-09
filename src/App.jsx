import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsletterSignup from "./components/NewsletterSignup";
import ErrorBoundary from "./components/ErrorBoundary";

// Lazy load all pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WhyChooseUsPage = lazy(() => import("./pages/WhyChooseUsPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DiagnosticReportPage = lazy(() => import("./pages/DiagnosticReportPage"));
const PilotProgramPage = lazy(() => import("./pages/PilotProgramPage"));

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
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppContainer>
            <Header />
            <MainContent>
              <Suspense fallback={<div>Loading...</div>}>
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
              </Suspense>
            </MainContent>
            <NewsletterSignup />
            <Footer />
          </AppContainer>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
