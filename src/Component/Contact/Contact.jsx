import React from 'react'
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import Footer from '../Footer/Footer';
import Navbar3 from "../Navbar3/Navbar3"
import Modal2 from './Modal2';
import Cform from './Cform';


const Contact = () => {

  return (
    <>
      <Navbar3 />
      
      {/* form */}
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-3">
              <div className="section-heading wow fadeIn" data-wow-duration="1s"
                data-wow-delay="0.5s">
                <h6 style={{color: "#151515;", fontFamily:"Poppins" , fontWeight:"800" }}>| Contact Us</h6>
                <h4 style={{fontFamily:"Poppins" , fontWeight:"700"}}>Get In Touch With Us Now!</h4>
                <h6 style={{fontFamily:"Mulish"}}>Have questions about our projects or services? Reach out to us now, and we'll respond promptly to assist you.</h6>

                <div className="line-dec" style={{ color: "#2f769c;" }}></div>
              </div>
            </div>
            <Cform />

          </div>
        </div>
      </div>
      {/*  */}


      {/*  */}
      <div className="m col-md-10 mx-auto mt-4">

      <Modal2 />
      </div>



      {/* foooter */}
      <div className="truck">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 jkhgkj">
              <div className="truck_img1">
                <img src={truck} alt="#" />
              </div>
            </div>
            <div className="col-md-6 hassaan">
              <div className="truck_img1">
                <img src={jcb} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />


    </>
  )
}


export default Contact