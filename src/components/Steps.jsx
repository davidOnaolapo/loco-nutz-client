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
    <div className={classes.locos} id="updates" data-aos= "fade-left" data-aos-delay="600">
      <div  className={phone ? "titlePhone" : "title"}> 
        Steps to Mint Your Loconutz + Cocoloco NFTs
      </div>
      <div style={{ marginLeft: !phone ? "9em" : "3em"}}> 
        <ul className="updateText">
          <li className="mb">
            Click the button above to register your address for minting
          </li>
          <li className="mb">
            Send at least two NFTs to your submitted address (1 LocoNutz, 1 CocoLoco) in a SINGLE transaction. The Order doesn't matter.
          </li>
          <li className="mb">   
            You can send more than one pair at once    
          </li>
        </ul>
      </div> 
    </div>     
  );
}