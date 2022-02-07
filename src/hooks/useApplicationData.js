import {useState } from "react";
import axios from 'axios';

import { API_URL } from "../helpers/constants"


export default function useApplicationData () { 
  const [address, setAddress] = useState("");
 
  const submitAddress = async(address) => {
    try {
      const { status } = await axios.post(`${API_URL}`, {address})
      return(status)
    } catch(err) {
      return err.response
    }
  }

  return {
    address,
    setAddress,
    submitAddress
  }
}