/*eslint-disable*/
import React, { useState } from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Email from "@material-ui/icons/Email";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import layoutStore from "store/layoutStore/index.ts";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import icons from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const dropdown = {
  border: 'none',
  outline: 'none',
  padding: '14px 16px',
  backgroundColor: 'inherit',
  fontFamily: 'inherit',
  margin: 0
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function HeaderLinks({ ...props }) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/">
        <Button
          href="/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > 
        Home
        </Button>        
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/about">
        <Button
          href="/about"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > 
        About
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/pricing">
        <Button
          href="/pricing"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > 
        Pricing
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>

    <div>
      <Link to="/services">
      <Button
       href="/services"
        aria-controls="customized-menu"
        aria-haspopup="true"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        style={dropdown}
        onClick={handleClick}
      >
      Services
      </Button>
      </Link>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link to="/services/adoption">
          <ListItemText primary="Adoption" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/agreements">
          <ListItemText primary="Agreements" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/contested">
          <ListItemText primary="Contested Divorce" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Child Custody" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Child Support" />
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/domesticviolence">
          <ListItemText primary="Domestic Violence" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/consultation">
          <ListItemText primary="Conslultation" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/mediation">
          <ListItemText primary="Mediation" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/property">
          <ListItemText primary="Property" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/protection">
          <ListItemText primary="Protection" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/spousalsupport">
          <ListItemText primary="Spousal Support" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/services/uncontested">
          <ListItemText primary="Uncontested Divorce" />
          </Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>


      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/payments">
        <Button
          href="/payments"
          color="transparent"
          className={classes.navLink}
        >
         Payments
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/blog">
        <Button
          href="/blog"
          color="transparent"
          className={classes.navLink}
        >
         Blog
        </Button>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/contact">
        <Button
          href="/contact"
          color="transparent"
          className={classes.navLink}
        >
         <Email className={icons} />
         </Button> 
         </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
