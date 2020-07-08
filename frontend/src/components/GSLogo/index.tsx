import * as React from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Image from 'material-ui-image'
import logo from "assets/img/logos/logo-2.svg";
//var lg = "https://divorcesus.com/media/images/svg/solid_color_vector_grayscale.svg";

const logoStyle = {
                    marginTop:'-0.9em',
                    height: 240, 
                    width: 200, 
                    marginBottom:'-0.5em',
                    background: "transparent"   
                  };

const sloganStyle = {
                    color:"#888886",
                    marginTop: '-3.0em',
                    width: '15em',
                    textAlign:'center',
                    paddingLeft:'0em',
                    marginLeft: '-0.5em',
                    fontSize:'0.9em',
                    height: '1.0em',
                    marginBottom: '2.0em'
};

export default function Logo() {
    return (
         <React.Fragment>
          <Grid fluid>
                <Row start="xs">
                    <Col xs={2} sm={2} md={3}>
                         <img style={logoStyle} src={logo} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={2} md={2}>
                     <div style={sloganStyle}>
                       Family Law Division
                     </div>
                    </Col>        
                </Row>
          </Grid>
        </React.Fragment>);
}
