import React from "react";
import Link from "next/link";

import Image from "next/image";
// import '../pages/Header.css'

const Header = () => {
  return (
    <>
      <div className="NavBar">
        <nav>
          <ul>
     <li>
            <Link href="/">
              HOME
            </Link>
            </li>
            <li>
            <Link href="/pages/about">
              ABOUT
            </Link>
            </li>
<li>
            <Link href="/pages/services">
              SERVICES
            </Link>
            </li>
<Image src='/img/FH.png' width='45' height='60' alt="logo"/>
            <li>
            <Link href="/pages/contact">
              CONTACT
            </Link>
            </li>
            <li>
            <Link href="/pages/team">
              TEAM
            </Link>
            </li>
            <li>
            <Link href="/portfolios">
              PORTFOLIOS
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
