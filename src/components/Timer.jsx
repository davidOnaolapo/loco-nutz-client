import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Timer from "react-compound-timer"

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

  return (
    <Timer
      initialTime={700000}
      direction="backward"
      style={{color:"red"}}
    >
      {() => (
        <div style={{color:"red", display:"flex", justifyContent:center}}>
          <div> 
            <Timer.Days/> 
            <div> days </div>
          </div>
          <div> 
            <Timer.Hours/> 
            <div> hours </div>
          </div>
          <div> 
            <Timer.Minutes/> 
            <div> minutes </div>
          </div>
          <div> 
            <Timer.Seconds/> 
            <div> seconds </div>
          </div>
        </div>
      )}
    </Timer>
  );
}
