import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

const searchBarStyle = {
     position: 'relative',
     marginTop: '1.5em',
     marginLeft: '5.0em'
};

const searchInput = {
    borderBottom: '1px solid #CFCECE',
    color: '#CFCECE',
    placehoder: "Search",
}

class SearchBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
                <div style={searchBarStyle}>
                  <CustomInput
                    style = {searchInput} 
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                     formControlProps={{
                       className: classes.formControl
                     }}
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        "class": classes.searchInput
                      }
                    }}
                  />
                  <Button justIcon round color="google">
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
    );
  }
}

export default withStyles(navbarsStyle)(SearchBar);
