/* eslint-disable @next/next/no-img-element */
import React from "react"
const Advertisement=()=>
    {
        return(
        <section id="cta" className="cta">
      <div className="container" data-aos="zoom-out">
        <div className="row g-5">

          <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <h3>LeT Talk Digital Marketing!</h3>
            <p>Ready to take your business to the next level with a digital strategy that works?
              Get in touch with us today via Email or WhatsAppTM</p>
            <div className="d-flex">
              <a className="m-2" href="https://wa.me/+447514098522"><img src="assets/img/whatsapp.svg" width="32px" alt="WhatsApp" /></a>
              <a className="m-2" href="mailto:support@jbqmedia.com"><img src="assets/img/email.svg" width="32px" alt="Email" /></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
            <div className="img">
              <img src="assets/img/talk.jpg" alt="" className="img-fluid" />
            </div>
          </div>

        </div>
      </div>
    </section>
        )
    }
    export default Advertisement