import { observer } from 'mobx-react';
import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { List, ListItem, withStyles } from "@material-ui/core";

const faqStyle = {
}

const align = {
    minHeight:'30em',
    width:'100%',
    background:'transparent',
    marginTop:'10em'
}


function FAQ({ ...props }) {
    useEffect(() =>  {
    });
    return(<div style={align}>FAQ will be here</div>);
}

export default withStyles(faqStyle)(observer(FAQ));
