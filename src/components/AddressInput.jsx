import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "../styles/AddressInput.scss";
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from "clsx";


export default function AddressInput({ address, setAddress, handleSubmitAddress, placeholder }) {  
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

  const [thePlaceHolder, setThePlaceHolder] = useState(placeholder)

  if(thePlaceHolder !== "Enter Your Address") {
    setTimeout(() => {
      setThePlaceHolder("Enter Your Address")
    }, 4000)
  }

	const handleAddressChange = event => {
		setAddress(event.target.value)
	}

  const handleIt = event => {
		if(event.keyCode === 13){
      handleSubmitAddress(address)
    }
	}

  const validateInput = (e) => {
    const re = /[A-Za-z0-9]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }
 
  return(
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
      
      <input
        // className={ !phone ? "input-64" : "input-65" }
        className={clsx("input-64", {
          ["input-65"]: phone && (thePlaceHolder === "Enter Your Address"),
          ["input-66"]: !phone && (thePlaceHolder !== "Enter Your Address"),
          ["input-67"]: phone && (thePlaceHolder !== "Enter Your Address"),
        })}
        name="address"
        type="text"
        value = {address}
        placeholder={thePlaceHolder}
        onChange={handleAddressChange}
        autoComplete="off"
        onKeyDown={handleIt}
        onKeyPress={validateInput}
      />  
    </div>
  )
}
