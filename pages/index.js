import React from 'react'
import '../styles/Home.module.css'
import Header from './pages/Header'
import Banner from './pages/Banner'
import OurServices from './pages/OurServices'
import Chooseus from './pages/ChooseUs'
import OurTeam from './pages/OurTeam'
import { motion, useScroll } from "framer-motion"
import Footer from './pages/Footer'
function index () {
  const { scrollYProgress } = useScroll();

//   let a = 'Harry'
//   let b = 6
// console.log(a+b)
  
// console.log(typeof a+b)

// const a = {
//   name: 'Harry'
//   section: 1,
//   isPrincipal:false
// }

// a = 54

  return (
  <>


<motion.div  className="progress-bar" style={{ scaleX: scrollYProgress }} />  





     <Header/>
     <Banner/>
     <OurServices/>
     <Chooseus/>
<OurTeam/>
<Footer/>
</>
  )
}

export default index