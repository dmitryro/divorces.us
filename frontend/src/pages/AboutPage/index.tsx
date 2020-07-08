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
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

function About(props) {
  useEffect(() =>  {
  });

  const { classes, ...rest } = props;
    return (
      <div>ABOUT ME</div>
    );
}

export default withStyles(componentsStyle)(observer(About));
