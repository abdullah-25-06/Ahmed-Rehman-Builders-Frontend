import React, { useContext, useRef } from 'react'
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import Footer from '../Footer/Footer'
import Navbar3 from "../Navbar3/Navbar3"
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth'

const Login1 = () => {
  const ctx = useContext(AuthContext);
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const FormHandle = async (e) => {
    if (counter < 0) {
      counter++;
    } else {
      document.getElementById("form-submit").disabled = true;
    }
    e.preventDefault();
    const email_val = email.current.value;
    const password_val = password.current.value;
    if (!email_val || !password_val) {
      return alert("Enter both Email and Password");
    }
    const val = await ctx.onLogin(email_val, password_val);
    if (val.status === 404) {
      document.getElementById("form-submit").disabled = false;
      return alert(val.msg);
    }
    alert(val.msg);
    navigate("/Dashboard");
  };
  var counter = 0;
  return (
    <>
      <Navbar3 />
      <div className="contact-page section" style={{ width: "90%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <br />
                <h4>|LOGIN FORM </h4>
              </div>

            </div>
            <div classame="col-lg-6">
              <form id="contact-form" onSubmit={FormHandle}>
                <div className="row">

                  <div className="col-lg-10">
                    {/* <fieldset> */}
                      <label for="email">Email Address</label>
                      <input type="text" ref={email} name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                    {/* </fieldset> */}
                  </div>

                  <div className="col-lg-10">
                    {/* <fieldset> */}
                      <label for="password">Password</label>
                      < input ref={password} type="password" name="password" id="password" placeholder="Your Password"></input>
                    {/* </fieldset> */}
                  </div>
                  <div classaNme="col-lg-6">
                    {/* <fieldset> */}
                      <button type="submit" id="form-submit" classname="orange-button">login</button>
                    {/* </fieldset> */}
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>


      {/* truck */}
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

export default Login1