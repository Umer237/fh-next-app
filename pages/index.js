
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
SetNavigate('Banner');
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
            <button value={SetNavigate} >
              {navigate.HOME}
            </button>
<button>
{navigate.ABOUT}
</button>
<button>
  {navigate.SERVICES}
</button>
<button>
  {navigate.CONTACT}
</button>
<button>
  {navigate.TEAM}
</button>
<button>
  {navigate.PORTFOLIOS}
</button>
          </ul>
        </nav>
      </div>
     <Banner />
     <OurServices />
     <Chooseus />
<OurTeam />
<Footer />
</>
  )
}

export default index