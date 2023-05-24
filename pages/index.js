import Header from './pages/Header'
import Banner from './pages/Banner'
import OurServices from './pages/OurServices'
import Chooseus from './pages/ChooseUs'
import { Inter } from 'next/font/google'
import OurTeam from './pages/OurTeam'
import Footer from './pages/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Header/>
     <Banner/>
     <OurServices/>
     <Chooseus/>
<OurTeam/>
<Footer/>
    </>
  )
}
