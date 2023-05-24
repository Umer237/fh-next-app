import React from "react";

import Image from "next/image";
// import '../pages/Header.css'

const Header = () => {
  return (
    <>
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">SERVICES</a>
            </li>
<Image src='/img/FH.png' width='45' height='60' alt="logo"/>
            <li>
              <a href="/">CONTACT</a>
            </li>
            <li>
              <a href="/">TEAM</a>
            </li>
            <li>
              <a href="/">PORTFOLIOS</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
