import React from "react";
// import styles from 'next/image'
import Image from "next/image";
import Link from "next/link";


const Banner = () => {
  return (
    
    <>
    <div className='Banner-BG'> </div> 

{/* <Image src='/img/BG.jpg' width='1897' height='900' /> */}
        <div className="Banner-Text">
        <h1>BRANDING</h1>
        <h2>unique and recongnizable</h2>
        <p>
          Identity that align with your business needs and are recognizable as
          “yours”. Essentially, these graphics will contains all the feature
          elements that are unique and recognizable for your business
        </p>
        <Link href='/pages/about'>
        <button>ABOUT US</button>
        </Link>
        </div>
       
    </>
  );
};

export default Banner;
