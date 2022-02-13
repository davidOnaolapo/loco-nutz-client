import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

import RegisterText from "./RegisterText"
import AddressInput from "./AddressInput"
import { addressValid } from '../helpers/errorCheck';

const REGISTER_TEXT_MODE = "register_text"
const ENTER_ADDRESS_MODE = "enter_address_mode"
const LOADING = "loading"
const SUCCESS_MODE = "success_mode"
const ERROR1_MODE = "error1_mode"
const ERROR2_MODE = "error2_mode"
const ERROR3_MODE = "error3_mode"

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
      if(addressValid(address)){
        const successCheck = await submitAddress(address)
        if(successCheck.status === 406) {
          setAddress("")
          setRegisterMode(ERROR2_MODE)
          return
        } else if(successCheck === 200) {
          console.log("Successful addition")
          setRegisterMode(SUCCESS_MODE)
          return
        } else {
          setAddress("")
          setRegisterMode(ERROR3_MODE)
          return
        } 
      } else {
        setAddress("")
        setRegisterMode(ERROR1_MODE)
        return
      }
    }, 2000)
  }

  return (
    // <>
    //   { (registerMode === ENTER_ADDRESS_MODE) && 
    //     <AddressInput 
    //       address={address} setAddress={setAddress}
    //       handleSubmitAddress={handleSubmitAddress}
    //       placeholder="Enter Your Address"
    //     /> 
    //   }
    //   { (registerMode === REGISTER_TEXT_MODE) && 
    //     <RegisterText isRegistered="no" 
    //       handleRegisterMode={handleRegisterMode}
    //     /> 
    //   }
    //   { (registerMode === SUCCESS_MODE) && <RegisterText isRegistered="yes" /> }
    //   { (registerMode === LOADING) && <RegisterText isRegistered="load"/> }
    //   { (registerMode === ERROR1_MODE) && <AddressInput 
    //       address={address} setAddress={setAddress}
    //       handleSubmitAddress={handleSubmitAddress}
    //       placeholder="The Address is Invalid"
    //     />  }
    //   { (registerMode === ERROR2_MODE) && <AddressInput 
    //       address={address} setAddress={setAddress}
    //       handleSubmitAddress={handleSubmitAddress}
    //       placeholder="Address Already Registered"
    //     />  }
    //   { (registerMode === ERROR3_MODE) && <AddressInput 
    //     address={address} setAddress={setAddress}
    //     handleSubmitAddress={handleSubmitAddress}
    //     placeholder="Internal Server Error"
    //   />  }
    // </>
    <>
      <RegisterText isRegistered="no" 
        handleRegisterMode={handleRegisterMode}
      /> 
    </>
  );
};

export default RegisterAdderss;
