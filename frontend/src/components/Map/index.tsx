import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const mapStyle = {
    textAlign: 'left',
    marginLeft: '-2.0em',
    paddingTop: '2.0em',
    minWidth:'400px',
    minHeight:'200px',
    color:'#9FA09F'
};

const mapLine = {
    paddingTop: '0.5em',
    paddingBottom: '0,5em'
}

const mapGridStyle = {

};

const addressLine = {
    fontSize: '1.4em'
};

export default function Map(props) {
    return(<React.Fragment>
              <div style={mapStyle}>
                       <Grid fluid style = {mapGridStyle}>
                          <Row start="xs" style={mapLine}>
                              <Col xs={12}>                  
Our office is conveniently located in Financial District, Downtown NYC. Wall Street subway stop (2,3,4,5).

                              </Col>
                          </Row>
                          <Row style={mapLine}>
                              <Col xs={12} style={addressLine}>
                                 11 Hanover Square, 10th Floor
                              </Col>
                          </Row>
                          <Row style={mapLine}>
                              <Col xs={12} style={addressLine}>
                                 (Entrance at 76 Beaver Street)
                              </Col>
                          </Row>
                          <Row style={mapLine}>
                              <Col xs={12} style={addressLine}>
                                 New York , NY 10004 .
                              </Col>
                          </Row>
                          <Row style={mapLine}>
                               <Col xs={4}>
                                      Freephone:
                               </Col>
                               <Col xs={8}>
                                      +1 866 456 ­8654
                               </Col>
                          </Row>
                          <Row style={mapLine}>
                               <Col xs={4}>
                                      Telephone:
                               </Col>
                               <Col xs={8}>
                                      +1 347 560 5151
                               </Col>
                          </Row>
                          <Row style={mapLine}>
                               <Col xs={4}>
                                      Fax:
                               </Col>
                               <Col xs={8}>
                                      +1 212 202 0342
                               </Col>
                          </Row>
                          <Row style={mapLine}>
                               <Col xs={4}>
                                      Email:
                               </Col>
                               <Col xs={8}>
                                      info@myattorneyusa.com                              
                               </Col>
                          </Row>
                      </Grid>
              </div>
           </React.Fragment>);
}
