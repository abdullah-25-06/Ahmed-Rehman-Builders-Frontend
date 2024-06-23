import React, { useRef } from 'react'
import phoneno from "../Contact/images-removebg-preview.png"
import email from "../Contact/images__1_-removebg-preview.png"
import whats from "./R.jpg"
import axios from 'axios'



const Cform = () => {
  const name = useRef()
  const email1 = useRef()
  const phone = useRef()
  const desc = useRef()

  const formHandler = async () => {
    const name_ref = name.current.value
    const phone_ref = phone.current.value
    const email_ref = email1.current.value
    const desc_ref = desc.current.value
    if (!name_ref || !phone_ref || !email_ref || !desc_ref) return alert('Fill all form fields')
    try {
      await axios.post(`${process.env.REACT_APP_DEVELOPMENT_URL}/contact/addcontact`, {
        name: name_ref,
        phoneno: phone_ref,
        email: email_ref,
        desc: desc_ref
      }, {
        headers: {
          "content-type": "application/json"
        }
      })
      alert("Details Submitted")
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s"
            data-wow-delay="0.25s">
            <form id="contact" >
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-dec">
                  </div>
                </div>
                <div className="col-lg-5">
                  <div id="map" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "80vh", boxshadow: "30px 30px 5px lightgrey" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                    {/* <h2>How Can We Help You?</h2>
                    <span style={{}}>You can contact us anytime through calls or messages. You can also visit our offices easily anytime. We deliver our best professional possibilities to reply to all questions within one day during the working days
                    </span> */}
                    {/* <img src={img1} alt="" /> */}
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="fill-form">
                    <div className="row">
                      <div
                        className="col-lg-4">
                        <div
                          className="info-post">
                          <div
                            className="icon">
                            <img src={phoneno}
                              alt="" />
                            <a style={{ fontFamily: "Mulish" }} href='/#'>0312-0288620<br />0300-2288544</a>

                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-4">
                        <div
                          className="info-post">
                          <div
                            className="icon">
                            <img src={email}
                              alt="" />
                            <a href='/#'
                              style={{ fontFamily: "Mulish", fontSize:"12.5px" }}>arbuilderndeveloper@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-4">
                        <div
                          className="info-post">
                          <div
                            className="icon">
                            <img src={whats}
                              alt="" />
                            {/* <a href="#">CM-24 Gulistan e Rafi Malir City Karachi</a> */}
                            <a style={{ fontFamily: "Mulish" }} href='/#'>0315-8058848<br />0300-0288620</a>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-6">
                        {/* <fieldset> */}

                        <input type="name"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          autocomplete="on"
                          ref={name}
                          required />
                        {/* </fieldset> */}
                        {/* <fieldset> */}

                        <input type="text"
                          name="email"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="Your Email"
                          ref={email1}
                          required="" />
                        {/* </fieldset> */}
                        {/* <fieldset> */}
                        <input type="subject"
                          name="subject"
                          id="subject"
                          placeholder="Phone no"
                          ref={phone}
                          autocomplete="on" />
                        {/* </fieldset> */}
                      </div>
                      <div
                        className="col-lg-6">
                        {/* <fieldset> */}
                        <textarea name="message"
                          type="text"
                          classname="form-control"
                          id="message"
                          placeholder="Your Message"
                          ref={desc}
                          required=""></textarea>
                        {/* </fieldset> */}
                      </div>
                      <div
                        className="col-lg-12">
                        {/* <fieldset> */}
                        <button type="button"
                          onClick={formHandler}
                          id="form-submit"
                          className="main-button " style={{ fontFamily: "Poppins" }}>Send
                          Message
                          Now</button>
                        {/* </fieldset> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}


export default Cform;