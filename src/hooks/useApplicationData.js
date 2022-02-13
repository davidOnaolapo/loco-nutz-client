import React, {useState, useEffect } from "react";
import axios from 'axios';

import { API_URL } from "../helpers/constants"


export default function useApplicationData () { 
  const [address, setAddress] = useState("");
  const [initialTime, setinitialTime] = useState(0);

  useEffect(() => {
    getElapsedTime()
  },[])

  const getElapsedTime = async() => {
    try {
      const { data } = await axios.get(`${API_URL}/countdown_router`)
      console.log(data.msg.elapsedTime)
      setTimeout(() => {
        setinitialTime(8100000 - data.msg.elapsedTime)
      }, 2000)   
    } catch(err) {
      console.log(err.response)
    }
  }

 
  const submitAddress = async(address) => {
    try {
      const { status } = await axios.post(`${API_URL}/address`, {address})
      return(status)
    } catch(err) {
      return err.response
    }
  }

  return {
    address,
    setAddress,
    submitAddress,
    initialTime
  }
}