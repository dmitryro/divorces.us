import { observer } from 'mobx-react';
import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { List, ListItem, withStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InnerHTML from "components/InnerHTML/index.tsx";
import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaGithub } from 'react-icons/fa';
import layoutStore from 'store/layoutStore/index.ts';
import servicesStore from 'store/servicesStore/index.ts';

const contestedStyle = {
}

const shareStyle = {
    fontSize: '0.7em'
}

const postBlock = {
    marginTop: '1.0em',
    marginBottom: '2.0em', 
    textAlign: 'left'
}


const align = {
    minHeight:'30em',
    width:'100%',
    backgroundColor:'#F3F3F3',
    color: '#000000',
    fontSize: '1.2em',
}


function Contested({ ...props }) {
    servicesStore.readContested();
    let contested = servicesStore.contested;

    //alert("HI "+contested);
    useEffect(() =>  {
       //alert("ADOPTION "+contested);
    });

    return (<div> {contested.title} - {contested.statement} - <InnerHTML html={contested.description}/>
           </div>);
}

export default withStyles(contestedStyle)(observer(Contested));
