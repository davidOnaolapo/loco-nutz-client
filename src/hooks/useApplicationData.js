import {useState, useEffect} from "react";
import axios from 'axios';

import { API_URL } from "../helpers/constants"


export default function useApplicationData () { 
  const [users, setUsers] = useState("");
  const [address, setAddress] = useState("");
  
  const fetchAllAddresses = async () => {
    try {
      const { data } = await axios.get(`${API_URL}`)
      setAddress(data)    
    } catch(err) {
      console.log(err);
    }
  }

  const submitAddress = async(address) => {
    try {
      const { data } = await axios.post(`${API_URL}`, {address})
      return(data)
    } catch(err) {
      console.log(err);
    }
  }
  // useEffect(() => { 
  //   fetchNasaInfo()
  // },[])

  return {
    address,
    setAddress,
    submitAddress
  }
}