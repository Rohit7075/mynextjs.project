'use client'
import React, { useState } from 'react';
import { db } from '../../../fireBaseConfig';
import { collection, addDoc } from "firebase/firestore";

async function addDataToFireStore (name: string, email: string, subject: string, message: string) {
    try {
      const docRef = await addDoc(collection(db, "contact"), {
        name: name,
        email: email,
        subject: subject,
        message: message,
       
      });
      console.log("Document written with ID: ", docRef.id)
      return true;
    } catch (error) {
      console.error("Error adding document ", error)
      return false;
    }
  }

const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const added = await addDataToFireStore(name, email, subject,message);
      if (added) {
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      
        alert("Data added to firestore DB!!")
      }
    };
  
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p>Let talk ideas..</p>
                </div>

            </div>

            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.23834351253!2d-0.8917253228987316!3d51.50884317181371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487685864a7f06d1%3A0xf14f76591aed6619!2s1%20The%20Chestnuts%2C%20Shiplake%2C%20Lower%20Shiplake%2C%20Henley-on-Thames%20RG9%203JZ%2C%20UK!5e0!3m2!1sen!2sin!4v1710780967220!5m2!1sen!2sin"
                    width="600" height="450" style={{ border: '0' }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="container">

                <div className="row gy-5 gx-lg-5">

                    <div className="col-lg-4">

                        <div className="info">
                            <h3>Get in touch</h3>
                            <p>Kindly fill-up this form.</p>

                            <div className="info-item d-flex">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h4>Location:</h4>
                                    <p>
                                        1 the chestnuts, Henley-on-Thames, <br />
                                        Oxfordshire, United Kingdom. RG93JZ </p>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h4>Email:</h4>
                                    <a href="mailto:support@jbqmedia.com">support@jbqmedia.com</a>
                                </div>
                            </div>

                            <div className="info-item d-flex">
                                <i className="bi bi-phone flex-shrink-0"></i>
                                <div>
                                    <h4>Call:</h4>
                                    <a href="tel:+447746985415"> +44 7746985415 </a> <br />
                                    <a href="tel:+447514098522"> +44 7514098522 </a> <br />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-8">
                        <form  className="php-email-form" onSubmit={handleSubmit}  >
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required   value={name}   onChange={e => {setName(e.target.value)}}  />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required    value={email}  onChange={e => {setEmail(e.target.value)}} />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required  value={subject}   onChange={e => {setSubject(e.target.value)}}/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message"  id='message' placeholder="Message" required  value={message}
                    onChange={e => {setMessage(e.target.value)}} ></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit"  style={{backgroundColor:"#3944BC"}}>Send Message</button></div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;
