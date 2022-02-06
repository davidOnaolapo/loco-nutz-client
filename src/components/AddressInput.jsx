import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "../styles/AddressInput.scss";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AddressInput({ address, setAddress, handleSubmitAddress }) {  
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("xs"));

	const handleAddressChange = event => {
		setAddress(event.target.value)
	}

  const handleIt = event => {
		if(event.keyCode === 13){
      handleSubmitAddress()
    }
	}

  return(
    <input
      className={ !phone ? "input-64" : "input-65" }
      name="address"
      type="text"
	    value = {address}
      placeholder="Enter your Address"
			onChange={handleAddressChange}
      autoComplete="off"
      onKeyDown={handleIt}
    />  
  )
}
