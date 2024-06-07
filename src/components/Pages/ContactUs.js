import React from 'react'
import "./Contact.css"
import img1 from "../../Image/location.png"
import img2 from "../../Image/email.png"
import ContactInfo from './ContactInfo'
import Footer from './Footer'
const ContactUs = () => {
  return (
    <>
    <section className='contact-header'>
    <div className='contact-content'>
    <h1>Talk with Us</h1>
    <p>Talk, chat or email the experts to give your brand superior quality tailored </p>
    </div>
    </section>

    <section>
    <h1 className='conth'>Connect With Us</h1>
    <div className='contact-imgs'>
      <div className='contact-img'>
     
      <a href='https://maps.app.goo.gl/Br2665K3FmgqA3Ai7'>
      <img src={img1} alt='img1'/>
      <p>Location</p></a>
      <h6>Indore, Madhya Pradesh</h6>
      </div>
      <div className='contact-img'>
      <img src={img2} alt='img2'/>
      <p>Email</p>
      <h6>embeddedvision@gmail.com</h6>
      </div>
    </div>
    </section>

<section>
    <div className='contact-detail'>
    <ContactInfo/>
    </div>
    </section>
  
  <section>
    <Footer/>
  </section>
   </>
  )
}

export default ContactUs