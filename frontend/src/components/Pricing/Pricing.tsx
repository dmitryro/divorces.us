import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const aboutFormStyle = {
   float:'left',
   textAlign:'left'
};


function Pricing() {
   return(

                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={3}> 
                        <Grid fluid>
                          <Row start="xs">
                              <Col xs={12}>
      THIS IS IT - AND IT
                              </Col>
                          </Row>
                          <Row start="xs">
                              <Col xs={12}>
                                 <h3>Grinberg and Segal Family Law Division</h3>
                              </Col>
                          </Row>
                        </Grid>
                    </GridItem>
              </GridContainer>
   );
}
export default Pricing;
