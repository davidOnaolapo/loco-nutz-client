import React from "react";

import Steps from "./Steps"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  root: {
    display: "flex", 
    flexDirection: "column",
    alignItems:"center", 
    marginTop:"6em", 
  },
  rootPc: {
    display: "flex", 
    flexDirection: "column",
    alignItems:"center", 
    marginTop:"6em", 
    marginRight:"12em"
  },
});

const Locos = (props) => {
  const {} = props;
  const classes = useStyles();
  const theme = useTheme();
  const pc = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <div className= {pc ? classes.rootPc : classes.root}>
      <img style={{width: "30em"}} src="/images/locos_bounce.png"/>
      <Steps/>
    </div>    
  );
};

export default Locos;
