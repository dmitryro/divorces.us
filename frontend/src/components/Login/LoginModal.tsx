import React, {useReducer, useState} from 'react';
import LoginPage from "./LoginPage";

export default function LoginModal({display}) {
    if (display) {
        return(<React.Fragment>
                  <LoginPage/>
               </React.Fragment>);
    } else {
        return(<React.Fragment/>);
    }  
}
