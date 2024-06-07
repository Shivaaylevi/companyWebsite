import React from "react";
import "./Services.css";
import Intern from "../../Image/intern.webp";
import ITSol from "../../Image/itsol.jpg";
import servic from "../../Image/service.jpg";
import Footer from "./Footer";
import automotive from "../../Image/automotive.jpg";
import healthcare from "../../Image/healthcare.jpg";
import iotcloud from "../../Image/iotcloud.jpg";
import Modal from "../Model/Model";
const Services = () => {
  return (
    <div className="serv">
      <div className="about-header">
        <img className="about-img" src={servic} alt="img" />
        <div className="about-img-content">
          <h1>SERVICES</h1>
          <br />
          <br />
          <p>IT PROFESSIONAL INTERNSHIPS</p>
          <p>IOT & CLOUD</p>
        </div>
        {/* <div className='about-main about-cont'>
      <Modal className="about-main1" />
      <Modal className="about-main2"/>
      <Modal className="about-main3"/> 
      </div>*/}

        <div className="about-cont">
          <div className="section-container">
            <div className="columns image">
              <img className="abou-img1" src={Intern} alt="img" />
            </div>
            <div className="columns content">
              <div className="content-container">
                <h5>IT PROFESSIONAL INTERNSHIPS</h5>
                <p>
                  EmbeeddedVisions end goal is to provide our expertise to
                  create best-in-class learning experience. Our hands-on
                  training "Embedded Linux" programs targeted for freshers,
                  corporates and colleges is making an impact in the industry
                  today. Our innovative self learning kits are designed to make
                  new technology learning easier and joyful. All of these come
                  from a team of highly motivated individuals with hands-on
                  experience in various technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="columns content">
              <div className="content-container">
                <h5>IT SOLUTION</h5>
                <p>
                  We have the infrastructure expertise and know-how to build a
                  product quickly and economically clearing the hurdles you may
                  face in its development. Like you we are technology
                  entrepreneurs who thrive on challenges and enjoy overcoming
                  them to succeed.
                </p>
                <p>
                  We have the infrastructure expertise and know-how to build a
                  product quickly and economically clearing the hurdles you may
                  face in its development. Like you we are technology
                  entrepreneurs who thrive on challenges and enjoy overcoming
                  them to succeed.
                </p>
              </div>
            </div>
            <div className="columns image">
              <img className="abou-img2" src={ITSol} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="workingarea">
        <h1>Our Working Areas</h1>
        <div className="ourWorkingAreas">
          <div className="ourWorkingArea">
            <div className="serviceimg">
              <img src={automotive} alt="" />
            </div>
            <div className="serviceModel">
              <Modal className="serviceModel" heading="AUTOMOTIVE INFOTAINMENT ADAS TELEMATICS" paragraph="The automotive market is driving growth in telematics, infotainment systems and advanced driver-assistance systems (ADAS). Telematics applications include GPS navigation, integrated hands-free calling and wireless safety.Infotainment applications integrate audio, visual and media entertainment systems into vehicles. ADAS applications include automatic cruise control and anti-collision radar." />
            </div>
          </div>
          <div className="ourWorkingArea">
            <div className="serviceimg">
            <img  src={healthcare} alt="" />
            </div>
            <div className="serviceModel">
            <Modal className="serviceModel" heading="HEALTHCARE PATIENT MONITOR VITAL MONITORING" paragraph="patient monitors provide access to exhaustive, actionable patient information and connect teams across care settings. They facilitate early diagnosis, accelerate care delivery and prompt intervention and enable informed, thoughtful decision making. IntelliVue and SureSigns patient monitors perform consistently and dependably in a range of environments." />
            </div>

          </div>
          <div className="ourWorkingArea">
          <div className="serviceimg">
          <img className="serviceimg" src={iotcloud} alt="" />
          </div>
          <div className="serviceModel">
          <Modal className="serviceModel" heading="IOT & CLOUD" paragraph="
Cloud IoT is a technology architecture that connects IoT devices to servers housed in cloud data centers. This enables real-time data analytics, allowing better, information-driven decision making, optimization, and risk mitigation. Cloud IoT also simplifies management of connected devices at-scale.An IoT cloud is a massive network that supports IoT devices and applications." />
          </div>
          </div>
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Services;
