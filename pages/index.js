
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/Home.module.css'
import Home from "./pages/Home";
import About from './pages/About'

function index () {

const [navigate, SetNavigate] = useState('')


const handleOnClick = () => {
  SetNavigate(<About/>)
}
  return (
  <>
     <div className="NavBar">
        <nav>
          <ul>      
<Image src='/img/FH.png' width='45' height='60' alt="logo"/>
<button onClick={handleOnClick}>HOME</button>
<button onClick={handleOnClick}>ABOUT</button>
<button onClick={handleOnClick}>SERVICES</button>
<button onClick={handleOnClick}>CONTACT</button>
<button onClick={handleOnClick}>TEAM</button>
<button onClick={handleOnClick}>PORTFOLIOS</button>
          </ul>
        </nav>
      </div>
   <Home value={navigate}/>
</>
  )
}

export default index