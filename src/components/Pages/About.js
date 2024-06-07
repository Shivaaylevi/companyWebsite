import React from 'react'
import img from "../../Image/about.webp";
import "./About.css"
import Aboutimg1 from "../../Image/001.jpg" 
import Aboutimg2 from "../../Image/002.webp" 
import Aboutimg3 from "../../Image/003.png" 
// import Modal from '../Model/Model';
import "../Model/Model.css"
import Footer from './Footer';
const About = () => {

  return (
    <>
    <div className='abouut'>
      <div className='about-header'>
      <img className='about-img' src={img} alt='img'/>
      <div className='about-img-content'>
        <h1>ABOUT US</h1><br/><br/>
        <p>We are technology entrepreneurs who thrive on challenges and enjoy overcoming them to succeed.</p>
      </div>
      {/* <div className='about-main about-cont'>
      <Modal className="about-main1" />
      <Modal className="about-main2"/>
      <Modal className="about-main3"/> 
      </div>*/}


      <div className="about-cont">
      <div className="section-container">
         <div className="columns image">
          <img className='abou-img1' src={Aboutimg1} alt='img'/>
         </div>
         <div className="columns content">
            <div className="content-container">
               <h5>WHY EMBEDDEDVISIONS</h5>
               <p>
               We have the infrastructure expertise and know-how to build a product quickly and economically clearing the hurdles you may face in its development. Like We are technology entrepreneurs who thrive on challenges and enjoy overcoming them to succeed. While you focus on creating your product market strategy we will take care of the rest! Our collaborative approach will allow you to concentrate on your core business while we build a product that offers you a competitive advantage. We will manage all product development activities and seamlessly integrate them with your operations. Our partnership ensures that your product gets to market faster and more cost-effectively
               </p>
               <p>
               To achieve our goal, we worked with a number of institutions and firms.EmbeddedVisions deals in three different domains, first is development second is industrial automation and third is education.
               </p>
            </div>
         </div>
      </div>
      <div className="section-container">
         <div className="columns content">
            <div className="content-container">
               <h5>WHAT WE DO</h5>
               <p>
               EmbeddedVisions was founded in 2011. we provide Training Solution and software R&D services helping large technology businesses design develop and test innovative software. A singular focus on technology an agile approach and a culture of innovation have enabled us to create highly scalable software products for our clients. In this way We enable our clients to address the changing needs of their customers and build loyalty by delivering value.firms.EmbeddedVisions deals in three different domains first is development second is industrial automation and education.
               </p>
               <p>
               EmbeddedVisions Company deals in the field of Hardware Development Embedded Products Development Security & SurveillanceIOT(Internet on Things). Our aim and missions are which is working for the promotion of latest technologies in India & Abroad. To achieve our goal we worked with a number of institutions and firms.EmbeddedVisions deals in three different domains first is development second is industrial automation and third is education
               </p>
            </div>
         </div>
         <div className="columns image"  >
         <img className='abou-img2' src={Aboutimg2} alt='img'/>
         </div>
      </div>
      <div className="section-container">
         <div className="columns image"  >
         <img className="abou-img1" src={Aboutimg3} alt='img'/>
         </div>
         <div className="columns content">
            <div className="content-container">
               <h5>OUR TEAM</h5>
               <p>
               Up to 20 professional are associated with us in the area of Devlopment,Architect,Testing,SPEG Graoup!
               </p>
               <p>
               Having successfully delivered over Linux/8051 based hundreds of projects and cutting-edge services. We have emerged as a strong and preferred partner to our vast client base that includes large global technology companies. Whether it is taking on the development of a specific product or creating a team dedicated to a clients requirements.We work closely and collaboratively with our clients and meeting their unique needs. At every level We do what it takes to enhance the experience of your customer and provide a value add. We are a strategic partner to organizations across a wide range of industry verticals and segments including digital media telecommunications healthcare financial services supply chain management and workforce management.
               </p>
            </div>
         </div>
      </div>
      </div>
</div>
 <section>
    <Footer/>
  </section>
</div>
   
    </>
  )
}

export default About