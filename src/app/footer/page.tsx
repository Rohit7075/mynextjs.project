import React from 'react';
import NewsLetter from '../newsletter/page';

const Footer = () => {
    return (
        <footer id="footer" className="footer"   style={{backgroundColor:"#3944BC"}}>
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h4>JBQ Media</h4>
                                <p>
                                    1 the chestnuts, Henley-on-Thames, <br />
                                    Oxfordshire, United Kingdom. RG93JZ. <br /><br />
                                    <strong>Phone:</strong><a href="tel:+447746985415" className="text-white"> +44 7746985415 </a> <br />
                                    <strong>Phone:</strong><a href="tel:+447514098522" className="text-white"> +44 7514098522</a> <br />
                                    <strong>Email:</strong> <a href="mailto:support@jbqmedia.com" className="text-white">
                                        support@jbqmedia.com</a><br />
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="/" className="text-white">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/#about" className="text-white">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="/#services" className="text-white">Services</a></li>
                                {/* <li><i className="bi bi-chevron-right"></i> <a href="/industries" className="text-white">Industries</a></li> */}
                                <li><i className="bi bi-chevron-right"></i> <a href="#" className="text-white">Privacy policy</a></li>
                            </ul>
                        </div>

                        {/* Uncomment if needed
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Partner</h4>
                            <h4>Ideation People Solution Pvt. Ltd.</h4>
                            <p>Pune, India.</p>
                        </div>
                        */}

                        <div className=" col-md-7 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Stay informed and never miss out on the latest updates with our newsletter subscription</p>
                           
                            Ensure Newsletter component is defined and imported */}
                             <NewsLetter />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                    <div className="d-flex flex-column align-items-center align-items-lg-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>JBQ Media</span></strong> All Rights Reserved.
                        </div>
                    </div>

                    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
                        <a href="https://www.linkedin.com/in/james-johnson-benedict-wood-417890287/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61552950440491" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/jbqmediaco/" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="https://twitter.com/JBQmediaco" className="google-plus"><i className="bi bi-twitter-x"></i></a>
                        <a href="https://wa.me/+447514098522" className="twitter"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
