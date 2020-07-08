import React, {useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from 'material-ui-image'
import { Link } from "gatsby";
import SignUp from "components/Signup/index.tsx";
import LogIn from "components/Login/index.tsx";

const loginStyle = {
                    marginLeft:'0.5em',
                    marginRight: '0.5em',
                    paddingTop: '0.1em',
                    border: '1px solid #CFCECE',
                    borderRadius: '5px',
                    width: '5.0em',
                    height:'2.4em',
                    textAlign : 'center',
                    fontSize:'0.9em',
                    '&:hover': {
                        cursor: 'pointer',
                        backgroundColor: '#CFCECE',
                        color: '#FFF'
                    }
};

const submenuStyle = {
     marginTop: '-1.0em',
     minWidth:'30em',
     position: 'absolute',
     fontSize:'0.8em'
};


export default function Submenu() {
    return (
         <React.Fragment id="uppertab">
          <Grid fluid style = {submenuStyle}>
                <Row start="xs">
                    <Col xs={1}>
                     <Link to="/faq">FAQ</Link>
                    </Col>
                    <Col xs={3}>
                      <Link to="/ask">Ask a Question</Link>
                    </Col>
                    <Col xs={4}>
                     <Link to="/online">Online Consultation</Link>
                    </Col>
                   <Col xs={2}>
                     <LogIn loginStyle={loginStyle}/>
                   </Col>
                   <Col xs={2}>
                     <SignUp signupStyle={loginStyle}/>
                   </Col>  
                </Row>
          </Grid>
        </React.Fragment>);
}
