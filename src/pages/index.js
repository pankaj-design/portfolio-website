import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Bootstrapnav from './bootstrapnav'
import Home from './home'
import Skill from './skill'
import Projects from './projects'
import Footer from './footer'




// const inter = Inter({ subsets: ['latin'] })



const index = () => {
  return (
    <div>
<Bootstrapnav/>
<Home/>
<Projects/>
<Skill/>
<Footer/>
    </div>
  )
}

export default index
