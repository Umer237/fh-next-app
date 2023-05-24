import React from "react";
import logo from '../pages/img/BG.jpg';
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
           <logo
          
           />
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
