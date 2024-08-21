/* eslint-disable @next/next/no-img-element */
'use client'
import React,{useEffect} from 'react';
import Link from 'next/link';
import { useAuth } from '../context/authContext';

const Header = () => {

  useEffect(() => {
    const select = (selector: string, all = false): HTMLElement | HTMLElement[] | null => 
      all ? Array.from(document.querySelectorAll(selector)) as HTMLElement[] : document.querySelector(selector) as HTMLElement;

    const mobileNavToggleBtn = select(".mobile-nav-toggle") as HTMLElement;
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", () => {
        const navbar = select("#navbar") as HTMLElement;
        if (navbar) {
          navbar.classList.toggle("navbar-mobile");
        }
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      });
    }

    let navbarlinks = select('#navbar .scrollto', true) as HTMLElement[];
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        const anchor = navbarlink as HTMLAnchorElement;
        if (!anchor.hash) return;
        const section = document.querySelector(anchor.hash) as HTMLElement;
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          anchor.classList.add('active');
        } else {
          anchor.classList.remove('active');
        }
      });
    };



    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    const dropdowns = select('.navbar .dropdown > a', true) as HTMLElement[];
    if (dropdowns) {
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
          if ((select('#navbar') as HTMLElement).classList.contains('navbar-mobile')) {
            e.preventDefault();
            (dropdown.nextElementSibling as HTMLElement).classList.toggle('dropdown-active');
          }
        });
      });
    }

    const scrollto = (el: string) => {
      const header = select('#header') as HTMLElement;
      const offset = header.offsetHeight;
      const elementPos = (select(el) as HTMLElement).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      });
    };

    const scrollLinks = select('.scrollto', true) as HTMLElement[];
    if (scrollLinks) {
      scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          if ((select('#navbar') as HTMLElement).classList.contains('navbar-mobile')) {
            (select('#navbar') as HTMLElement).classList.remove('navbar-mobile');
            mobileNavToggleBtn.classList.toggle("bi-list");
            mobileNavToggleBtn.classList.toggle("bi-x");
          }
          if ((link as HTMLAnchorElement).hash) {
            e.preventDefault();
            scrollto((link as HTMLAnchorElement).hash);
          }
        });
      });
    }
    
    return () => {
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
    };
  }, []);

  const { user, userName, logout } = useAuth()

return (

  // header from here
  <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">
      <Link href="/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <img src="/assets/img/logo.jpg" alt="JBQ Media" className="mx-3" />
      </Link>

      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link href="/" className="nav-link scrollto">Home</Link>
          </li>
          <li>
            <Link href="/#about" className="nav-link scrollto">About</Link>
          </li>
          <li>
            <Link href="/#ourservices" className="nav-link scrollto">Services</Link>
          </li>
          {/* <li><Link href="/#clients" className="nav-link scrollto">Clients</Link></li> */}
          <li>
            <Link href="/#team" className="nav-link scrollto">Team</Link>
          </li>
          {/* <li className="dropdown">
            <Link href="/industries" className="nav-link"><span>Industries</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link href="/industries/dentistry">Dentistry</Link></li>
              <li><Link href="/industries/chiropractic">Chiropractic</Link></li>
              <li><Link href="/industries/dermatology">Dermatology</Link></li>
            </ul>
          </li> */}
          {/* <li><Link href="/blog.html">Blog</Link></li> */}
          <li>
            <Link href="/#contact" className="nav-link scrollto">Contact</Link>
          </li>
          <li>
            <Link href="/login" className="nav-link scrollto">Login</Link>
          </li>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>
      {/* .navbar */}

      {/* <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a> */}
    </div>
  </header>
)
}


export default Header;
