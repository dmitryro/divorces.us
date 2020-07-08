import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Home from "pages/Home/index.tsx";
import LandingPage from "pages/LandingPage/LandingPage.jsx";
import ProfilePage from "pages/ProfilePage/ProfilePage.jsx";
import LoginPage from "pages/LoginPage/LoginPage.jsx";
import AboutPage from "pages/AboutPage/index.tsx";
import Pricing from "pages/pricing.js";
import ServicesPage from "pages/services/index.js";
import AdoptionPage from "pages/services/adoption.js";
import ContestedDivorce from "pages/services/contested.js";
import UncontestedDivorce from "pages/services/uncontested.js";
import DomesticViolence from "pages/services/domesticviolence.js";
import CustodyPage from "pages/services/childcustody.js";
import AgreementsPage from "pages/services/agreements.js";
import ChildSupportPage from "pages/services/childsupport.js";
import ConsultationPage from "pages/services/consultation.js";
import SpousalSupportPage from "pages/services/spousalsupport.js";
import MediationPage from "pages/services/mediation.js";
import PropertyPage from "pages/services/property.js";
import ProtectionPage from "pages/services/protection.js";
import BlogPage from "pages/blog.js";
import FAQPage from "pages/faq.js";
import PaymentsPage from "pages/payments.js";
import AskPage from "pages/askaquestion.js";
import OnlineConsultationPage from "pages/onlineconsultation.js";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/ask" component={AskPage}/>
      <Route path="/askaquestion" component={AskPage}/>
      <Route path="/onlineconsultation" component={OnlineConsultationPage}/>
      <Route path="/online" component={OnlineConsultationPage}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/payments" component={PaymentsPage}/>
      <Route path="/services" component={ServicesPage}/>
      <Route path="/services/adoption" component={AdoptionPage}/>
      <Route path="/services/contested" component={ContestedDivorce}/>
      <Route path="/services/uncontested" component={UncontestedDivorce}/>
      <Route path="/services/domesticviolence" component={DomesticViolence}/>
      <Route path="/services/childcustody" component={CustodyPage}/>
      <Route path="/services/childsupport" component={ChildSupportPage}/>
      <Route path="/services/agreements" component={AgreementsPage}/>
      <Route path="/services/consultation" component={ConsultationPage}/>
      <Route path="/services/spousalsupport" component={SpousalSupportPage}/>
      <Route path="/services/mediation" component={MediationPage}/>
      <Route path="/sercices/property" component={PropertyPage}/>
      <Route path="/services/protection" componet={ProtectionPage}/>
      <Route path="/blog" component={BlogPage}/>
      <Route path="/faq" component={FAQPage}/>
      <Route path="/about-page" component={AboutPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
