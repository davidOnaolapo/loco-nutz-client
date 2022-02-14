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
        Steps to Mint Your Crazy Island NFTs
      </div>
      <div style={{ marginLeft: !phone ? "12.4em" : "0em"}}> 
        <ul className="updateText">
          <li className="mb">
            Click the button above to register your address for minting
          </li>
          <li className="mb">
            Send 1 LocoNutz + 1 CocoLoco in a SINGLE transaction to your submitted address (from the same wallet!).
          </li> 
          <li className="mb">
            The NFTs can only be used once - you can send multiple transactions.
          </li>
          <li className="mb">
            Crazy Island NFTs will be minted and delivered to you on Feb 14th.
          </li>
        </ul>
      </div> 
    </div>     
  );
}