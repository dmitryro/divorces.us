import { container, primaryColor } from "assets/jss/material-kit-react.jsx";

const footerStyle = {
  block: {
    background: "#1C1C1C",
    color: "#888886",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "10px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    color: "#888886",
    background: "#1C1C1C",
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  ul: {
    listStyleType: "none"
  },
  li: {
    listStyleType: "",
    textAlign: "left"
  },
  a: {
    color: "#888886",
    textDecoration: "none",
    backgroundColor: "transparent"
  },
   "&:hover,&:focus": {
    color: "#3BA997"
  },
  "h4": {
    color: "#FFFFFF"
  },
  "h3": {
    color: "#FFFFFF"
  },
  "h5": {
    color: "#FFFFFF"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;
