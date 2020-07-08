import React, {useEffect, useState} from 'react';
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const aboutFormStyle = {
   float:'left',
   textAlign:'left',
   overflow: 'auto',
   flex: '1'
};


function About() {
   return(

                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={1}></GridItem>
                    <GridItem xs={12} sm={12} md={3}> 
                        <Grid fluid>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h2>About US</h2>
                              </Col>
                          </Row>
                          <Row start="xs">
                              <Col xs={12}>
                                 <h3>Grinberg and Segal Family Law Division</h3>
                              </Col>
                          </Row>
                         <Row start="xs">
                                 <Col xs={12}>
The Law Offices of Grinberg, PLLC, is located in the heart of Manhattan’s Financial District. Our Family Law Division consists of highly experienced and reputable lawyers dedicated to representing clients in all areas of New York and New Jersey family law. We are dedicated to provide you with personal attention and professional legal service to help you achieve your goals. In addition to our family law services, our law firm is known throughout the United States for its work in all areas of U.S. immigration law. These dual areas of expertise allow us to represent some clients simultaneously in the New York and New Jersey family law and U.S. immigration law contexts.
                                 </Col>
                         </Row>
                            <Row start="xs">
                                 <Col xs={12}><br/>
                                 </Col>
                            </Row>

                        </Grid>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                       <Grid fluid>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h2>Our History</h2>
                              </Col>
                          </Row>
                            <Row start="xs">
                                 <Col xs={12}> 
                                 <GridContainer justify="left">
                                     <GridItem xs={12} sm={12} md={3}><h4>2003 - </h4></GridItem>
                                     <GridItem xs={12} sm={12} md={9}>Alexander J. Segal, Esq, and Eliza Grinberg, Esq, founded The Law Offices of Grinberg, PLLC.                                  
                                     </GridItem>
                                 </GridContainer>

                                 <GridContainer justify="left">
                                     <GridItem xs={12} sm={12} md={3}><h4>2005 - </h4></GridItem>
                                     <GridItem xs={12} sm={12} md={9}>
Wendy Barlow, Esq, joined the team at Grinberg & Segal.
                                     </GridItem>
                                 </GridContainer>
                                 <GridContainer justify="left">
                                     <GridItem xs={12} sm={12} md={3}><h4>2015 - </h4></GridItem>
                                     <GridItem xs={12} sm={12} md={9}>
Our long-time and experienced paralegal, Melsida Asatrian, became a lawyer in New Jersey. She was subsequently licensed to practice law in New York in 2016.
                                     </GridItem>
                                 </GridContainer>
                                 <GridContainer justify="left">
                                     <GridItem xs={12} sm={12} md={3}><h4>2016 - </h4></GridItem>
                                     <GridItem xs={12} sm={12} md={9}>
The Law Offices of Grinberg & Segal, PLLC, moved to its current address in the heart of Manhattan’s financial district at 11 Hanover Sq, 10th Fl., New York, NY, 10005
                                     </GridItem>
                                 </GridContainer>


                                 </Col>
                            </Row>
                      </Grid>
                   </GridItem>
                   <GridItem xs={12} sm={12} md={4}>
                       <Grid fluid style = {aboutFormStyle}>
                          <Row start="xs">
                              <Col xs={12}>
                                  <h2>Our Advantages</h2>
                              </Col>
                          </Row>
                            <Row start="xs">
                                 <Col xs={12}> <h3> Why Choose Us </h3>
                                 </Col>
                            </Row>
                            <Row start="xs">
                                 <Col xs={12}>
It takes many good deeds to build a good reputation, and only one bad one to lose it.” - Benjamin Franklin
                                 </Col>
                            </Row>

                            <Row start="xs">
                                 <Col xs={12}>
                                     <br/>
                                 </Col>
                            </Row>                            

                            <Row start="xs">
                                 <Col xs={12}> 
At the Law Offices of Grinberg & Segal, PLLC, our expert family law attorneys use their knowledge and extensive experience in New York and New Jersey family law to provide clients with the best expert representation they can find. However, our experienced family law attorneys do not owe their stellar reputation solely to their legal skill, but also to how they approach each and every client and case. Whether you simply need an attorney to review forms relating to a marriage or divorce agreement, or need help with a more complex matter such as adopting a child or navigating complicated divorce proceedings, our attorneys will bring their impeccable professionalism and care and compassion to assist you.
                                 </Col>
                            </Row>

                            <Row start="xs">
                                 <Col xs={12}>
                                     <br/>
                                 </Col>
                            </Row>

                            <Row start="xs">
                                 <Col xs={12}>
We do not just believe our clients deserve the best counsel; we stake our reputation on our ability to deliver it. If you choose to work with us on your family law issue, you can rest assured that you and your case will get the expert care and utmost respect that it deserves, all for a very reasonable price.
                                 </Col>
                            </Row>

                            <Row start="xs">
                                 <Col xs={12}>
                                     <br/>
                                 </Col>
                            </Row>
                      </Grid>
                 </GridItem>
              </GridContainer>
   );
}
export default About;
