import { useState, useRef } from 'react';
import style from './Home.module.css'
import Cropper from "react-easy-crop";
import imageCompression from 'browser-image-compression';



const Home=()=> {
 
    const [value, setValue] = useState(0)

    return (
      <div style={{display: 'flex', height: 500, margin: 'auto', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={()=>setValue(prev=>prev+1)}> + </button>
        <button onClick={()=>setValue(prev=>prev-1)}> - </button>
        <button> {value} </button>
  
      </div>
    )
  }
  
  export default Home
  