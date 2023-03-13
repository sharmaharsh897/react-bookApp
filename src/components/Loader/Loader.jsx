import React from 'react';
import LoaderImg from "../../images/loader.gif";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex felx-c'>
        <img src='{LoaderImg}' alt= "loading"/>
    </div>
  )
}

export default Loader