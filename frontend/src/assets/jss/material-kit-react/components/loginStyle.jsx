import {
  menuColor,
  whiteColor
} from "assets/jss/material-kit-react.jsx";


const loginStyle = theme => ({
  menu: {
    backgroundColor: menuColor
  },
  white: {
    backgroundColor: whiteColor
  },
  loginStyle: {
    background: menuColor,
    textDecoration: 'none',
    color: "#CFCECE",
    marginLeft:'0.5em',
    marginRight: '0.5em',
    paddingTop: '0.1em',
    border: '1px solid #CFCECE',
    borderRadius: '3px',
    width: '5.0em',
    height:'2.4em',
    fontSize:'0.9em',
    textAlign : 'center',
    "&,&:hover": {
            color: "white",
            textDecoration: 'none',
            display: 'block',
            background: whiteColor
    }
  }
});

export default loginStyle;
