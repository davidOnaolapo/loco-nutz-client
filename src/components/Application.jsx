import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Timer from "./Timer"

import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';

import useApplicationData from "../hooks/useApplicationData"
import Locos from "./Locos"
import RegisterAddress from "./RegisterAddress"

import "../styles/Application.scss";


//Declare material ui styling here
const useStyles = makeStyles((theme) => ({
  '@global':{
    main:{
      backgroundColor:"#000",
      color:'#f5f5f5',
      backgroundImage: "url(images/bg.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition:"10% 100%"
    }
  },
  toolBar: {
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:"0.2em",
    paddingRight:"1.7em",
    width:"100%"
  },
  toolBarPhone: {
    display: "flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"0.2em"
  },
  container: {
    width: "1150px",
    display: "flex",
    flexDirection: "column",
    marginLeft:"auto",
    marginRight:"auto"
  },
  containerPhone: {
    display: "flex",
    flexDirection: "column",
    margin: "2em 2.9em 2em 2em"
  },
  noLine: {
    textDecoration:"none"
  },
  rip: {
   width: "20em",
  },
  ripPhone: {
    width: "24em",
   },
  bgImagePhone: {
    backgroundImage: "url(images/bgcrop.jpg)",
  },
  menu: {
    display:"flex", 
     marginTop:"1.4em", 
  },
  none: {
    display: "none"
  },
  locos: {
    display: "flex",
    flexDirection:"column",
    alignItems:"center"
  }
}));

export default function Application() {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  // const [ phoneDrawerOpen, setPhoneDrawerOpen ] = useState(false);
  // const [ mintAddy, setShowMintAddy] = useState("Mint Address");

  const {
    submitAddress,
    initialTime
  } = useApplicationData();
  
  // const handleMintAddy = () => {
  //   if(mintAddy === "Mint Address") {
  //     setShowMintAddy("ox1234567J8910kl5fakubic")
  //   } else {
  //     setShowMintAddy("Mint Address")
  //   }
  // }

  const handlePhoneDrawerMenu = () => {
     // setPhoneDrawerOpen(!phoneDrawerOpen);
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <main className="layout">  
          <div className={!phone ? classes.container : classes.containerPhone}>
            <div className={!phone ? classes.toolBar : classes.toolBarPhone}>
              <img className={ phone ? classes.ripPhone : classes.rip} src="images/logo.png"/>
              <div style={{display:"flex", flexDirection:"column"}}>
                <RegisterAddress submitAddress={submitAddress}/>
              </div>       
            </div> 
            <Timer initialTime={initialTime}/>        
            <Switch>
              <Route exact path='/'>
                <Locos />
              </Route>
            </Switch> 
          </div>             
        </main>
      </ThemeProvider>
    </Router>

  );
}
