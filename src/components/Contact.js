import React from "react";
import '../styles/contact.css'
import phoneImage from '../images/phone.png'

import contactData from '../data/socialData'

const Contact = () => {
    const renderedSocial = contactData.map((social) => {
        return (
            <div className="social-media">
                <img src={`${process.env.PUBLIC_URL}/images/${social.icon}`} alt="" />
                <p>{social.text}</p>
            </div>
        )
    })
    return ( 
        <div className="contact">
            <h1 className="main-h1">Kontakt</h1>
            <div className="social-media-container">
                {renderedSocial}
            </div>
            <img src={phoneImage} alt="" className="phones-image" />
        </div>
     );
}
 
export default Contact;