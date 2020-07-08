import { observer } from 'mobx-react';
import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { List, ListItem, withStyles } from "@material-ui/core";

const custodyStyle = {
}

const align = {
    minHeight:'30em',
    width:'100%',
    background:'transparent',
    marginTop:'10em'
}

function Custody({ ...props }) {
    useEffect(() =>  {
    });
    return(<div style={align}>Child Custody will be here</div>);
}

export default withStyles(custodyStyle)(observer(Custody));
