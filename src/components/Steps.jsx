import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import "../styles/Steps.scss";

const useStyles = makeStyles({
  updates : {
    display: "flex",
    flexDirection: "column",
    margin:"4em 0em 0em 0em"
  },
  noLine: {
    textDecoration:"none",
    marginLeft:"0.3em",
    color:"white"
  },
  locos: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center" 
  }
});

export default function Edition(props) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const {
  } = props;
  return (    
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"2em"}} id="updates" data-aos= "fade-left" data-aos-delay="600">
      <div  className={phone ? "titlePhone" : "title"}> 
      Our Policy ID: 97a94467c176d60cc97cb1eb93e078c2c7a7626d01079c36659136c2
      </div>
      <div style={{ marginLeft: !phone ? "12.4em" : "0em"}}> 
        <ul className="updateText">
          {/* <li className="mb">
            
          </li> */}
        </ul>
      </div> 
    </div>     
  );
}