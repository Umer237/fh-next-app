import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Home.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Services from "./pages/Services";
function index() {
  const [page2, SetPage2] = useState(<Home />);
  const [page1, SetPage] = useState("");
  const handleOnClick = () => {
    SetPage2(<About />);
  };
  const handleupClick = () => {
    SetPage(<Services />);
  };
  return (
    <>
      <div className="NavBar">
        <nav>
          <ul>
            <Image src="/img/FH.png" width="45" height="60" alt="logo" />
            <button>HOME</button>
            <button onClick={handleOnClick}>ABOUT</button>
            <button onClick={handleupClick}>SERVICES</button>
            <button>CONTACT</button>
            <button>TEAM</button>
            <button>PORTFOLIOS</button>
          </ul>
        </nav>
      </div>
      {page2}
      {/* <Home value={page1} /> */}
      {/* <Footer/> */}
    </>
  );
}

export default index;
