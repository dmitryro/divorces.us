import * as React from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from 'material-ui-image'
import logo from "assets/img/logos/logo-1.svg";
import SignUp from "./../SignUp/index.tsx";
import LogIn from "./../LogIn/index.tsx";

const logoStyle = {

                    marginTop:'-0.9em',
                    height: 90,
                    width: 140,
                    marginBottom:'-0.5em'
                  };

const authStyle = {
     position: 'absolute',
     float:'right',
     marginTop: '-0.5em',
     marginLeft: '56em',
     fontSize:'0.9em'
};

const loginStyle = {
                    paddingTop: '0.4em',
                    border: '1px solid #CFCECE',
                    borderRadius: '5px',
                    marginTop:'-2.6em',
                    width: '6.0em',
                    height:'2.4em',
                    textAlign : 'center'
                  };

const signupStyle = {
                    paddingTop: '0.4em', 
                    border: '1px solid #CFCECE',
                    borderRadius: '5px',
                    marginTop:'-2.6em',
                    width: '6.0em',
                    height:'2.4em',
                    textAlign : 'center'
                  };


export default function Authenticate() {
    return (
         <React.Fragment>
          <Grid fluid style = {authStyle}>
                <Row start="xs">
                    <Col xs={5}>
                     <LogIn loginStyle={loginStyle}/>
                    </Col>
                    <Col xs={2}>&nbsp;</Col>
                    <Col xs={5}>
                     <SignUp signupStyle={signupStyle}/>
                    </Col>
                </Row>
          </Grid>
        </React.Fragment>);
}
