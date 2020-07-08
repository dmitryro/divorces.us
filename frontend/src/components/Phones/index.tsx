import React from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const phoneStyle = {
    fontSize: '0.9em',
    marginBottom: '-0.5em'
}

// @material-ui/core components
export default function Phones() {
    return (<React.Fragment>
                <div style={phoneStyle}>
                    <GridContainer justify="center">
                        <GridItem xs={6} sm={6} md={6}>
                        +1 347 560 5151     
                        </GridItem>
                        <GridItem xs={6} sm={6} md={6}>
                        +1 866 456 8654
                        </GridItem>
                    </GridContainer>
                </div>
            </React.Fragment>);
}

