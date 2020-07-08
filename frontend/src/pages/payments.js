import { observer } from 'mobx-react';
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
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import SectionPills from "pages/Components/Sections/SectionPills.jsx";
// sections for this page
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import SignupModal from "components/Signup/SignupModal.tsx";
import LoginModal from "components/Login/LoginModal.tsx";
import layoutStore from 'store/layoutStore'
import Payments from "components/Payments/index.tsx";

function PaymentsPage(props) {
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
        <div>Payments</div>
        <Payments/>
        <Footer />

       </div>
    );
}

export default withStyles(componentsStyle)(observer(PaymentsPage));
