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
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Slider from "components/Slider/index.tsx";
import AnimatedSlider from "components/AnimatedSlider/index.tsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SignupModal from "components/Signup/SignupModal.tsx";
import LoginModal from "components/Login/LoginModal.tsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import layoutStore from 'store/layoutStore'

const bg = {
    backgroundColor:'#F3F3F3'
}

const breakStyle = {
    marginTop: '1.0em',
    marginBottom: '1.0em'
}

const sliderStyle = {
    marginTop: '9.5em'
}

function Home(props) {
  useEffect(() =>  {
  });

  const { classes, ...rest } = props;
    return (
      <div style={bg}>
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
        <div style={sliderStyle}>&nbsp;</div>
        <AnimatedSlider/>
       <Footer />
      </div>


    );
}

export default withStyles(componentsStyle)(observer(Home));
