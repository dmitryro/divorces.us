import * as React from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from 'material-ui-image'
import logo from "assets/img/logos/logo-1.svg";


const logoStyle = {
                    marginTop:'-0.9em',
                    height: 90, 
                    width: 140, 
                    marginBottom:'-0.5em'    
                  };

const sloganStyle = {
                    marginTop: '0.3em',
                    width: '15em',
                    textAlign:'left',
                    paddingLeft:'0.5em',
                    fontSize:'0.9em',
                    height: '1.0em',
                    marginBottom: '0.6em'
};

export default function Logo() {
    return (
         <React.Fragment>
          <Grid fluid>
                <Row start="xs">
                    <Col xs={2}>
                         <Image src={logo} style={logoStyle} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                     <div style={sloganStyle}>
                       Family Law Division
                     </div>
                    </Col>        
                </Row>
          </Grid>
        </React.Fragment>);
}
