import { observer } from 'mobx-react'
import React, {useEffect} from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "gatsby";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SectionPills from "pages/Components/Sections/SectionPills.jsx";
import Pricing from "components/Pricing/index.tsx";
import styled from "styled-components";
// sections for this page
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SignupModal from "components/Signup/SignupModal.tsx";
import LoginModal from "components/Login/LoginModal.tsx";
import layoutStore from 'store/layoutStore'

const PricingDiv = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  min-height: 30em;
  background-color:#F3F3F3;
`;


function PricingPage(props) {
  useEffect(() =>  {
  });

  const { classes, ...rest } = props;

    return (
      <div>
        <Header
          brand=""
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <SignupModal display={layoutStore.readSignupModal()}/>
        <LoginModal display={layoutStore.readLoginModal()}/>
        <PricingDiv>
        <Pricing/>
        </PricingDiv>
        <Footer />
       </div>
    );
}

export default withStyles(componentsStyle)(observer(PricingPage));
