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

const align = {
    marginLeft: '4.4em',
    marginTop:'11em',
    paddingLeft: '1.5em',
    minHeight:'30em',
    width: '40em',
    background: '#CCCCCC',
    color: 'black'
}

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



const aboutFormStyle = {
   float:'left',
   textAlign:'left'
};



function Pricing({ ...props }) {
  useEffect(() =>  {
      layoutStore.setIsOpenOverlay(true);
      setTimeout(function(){ layoutStore.setIsOpenOverlay(true); }, 3000);
  });

  return (
    <div style={align}> 
      <GridContainer>
       <Overlay />
      </GridContainer>
    </div>
  );

}

export default observer(Pricing);
