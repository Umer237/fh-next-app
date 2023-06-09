import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
<>
<div className='Footer'>
<Link href='/'>
<Image src='/img/FH.png' width='45' height='60' alt="logo"/>
</Link>
<h4>ONE STEP SOLUTION PROVIDER</h4>
<ul> 
    <li><Link href="/">HOME  </Link></li>
    <li><Link href="/pages/About">ABOUT </Link></li>
    <li><Link href="/pages/services"> SERVICES</Link>  </li>
    <li><Link href="/pages/contact"> CONTACT</Link> </li>
    <li><Link href="/pages/team">TEAM </Link> </li>
    <li><Link href="/pages/portfolio">PORTFOLIOS </Link> </li>
</ul>
<div className="Logos">
  <Link href='https://www.facebook.com/fhgroupofcompany'>
    <div className='Logo'>
<FaFacebookF/>
</div>
</Link>
<Link href='https://twitter.com/fhgroupoc'>
<div className='Logo'>
<FaTwitter/>
</div>
</Link>
<Link href='https://www.instagram.com/fhgroupofcompany/'>
<div className='Logo'>
<FaInstagram/>
</div>
</Link>
<Link href='https://www.linkedin.com/company/fhgroupoc/'>
<div className='Logo'>
<FaLinkedin/>
</div>
</Link>
</div>
<div className="Footer-End">
  <h5>Copyright © 2021 FH Group OF Companies Inc. All rights reserved. Privary Policy | Term of Use | Business and Reflect</h5>
</div>
</div>
</>
  )
}

export default Footer