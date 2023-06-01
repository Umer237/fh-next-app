
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/Home.module.css'
import Banner from './pages/Banner'
import OurServices from './pages/OurServices'
import Chooseus from './pages/ChooseUs'
import OurTeam from './pages/OurTeam'
import Footer from './pages/Footer'
function index () {
  const handleOnClick = () => {
SetNavigate({HOME:'HOME', ABOUT: 'ABOUT', SERVICES: 'SERVICES', CONTACT: 'CONTACT', TEAM: 'TEAM', PORTFOLIOS: 'PORTFOLIOS'});
  }
const [navigate, SetNavigate] = useState({HOME:'HOME', ABOUT: 'ABOUT', SERVICES: 'SERVICES', CONTACT: 'CONTACT', TEAM: 'TEAM', PORTFOLIOS: 'PORTFOLIOS'})
  return (
  <>
     <div className="NavBar">
        <nav>
          <ul>      
                  <Link href='/'>
<Image src='/img/FH.png' width='45' height='60' alt="logo"/>
</Link>
<Link href={'/'}>
            <button onClick={handleOnClick}>
         {navigate.HOME}
            </button>
            </Link>
            <Link href={'/pages/about'}>
<button onClick={handleOnClick}>
{navigate.ABOUT}
</button>
</Link>
<Link href={'/pages/services'}>
<button onClick={handleOnClick}>
{navigate.SERVICES}
</button>
</Link>
<Link href={'/pages/contact'}>
<button onClick={handleOnClick}>
{navigate.CONTACT}
</button>
</Link>
<Link href={'/pages/team'}>
<button onClick={handleOnClick}>
 {navigate.TEAM}
</button>
</Link>
<Link href={'/portfolios'}>
<button onClick={handleOnClick}>
{navigate.PORTFOLIOS}
</button>
</Link>
          </ul>
        </nav>
      </div>
     <Banner/>
     <OurServices/>
     <Chooseus />
<OurTeam />
<Footer />
</>
  )
}

export default index