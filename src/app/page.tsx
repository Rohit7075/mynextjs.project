

"use client";
import { useEffect } from 'react';
import aos from '../../public/assets/vendor/aos/aos'
import Link from 'next/link';
import Header from './header/page';
import About from "./about/page"
import Hero from "./hero/page"
import Advertisement from "./advertisement/page"
import Target from "./target/page"
import Services from "./services/page"
import Focus from "./focus/page"
import Faq from "./faq/page"
import Footer from "./footer/page"
import Contact from "./contact/page"





export default function Home () {
    useEffect (() => {
        aos.init();
    },[])
    return (
        <>
        
         <Header/>
         <Hero/>
         <Target/>
         <About/>
         <Advertisement/>
         <Focus/>
         <Services/>
         <Faq/>
         <Contact/>
      
         <Footer/>
       

        <Link href='#' id='back-to-top' className='back-to-top d-flex align-items-center justify-content-center'>
                <i className='bi bi-arrow-up-short'></i>
            </Link>
            </>
     
    )
}