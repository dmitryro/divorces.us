import React, {useReducer, useState} from 'react';
import SignupPage from "./SignupPage";

export default function SignupModal({display}) {
    if (display) {
        return(<React.Fragment>
                  <SignupPage/>
               </React.Fragment>);
    } else {
        return(<React.Fragment/>);
    }  
}
