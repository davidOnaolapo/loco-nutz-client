import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

import "../styles/Application.scss";

const useStyles = makeStyles({
  root: {
  },
});

export default function RegisterText({ handleRegisterMode, isRegistered  }) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  const handleRegisterAttempt = () => {
    if(isRegistered === "no"){
      handleRegisterMode()
    }
  }

  return (
    <button className={ !phone ? "button-64" : "button-65"} role="button" onClick={handleRegisterAttempt}>
      <span className="text">
        {/* { (isRegistered ==="no") && <div> Register Your Address </div> }
        { (isRegistered ==="yes") && <div style={{color:"#65FF00"}}> Success! The Address is now Registered  </div> }
        { (isRegistered ==="load") && <img src="images/loading.gif" style={{height:"18px", width:"30px"}}/> }
        { (isRegistered ==="err1") && <div style={{color:"red"}}> The address must begin with "addr1"  </div> }
        { (isRegistered ==="err2") && <div style={{color:"red"}}> This address is already registered </div> } */}
        <div style={{color:"#FA75B1"}}> Registeration has Ended!</div>
      </span>
    </button> 
  );
}
