/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Header = () => (
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
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>
      {/* .navbar */}

      {/* <a className="btn-getstarted scrollto" href="index.html#about">Get Started</a> */}
    </div>
  </header>
);

export default Header;
