import { observer } from 'mobx-react'
import React, {useEffect, useState, useRef} from 'react';
import useOnclickOutside from "react-cool-onclickoutside";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
// React icons
import {FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedin } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import layoutStore from 'store/layoutStore'
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import image from "assets/img/bg7.jpg";
import { menuColor } from "assets/jss/material-kit-react.jsx";

const headerStyle = {
    background: '#CFCECE'
};

const modalStyle = {
    zIndex: 70000,
    marginLeft:'10em',
    position: 'fixed',
    marginTop: '-5.0em'
};


function LoginPage(props) {

  const [cardAnimation, setCardAnimation] = useState("cardHidden");

  const [showModal, setShowModal] = useState(true);
  const ref = useOnclickOutside(() => {
       setTimeout(setCardAnimation(""), 700);
       setShowModal(false);
       layoutStore.setShowLoginModal(false);
  });


   useEffect(() => {
       setTimeout(setCardAnimation(""), 700);
   });

 
    const { classes, ...rest } = props;
    return (
          <div className={classes.container} style={modalStyle}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>


    <div>
      {showModal && (
        <>
                <div ref={ref}>
                <Card className={classes[cardAnimation]}>
                  <form className={classes.form}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Log In</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaTwitter/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaFacebook/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaGooglePlusG/>
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <FaLinkedin/>
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or regular login</p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOutlined/>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg">
                        Log In
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
               </div>

        </>
      )}
    </div>

             </GridItem>
          </GridContainer>
       </div>
    );
}

export default withStyles(loginPageStyle)(observer(LoginPage));
