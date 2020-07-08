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
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "pages/Components/Sections/SectionBasics.jsx";
import SectionNavbars from "pages/Components/Sections/SectionNavbars.jsx";
import SectionTabs from "pages/Components/Sections/SectionTabs.jsx";
import SectionPills from "pages/Components/Sections/SectionPills.jsx";
import SectionNotifications from "pages/Components/Sections/SectionNotifications.jsx";
import SectionTypography from "pages/Components/Sections/SectionTypography.jsx";
import SectionJavascript from "pages/Components/Sections/SectionJavascript.jsx";
import SectionCarousel from "pages/Components/Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "pages/Components/Sections/SectionCompletedExamples.jsx";
import SectionLogin from "pages/Components/Sections/SectionLogin.jsx";
import SectionExamples from "pages/Components/Sections/SectionExamples.jsx";
import SectionDownload from "pages/Components/Sections/SectionDownload.jsx";
import SignupModal from "components/Signup/SignupModal.tsx";
import LoginModal from "components/Login/LoginModal.tsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import layoutStore from 'store/layoutStore'
import Home from 'pages/Home/index.tsx';

function OriginalComponents(props) {
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
        <Parallax image={require("assets/img/bg4.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

          <Home/>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
}

export default withStyles(componentsStyle)(observer(OriginalComponents));
