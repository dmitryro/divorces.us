import { observer } from 'mobx-react'
import React, {useReducer, useState} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import layoutStore from 'store/layoutStore'


function logIn() {
    return false;
}

const loginStyle = {
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

function LogIn({login}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openLoginModal = (e) => {
      e.preventDefault();
      e.target.style.paddingTop = '-1.0em';
      layoutStore.setShowLoginModal(true);
      layoutStore.setShowSignupModal(false);
    };
 
    return (
        <React.Fragment>
        <Button onClick={openLoginModal} variant="outlined" size="small" color="menu" className={classes.margin} style={loginStyle}>
          Login
        </Button>
      </React.Fragment>
    );

};

export default withStyles(loginStyle)(observer(LogIn));
