/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GSLogo from "components/GSLogo/index.tsx";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

const linksGrid = {
    borderTop : "0.5px #888886 solid",
    borderBottom: "0.5px #888886 solid"
};

const footerHeaderStyle = {
    color: "#FFFFFF",
    fontWeight: "normal",
    marginBottom: "0.5em"
};

const ulStyle = {
    listStyleType: "none",
    textAlign: "left"
};

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>

        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <GridContainer justify="center">
                    <GridItem sm={3} xs={3} md={3}>
                        <GSLogo/>
                    </GridItem>
              </GridContainer>
          </div>
       </div>

        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>

              <GridContainer justify="left">
                <GridItem sm={0} xs={0} md={2}>
                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>About</h4></li>
                        <li>Our Team</li>
                        <li>Why Us</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                     </ul>
                </GridItem>

                <GridItem xs={1} sm={1} md={3}>

                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>Practice Areas</h4></li>
                        <li>Family Law</li>
                        <li>Immigration Law</li>
                        <li>Patent Law</li>
                     </ul>

                </GridItem>

                <GridItem xs={1} sm={1} md={2}>
                
                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>Need Help?</h4></li>
                        <li>Ask a Question</li>
                        <li>Online Consultation</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                     </ul>

                </GridItem>

                <GridItem xs={1} sm={1} md={3}>

                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>Email Newsletters</h4></li>
                        <li>Sign up with us to be notified about latest news, new services, case progress, price updates and events.</li>
                     </ul>

                </GridItem>

                <GridItem xs={1} sm={1} md={2}>

                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>Contact Us</h4></li>
                        <li>Phone +1 347 560 5151</li>
                        <li>Fax 212 202 0342</li>
                        <li>info@myattorneyusa.com</li>
                        <li>76 Beaver Street, 10th Floor</li>
                        <li>New York, NY</li>
                     </ul>

                </GridItem>
               </GridContainer>
              <GridContainer justify="left">
                <GridItem sm={0} xs={0} md={12}>
                     <ul style={ulStyle}>
                        <li><h4 style={footerHeaderStyle}>Attorney Advertising</h4></li>
                        <li>Prior results do not guarantee similar outcomes.</li>
                        <li>divorcesus.com is owned and operated by The Law Offices of Grinberg & Segal, PLLC (Grinberg & Segal). The content of divorceus.com is copyrighted and may not be duplicated or used without the prior express permission of Grinberg & Segal. Grinberg & Segal is a New York City family law firm that consists of highly experienced family law attorneys licensed to practice state law in New York and New Jersey and U.S. federal law worldwide. Grinberg & Segal’s New York-based attorneys represent clients in family law, divorce, and adoption matters in New York and New Jersey. Grinberg & Segal’s family lawyers are skilled and experienced in family law, divorce law, and adoption law and represent clients in New York and New Jersey. COPYRIGHT © 2018 DIVORCE US. ALL RIGHTS RESERVED</li>
                     </ul>
                </GridItem>
              </GridContainer>
 
           </div>
          </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
