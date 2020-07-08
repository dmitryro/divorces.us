import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";
import Logo from "./../Logo/index.tsx";
//import Authenticate from "./../Authenticate/index.tsx";
import UpperBar from "./../UpperBar/index.tsx";
import SearchBar from "./../Search/index.tsx";
import Phones from "./../Phones/index.tsx";

const rightLinksTop = {
   zIndex: "10000000",
   marginTop: "-1.5em"
}

const minLogo = {
   minWidth: '140px'
};

const hamburger = {
   marginLeft: '4.5em',
   marginTop: '-1.4em'
};

function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [upperOpen, setUpperOpen] = useState(true);


  const resetHeader = (e) => {
      //alert(JSON.stringify(e.target));
      e.preventDefault();
      //e.target.style.marginTop = '1.0em';
      setUpperOpen(true);
  };

  const headerColorChange = ()  => {
    const { classes, color, changeColorOnScroll } = props;
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
       setUpperOpen(false);
      document.body.getElementsByTagName("header")[0].style.marginTop = '-1.0em';
      document.body.getElementsByTagName("header")[0].style.marginBottom = '-1.5em';
    } else {
      //alert('time to redraw');
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      document.body.getElementsByTagName("header")[0].style.marginTop = '-1.0em';
      document.body.getElementsByTagName("header")[0].style.marginBottom = '-3.5em';
      setUpperOpen(true);
    }
  };

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
  };


  useEffect(() =>  {
     if (props.changeColorOnScroll) {
         window.addEventListener("scroll", headerColorChange);
     } else {
         document.body
        .getElementsByTagName("header")[0].style.marginTop = '-1.0em';
         typeof window !== 'undefined' && window.removeEventListener("scroll", headerColorChange);
  
     }
  });

  const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute
  } = props;
 
  const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  
  return (
      <React.Fragment>
      <AppBar className={appBarClasses} onClick={resetHeader} style={{marginTop:'-2.0em', marginBottom:'-3.0em'}}>
        <GridContainer justify="right"> 
        <GridItem xs={12} sm={12} md={1}>
                    <GridContainer justify="center">
                         <GridItem xs={12} sm={12} md={4}></GridItem>
                         <GridItem xs={12} sm={12} md={6}>
                         <div style={upperOpen ? {marginTop: '1.5em', minWidth:'130px'} : {marginTop: '1.5em', marginBottom:'-0.5em', minWidth:'130px'}}>
                            <Logo />
                         </div> 
                         </GridItem>
                         <GridItem xs={12} sm={12} md={2}></GridItem>
                    </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={11}>
               <Grid>
                    <Row start="sm">
                        <Col sm={4}>
                              <div style={upperOpen ? {marginTop: '2.0em'} : { display: 'none' }}>
                                  <UpperBar />
                              </div>
                        </Col>
                        <Col sm={1}>&nbsp;</Col>
                        <Col sm={6}>

                                 <div style={upperOpen ? {minWidth:'300px', marginLeft:'3.0em', overflow: 'hidden', marginTop: '0.5em', marginRight:'-1.5em'} : 
                                                         {minWidth:'300px', marginLeft:'3.0em', overflow:'hidden',marginTop:'0.5em', marginRight:'-1.5em'}}>

          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>

          <Hidden smDown implementation="css">
            <div style={rightLinksTop}>
            {rightLinks}
            </div>
          </Hidden>

        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>


                                  </div>
                        </Col>
                        <Col sm={1}>

          <Hidden mdUp>


            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              style={hamburger}
            >
              <Menu />
            </IconButton>
          </Hidden>

                        </Col>
                     </Row>
                     <Row start="sm">
                        <Col sm={9}>&nbsp;</Col>
                        <Col sm={3}>
                            <SearchBar/>
                        </Col>
                     </Row>
                     <Row start="sm">
                        <Col sm={4}>&nbsp;</Col>
                        <Col sm={3}>
                            <Phones/>
                        </Col>
                        <Col sm={5}>&nbsp;</Col>
                     </Row>
               </Grid>
        </GridItem>
        </GridContainer>
      </AppBar>
      </React.Fragment>
  );
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);
