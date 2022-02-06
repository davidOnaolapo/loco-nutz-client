import {useState, useEffect} from "react";
import { BASE_URL, API_KEY, END_POINT } from "../helpers/constants";
import axios from 'axios';

import { API_URL } from "../helpers/constants"

const LOADING = "LOADING"

export default function useApplicationData () { 
  const [nasaInfo, setNasaInfo] = useState({});
  
  const fetchNasaInfo = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/${END_POINT}&api_key=${API_KEY}`)
      setNasaInfo(data)    
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => { 
    fetchNasaInfo()
  },[])

  return {
    nasaInfo,
    setNasaInfo
  }
}