import React from 'react'
import Link from 'next/link';
import { GoGraph} from 'react-icons/go';
import { BiBulb} from 'react-icons/bi';
import { SlFilm} from 'react-icons/sl';
import { BsMegaphone} from 'react-icons/bs';
import { BsLaptop} from 'react-icons/bs';
import { CiMobile3} from 'react-icons/ci';

const OurServices = () => {
  return (
    <>
    <div className='Services-Top-Text'>
    <h2>OUR SERVICES</h2>
    </div>
    <div className="First-row">
      <Link href={'/pages/Services/BrandStrategy'}>
      <div className='Box-1'> <div className="Icons">
        <GoGraph/>
        </div>
      <h3>Brand Strategy</h3>
      <p>Your brand strategy defines what you stand for, a promise you make, and the personality you convey.</p>
      </div>
      </Link>
      <Link href={'/pages/Services/CreativeContent'}>
      <div className='Box-1'> <div className="Icons">
        <BiBulb/>
        </div>
        <h3>Creative Content</h3>
        <p>Creativity, Branding and Content are the most important ingredients for the success of any business. </p>
      </div>
      </Link>
      <Link href={'/pages/Services/Development'}>
      <div className='Box-1'> <div className="Icons">
        <BsLaptop/>
        </div>
        <h3>Development</h3>
        <p>Development is a process that creates growth, progress, positive change or the addition of physical, economic, environmental</p>
      </div>
      </Link>
    </div>
    <div className="Second-row">
      <Link href={'/pages/Services/Production'}>
      <div className='Box-1'> 
        <div className="Icons">
        <SlFilm/>
        </div>
      <h3>Production</h3>
      <p>The Electronic Media Production program is designed to meet the changing needs of the audio-visual industry in a digital format.
</p>
      </div>
      </Link>
      <Link href={'/pages/Services/OutdoorMarketing'}>
      <div className='Box-1'>
         <div className="Icons">
        <BsMegaphone/>
        </div>
        <h3>Outdoor Marketing</h3>
        <p>Outdoor marketing refers to advertising campaigns that employ outdoor media such as billboards, transit vehicles  </p>
      </div>
      </Link>
      <Link href={'/pages/Services/SocialMedia'}>
      <div className='Box-1'>
         <div className="Icons">
        <CiMobile3/>
        </div>
        <h3>Social Media</h3>
        <p>The Electronic Media Production program is designed to meet the changing needs of the audio-visual industry in a digital format.
</p>
      </div>
      </Link>
    </div>
    
    <Link href='/pages/services'>
    <div className='Services-Btn'>
      <button>VIEW ALL</button>
    </div>
    </Link>
    </>
  )
}

export default OurServices