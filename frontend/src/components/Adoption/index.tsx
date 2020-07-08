import { observer } from 'mobx-react'
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
import styled from "styled-components";
import layoutStore from 'store/layoutStore/index.ts';
import Overlay from "./Overlay.tsx";

const WrapperDivContent = styled.div`
    background-color:#F3F3F3;    
`;


const DivContent = styled.div`
    max-height: 0;
    -webkit-transition: max-height 0.5s ease-in-out;
    -moz-transition: max-height 0.5s ease-in-out;
    -o-transition: max-height 0.5s ease-in-out;
    transition: max-height 0.5s ease-in-out;
`;

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import contactStyle from "assets/jss/material-kit-react/components/contactStyle.jsx";

const linksGrid = {
    borderTop : "0.5px #888886 solid",
    borderBottom: "0.5px #888886 solid"
};

const align = {
    marginTop: '8.5em',
    paddingTop: '1.0em',
    background:'#F3F3F3',
    position: 'relative',
};




function Adoption({ ...props }) {
  const { classes, whiteFont } = props;
  const contactClasses = classNames({
    [classes.adoption]: true,
    [classes.contactWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.contactWhiteFont]: whiteFont
  });

  useEffect(() =>  {
      layoutStore.setIsOpenOverlay(true);
      setTimeout(function(){ layoutStore.setIsOpenOverlay(true); }, 3000);
  });

  return (
    <WrapperDivContent>
    <div style={align}>
        <Overlay comp="adoption" />
    </div>
    </WrapperDivContent>
);

}

export default withStyles(contactStyle)(observer(Adoption));
