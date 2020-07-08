import { observer } from 'mobx-react';
import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { List, ListItem, withStyles } from "@material-ui/core";

const uncontestedStyle = {
}

const align = {
    minHeight:'30em',
    width:'100%',
    background:'transparent',
    marginTop:'10em'
}


function Uncontested({ ...props }) {
    useEffect(() =>  {
    });
    return(<div style={align}>Uncontested will be here</div>);
}

export default withStyles(uncontestedStyle)(observer(Uncontested));
