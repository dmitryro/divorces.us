import { observer } from 'mobx-react'
import React, {useReducer, useState} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import layoutStore from 'store/layoutStore'

function signUp() {
    return false;
}

const signupStyle = {
                    marginTop: '-0.3em',
                    marginLeft:'0.5em',
                    marginRight: '0.5em',
                    width: '6.0em',
                    height:'2.4em',
                    textAlign : 'center',
                    fontSize:'0.8em',
                    paddingTop: '-0.5em'
};

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function SignUp({signup}) {
    const classes = useStyles();
    const openSignupModal = (e) => {
      e.preventDefault();
      e.target.style.paddingTop = '-1.0em';
      layoutStore.setShowSignupModal(true);
      layoutStore.setShowLoginModal(false);
    };

    return (
        <Button variant="outlined" size="small" color="menu" className={classes.margin} style={signupStyle} onClick={openSignupModal}>
         Sign Up
        </Button>
    );

};

export default withStyles(signupStyle)(observer(SignUp));
