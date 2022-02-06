import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import RegisterText from "./RegisterText"
import AddressInput from "./AddressInput"

const REGISTER_TEXT_MODE = "register_text"
const ENTER_ADDRESS_MODE = "enter_address_mode"
const LOADING = "loading"
const SUCCESS_MODE = "success_mode"
const ERROR_MODE = "error_mode"

const useStyles = makeStyles({
  root: {
  },
});

const RegisterAdderss = ({ submitAddress }) => {
  const classes = useStyles();
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));
  const ipad = useMediaQuery(theme.breakpoints.down("md"));

  const [address, setAddress] = useState("");
  const [registerMode, setRegisterMode] = useState(REGISTER_TEXT_MODE);

  const handleRegisterMode = () => {
    if(registerMode === REGISTER_TEXT_MODE){
      setRegisterMode(ENTER_ADDRESS_MODE)
    }
  }

  const handleSubmitAddress = async(address) => {
    setRegisterMode(LOADING)
    setTimeout (async() => {
      try {
        await submitAddress(address)
      } catch(err) {
        console.log(err)
      }
      setRegisterMode(SUCCESS_MODE)
    }, 4000)
  }

  return (
    <>
      { (registerMode === ENTER_ADDRESS_MODE) && 
        <AddressInput 
          address={address} setAddress={setAddress}
          handleSubmitAddress={handleSubmitAddress}
        /> 
      }
      { (registerMode === REGISTER_TEXT_MODE) && 
        <RegisterText isRegistered="no" 
          handleRegisterMode={handleRegisterMode}
        /> 
      }
      { (registerMode === SUCCESS_MODE) && <RegisterText isRegistered="yes" /> }
      { (registerMode === LOADING) && <RegisterText isRegistered="load"/> }
    </>
  );
};

export default RegisterAdderss;
