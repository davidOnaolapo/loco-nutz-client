import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Timer from "react-compound-timer"

import "../styles/Timer.scss";

const useStyles = makeStyles({
  root: {
  },
});

export default function TheTimer({ initialTime  }) {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  if(initialTime) {
    return (
      <Timer
        initialTime={initialTime}
        direction="backward"
      >
        {() => (
          <div className= {!phone? "clock" : "clockPhone"}>
            <div className="timer"> 
              <Timer.Days/> 
              :
            </div>
            <div className="timer"> 
              <Timer.Hours/>
              : 
            </div>
            <div className="timer"> 
              <Timer.Minutes/> 
              :
            </div>
            <div className="timer"> 
              <Timer.Seconds/> 
            </div>
          </div>
        )}
      </Timer>
    )
  } else {
    return (<div className= {!phone? "load" : "loadPhone"}> <img src="images/loading.gif" style={{width:"30px"}}/></div>)
  }
}
