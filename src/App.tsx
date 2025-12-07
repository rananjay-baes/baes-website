import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import React from "react";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import KycAmlPolicy from "./pages/KycAmlPolicy";
import SaasAgreement from "./pages/SaasAgreement";
import PartnerEnquiry from "./pages/PartnerEnquiry";
import AboutUs from "./pages/AboutUs";
import Advantages from "./pages/Advantages";
import Testimonials from "./pages/Testimonials";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />

      <Route path={"/contact"} component={Contact} />
      <Route path={"/signup"} component={SignUp} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/kyc-aml-policy"} component={KycAmlPolicy} />
      <Route path={"/saas-agreement"} component={SaasAgreement} />
      <Route path={"/partner-enquiry"} component={PartnerEnquiry} />
      <Route path={"/about"} component={AboutUs} />
      <Route path={"/advantages"} component={Advantages} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
