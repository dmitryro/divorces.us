import { observer } from 'mobx-react'
import { Grid, Row, Col } from "react-styled-flexboxgrid";
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
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionPills from "pages/Components/Sections/SectionPills.jsx";
import SignupModal from "components/Signup/SignupModal.tsx";
import LoginModal from "components/Login/LoginModal.tsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import layoutStore from 'store/layoutStore'
import Contact from 'components/Contact/index.tsx';

const contactGrid = {
  position: 'relative',
  width: '100%',
  minHeight: '20em'
}

function ContactPage(props) {
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
        <SectionPills/>
        <Contact/>
        <Footer />
      </div>
    );
}
export default observer(ContactPage);
