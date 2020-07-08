import { container, primaryColor } from "assets/jss/material-kit-react.jsx";

const contactStyle = {
  block: {
    background: '#F3F3F3',
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
  contact: {
    background: '#F3F3F3',
    color: "#888886",
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
  h4: {
    color: "#000000"
  },
  h3: {
    color: "#000000"
  },
  h5: {
    color: "#000000"
  },
  contactWhiteFont: {
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
export default contactStyle;
