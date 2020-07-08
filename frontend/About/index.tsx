import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "components/CustomButtons/Button.jsx";
/*eslint-disable*/
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Map from "components/Map/Index.tsx";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import contactStyle from "assets/jss/material-kit-react/components/contactStyle.jsx";

const linksGrid = {
    borderTop : "0.5px #888886 solid",
    borderBottom: "0.5px #888886 solid"
};

const align = {
    marginTop: '1em'
};

const messageArea = {
    marginTop: '1.4em',
    paddingLeft:'0.5em',
    color: '#CFCECE',
    border: '2px solid #CFCECE',
    backgroundColor:'#F3F3F3',
    minWidth: '34em',
};

const labelStyle = {
    paddingLeft:'0.5em'
};

const inputStyle = {
    paddingLeft:'0.5em',
    minWidth: '28em',
    border: '2px solid #CFCECE',
    width: '28em',
    height: '2.4em'
};

const contactHeaderStyle = {
    color: "#FFFFFF",
    fontWeight: "normal",
    marginBottom: "0.5em"
};

const ulStyle = {
    listStyleType: "none",
    textAlign: "left"
};



const contactFormStyle = {
   float:'left',
   textAlign:'left'
};



function About({ ...props }) {
  const { classes, whiteFont } = props;
  const contactClasses = classNames({
    [classes.contact]: true,
    [classes.contactWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.contactWhiteFont]: whiteFont
  });
  return (
    <div className={contactClasses} style={align}>
      <div className={classes.container}>

        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <Grid fluid>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h3>About Us</h3>
                              </Col>
                          </Row>
                          <Row start="xs">
                              <Col xs={12}>
                              <h4>Grinberg and Segal Family Law Division</h4>
                              </Col>
                          </Row>
                    </Grid>
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
                    <Grid fluid>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h3>Our History</h3>
                              </Col>
                          </Row>
                          <Row start="xs">
                              <Col xs={12}>
                                     <GridContainer justify="left">
                                          <GridItem xs={0} sm={0} md={2}>
                                          2003 -
                                          </GridItem>
                                          <GridItem xs={0} sm={0} md={10}>Alexander J. Segal, Esq, and Eliza Grinberg, Esq, founded The Law Offices of Grinberg, PLLC.
                                          </GridItem>
                                     </GridContainer>
                                     <GridContainer justify="left">
                                          <GridItem xs={0} sm={0} md={2}>
                                          2005 -
                                          </GridItem>
                                          <GridItem xs={0} sm={0} md={10}>
Wendy Barlow, Esq, joined the team at Grinberg & Segal.
                                          </GridItem>
                                     </GridContainer>
                                     <GridContainer justify="left">
                                          <GridItem xs={0} sm={0} md={2}>
                                          2015 -
                                          </GridItem>
                                          <GridItem xs={0} sm={0} md={10}>
Our long-time and experienced paralegal, Melsida Asatrian, became a lawyer in New Jersey. She was subsequently licensed to practice law in New York in 2016.
                                          </GridItem>
                                     </GridContainer>
                                     <GridContainer justify="left">
                                          <GridItem xs={0} sm={0} md={2}>
                                          2016 -
                                          </GridItem>
                                          <GridItem xs={0} sm={0} md={10}>
The Law Offices of Grinberg & Segal, PLLC, moved to its current address in the heart of Manhattan’s financial district at 11 Hanover Sq, 10th Fl., New York, NY, 10005
                                          </GridItem>
                                     </GridContainer>
                              </Col>
                          </Row>
                    </Grid>
               </GridItem>
               <GridItem xs={12} sm={12} md={4}>
                       <Grid fluid style = {contactFormStyle}>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h3>Our Advantages</h3>
                              </Col>
                          </Row>
                            <Row start="xs">
                                 <Col xs={12}>
                                 <h4>Why choose us</h4>
                                 </Col>
                            </Row>
                            <Row start="xs">
                                 <Col xs={12}>
                                   It takes many good deeds to build a good reputation, and only one bad one to lose it.” - Benjamin Franklin
                                 </Col>
                            </Row>
                            <Row start="xs">
                                 <Col xs={12}>
At the Law Offices of Grinberg & Segal, PLLC, our expert family law attorneys use their knowledge and extensive experience in New York and New Jersey family law to provide clients with the best expert representation they can find. However, our experienced family law attorneys do not owe their stellar reputation solely to their legal skill, but also to how they approach each and every client and case. Whether you simply need an attorney to review forms relating to a marriage or divorce agreement, or need help with a more complex matter such as adopting a child or navigating complicated divorce proceedings, our attorneys will bring their impeccable professionalism and care and compassion to assist you.
                                 </Col>
                            </Row>
                            <Row start="xs">
                                 <Col xs={12}>
We do not just believe our clients deserve the best counsel; we stake our reputation on our ability to deliver it. If you choose to work with us on your family law issue, you can rest assured that you and your case will get the expert care and utmost respect that it deserves, all for a very reasonable price.
                                 </Col>
                            </Row>
                      </Grid>
             </GridItem>
          </GridContainer>



          </div>
       </div>
     </div>
    </div>
);

}

export default withStyles(contactStyle)(About);
