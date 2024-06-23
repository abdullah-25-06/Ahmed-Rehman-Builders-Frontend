import Carousels from '../carousel/carousel/Carousels';
import Footer from '../Footer/Footer';
// import b1 from "./img/joel-filipe-RFDP7_80v5A-unsplash.jpg"
// import b2 from "./img/luke-stackpoole-KjvIaa_Q5rY-unsplash.jpg"
// import b3 from "./img/joshua-fuller-rLeb8DxMmik-unsplash.jpg"
// import b4 from "./img/valentyn-chernetskyi-jUP7m4Svtus-unsplash.jpg"
import truck from "./img/truck.png"
import jcb from "./img/jcb.png"
import property from "./img/icons8-property-100.png"
import house from "./img/icons8-houses-48.png"
import appartment from "./img/icons8-building-100.png"
import estate from "./img/icons8-construction-48.png"
import plot from "./img/icons8-ground-48.png"
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"
import Navbar3 from "../Navbar3/Navbar3"
import { useEffect, useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [TestimonialsData, setData] = useState([])
  useEffect(() => {
    async function apiCall() {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_DEVELOPMENT_URL}/contact/approvecomment`)
        // console.log(data)
        setData([...data])
      } catch (e) {
        console.log(e)
      }
    }
    apiCall()
  }, [])

  // const TestimonialsData = [
  //   {
  //     // image : profile1,
  //     name: "Diane Hurst",
  //     nam2: "IT sourcing Manager",
  //     comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
  //     // name: "John Alendon"
  //   },
  //   {
  //     // image : profile2,
  //     name: "Damein Cochran",
  //     nam2: "Sales Associate",
  //     comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
  //     // name: "Natasha"
  //   },
  //   {
  //     // image : profile1,
  //     name: "Sophia-Rose Butler",
  //     nam2: "Medical Assistant",
  //     comment: " >Wow! Worth much more than I paid. This report is the real deal! Thank you!",
  //     // name: "Alex Hormonzi"
  //   },
  //   {
  //     // image : profile1,
  //     name: "Diane Hurst",
  //     nam2: "IT sourcing Manager",
  //     comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
  //     // name: "John Alendon"
  //   },
  //   {
  //     // image : profile2,
  //     name: "Damein Cochran",
  //     nam2: "Sales Associate",
  //     comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
  //     // name: "Natasha"
  //   },
  //   {
  //     // image : profile1,
  //     name: "Sophia-Rose Butler",
  //     nam2: "Medical Assistant",
  //     comment: "Wow! Worth much more than I paid. This report is the real deal! Thank you!",
  //     // name: "Alex Hormonzi"
  //   }
  // ]




  return (
    <>
      <Navbar3 />
      <Carousels />
      {/* property type */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3">
                <h6 style={{ color: "black" }} className="text-uppercase"> | Services</h6>
                <h2 style={{ fontweight: "700", color: "black", fontFamily:"Poppins" }}>Pioneer Of Modern Building Company</h2>
              </div>
              <p className="mb-4"  style={{fontFamily:"Mulish"}}>Welcome to our estate marketing and building services! At our core, we specialize in property management, construction, and real estate solutions.</p>
              <NavLink style={{ background: "maroon", color: "white" }} to="/contact" className="btn  py-md-3 px-md-5">Talk Us Now</NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <img src={property} alt="" />
                <h4 style={{fontFamily:"Poppins"}}>Commercial Property</h4>
                <p className="mb-0"  style={{fontFamily:"Mulish"}}>Efficient commercial property management, optimizing assets.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <img src={house} style={{ width: "60px" }} alt="" />
                <h4  style={{fontFamily:"Poppins"}}>Houses</h4>
                <p className="mb-0"  style={{fontFamily:"Mulish"}}>Exemplary house building and construction services await.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <img src={plot} style={{ width: "80px" }} alt="" />
                <br />
                <h4  style={{fontFamily:"Poppins"}}>Plots</h4>
                <p className="mb-0"  style={{fontFamily:"Mulish"}}>Streamlining seamless plot sales and purchases.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <img src={estate} style={{ width: "70px" }} alt="" />
                <h4  style={{fontFamily:"Poppins"}}>Real Estate, Property & Construction</h4>
                <p className="mb-0"  style={{fontFamily:"Mulish"}}>We deliver excellence, from property acquisition to construction.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light text-center p-5">
                <img src={appartment} alt="" />
                <h4  style={{fontFamily:"Poppins"}}>Shops & Apartments</h4>
                <p className="mb-0" style={{fontFamily:"Mulish" }}>Find the perfect commercial or residential property to suit your lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* projects */}
      <div className="project_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="project_main">
                <h1 className="services_taital"  style={{fontFamily:"Poppins"}}>Your Dream Space
                  Our Passion</h1>
                <p className="services_text"  style={{fontFamily:"Mulish"}}>Ahmed & Rehman builders & developers are serving low-cost housing to their customers by conveying comforts and high-standard utilities to their clients. So, everyone can attain their dream house for themselves and turn their visions into reality with AR Builders. Ahmed & Rehman Builders & Developers are best construction company in Pakistan. We aim to facilitate luxurious and affordable housing services to our customers with comfort. So, avail this best opportunity to attain your dream house for yourself and turn your living desires into achievements with Ahmed & Rehman Builders & Developers in Pakistan.</p>
                <div className="moremore_bt">
                  
                  <NavLink target="_self" to="/about"  style={{fontFamily:"Poppins"}}>Read More </NavLink>
                  </div>
                {/* <div className="image_6"><img src={circle1}/></div> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="images_main">
                <div className="images_left">
                  <div className="container_1">
                    <img src="/joel-filipe-RFDP7_80v5A-unsplash.jpg" alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      {/* <h2 className="fact_text"></h2> */}
                    </div>
                  </div>
                  <div className="container_1">
                    <img src="/luke-stackpoole-KjvIaa_Q5rY-unsplash.jpg" alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">
                      {/* <h2 className="fact_text"></h2> */}
                    </div>
                  </div>
                </div>
                <div className="images_right">
                  <div className="container_1">
                    <img src="/joshua-fuller-rLeb8DxMmik-unsplash.jpg" alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">

                      {/* <h2 className="fact_text"></h2> */}
                    </div>
                  </div>
                  <div className="container_1">
                    <img src="/valentyn-chernetskyi-jUP7m4Svtus-unsplash.jpg" alt="Avatar" className="image" style={{ width: "100%" }} />
                    <div className="middle">

                      {/* <h2 className="fact_text"></h2> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about2*/}

      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <br />
                <h6 style={{ color: "black" }}> | Best Deal</h6>
                <h2 style={{ color: " rgb(167,12,24)", fontFamily: "Poppins", fontWeight: "900" }}>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper ">
                    <ul className="nav nav-tabs" role="tablist">
                      <li classname="nav-item" role="presentation">

                      </li>
                      <li classname="nav-item" role="presentation">

                      </li>
                      <li className="nav-item" role="presentation">
                      </li>
                    </ul>
                  </div>
                  <div classname="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-table">
                            <ul>
                              <li style={{fontFamily:"Poppins"}}>Total Space <span style={{fontFamily:"Poppins"}}>600 sqf</span></li>
                              <li style={{fontFamily:"Poppins"}}>Number of rooms <span style={{fontFamily:"Poppins"}}>5</span></li>
                              <li style={{fontFamily:"Poppins"}}>Parking Available <span style={{fontFamily:"Poppins"}}>Yes</span></li>
                              <button className="btn " href="/contact" style={{ background: "rgb(167,12,24)" , fontFamily:"poppin"}}><i style={{color:"white"}} className="fa fa-phone" > Call Now</i></button>
                              
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src="/AhmedRehman Project.jpeg" style={{ width: "100%", height: "50vh", borderRadius: "25px" }} alt="" />
                        </div>
                        <div className="col-lg-3">
                          <h4 style={{ fontSize: "18px", fontWeight: "700" , fontFamily:"Poppins"}}>Extra Info About Property</h4>
                          <p  style={{fontFamily:"Mulish"}}>This development prioritizes Resident comfort with advanced features. A high-speed elevator. A standby generator safeguards power during outages.A UPS guarantees uninterrupted corridor lighting and safety during fluctuations. American-style kitchens offer modern functionality, while imported fittings elevate the bathrooms' luxury.</p>
                          <div classNamename="icon-button">
                            <NavLink target="_self" style={{ color: "maroon" }} to="/project" ><i > See More</i></NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      {/* testimonials */}
      <div className="testimonials">
        <h3 h3 className="display-5 fw-bold " style={{ color: "rgb(167,12,24)", textAlign: "center", fontFamily: "Poppins" }}>What Our Client Say About Us</h3 >
        <br />
        <div className="wrapper1">
        </div>
        <div className="carousel2" >
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              546: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 4,
              },

            }}
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={20}
            className="t1Carousel">
            {
              TestimonialsData.map((testimonials, i) => (
                <SwiperSlide>
                  <div className="testimonial">


                    <span  style={{fontFamily:"Mulish" , color:"black"}}>{testimonials.comment}</span>
                    <hr />
                    <span  style={{fontweight:"700" ,fontFamily:"Poppins"}}>{testimonials.name}</span>

                  </div>
                </SwiperSlide>))
            }



          </Swiper>

        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="about-img position-relative overflow-hidden p-5 pe-0">
                <img className="img-fluid " style={{ width: "100%", height: "60vh" }} src="/AhmedRehman Project 2.jpeg" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4" style={{ fontFamily: "Poppins", fontWeight: "700", color: "maroon" }}>Join Us As We Bring Real Estate Visionaries To The Forefront.</h1>
              <p className="mb-4"  style={{fontFamily:"Mulish"}}>At Ahmed & Rehman Builders, we are a dynamic and multifaceted real estate firm committed to transforming your property dreams into reality. With a diverse portfolio of services, we cater to a wide spectrum of real estate needs:
              </p>
              <p style={{fontFamily:"Mulish"}}><i className="fa fa-check text-dark me-3"  ></i >Real Estate Expertise.</p>
              <p style={{fontFamily:"Mulish"}}s><i className="fa fa-check text-dark me-3" ></i >Construction and Development.</p>
              <p style={{fontFamily:"Mulish"}}s><i className= "fa fa-check text-dark me-3" ></i >Property Marketing.</p>



              <button className="btn" >
                <NavLink to="/about" >About us</NavLink></button>
            </div>
          </div>

        </div>
      </div>

      {/* map */}

      <div >
        <h3 h3 className="display-5 fw-bold " style={{ color: "rgb(167,12,24)", textAlign: "center", fontFamily: "Poppins" }}> Boasting A Superb Location</h3 >
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4" style={{ textAlign: "center", fontWeight: "400" ,fontFamily:"Poppins"}}>A Dream Real Estate Brand Packed With Potential and Results</p>

        </div>
        <div style={{ margin: "15px" }}>
          <div className="row featurette" style={{ display: "flex", flexwrap: "wrap;", alignItems: "center", justifyContent: "center" }}>
            <div className="col-md-6 col-sm-12 order-md-3" style={{ flex: "1 0 50%;" }}> <h1 className="featurette-heading lh-1" style={{ color: "rgb(167,12,24) ", fontweight: "800", textAlign: "center", fontFamily: "Poppins" }}>Visit us</h1>
              <p className="lead" style={{ fontsize: "18px", color: "black", textAlign: "center", fontWeight: "500", fontFamily:"Mulish" }}>
                CM-24 Gulistan e Rafi, Malir City, Karachi, Sindh, Pakistan </p>
            </div>
            <div className="col-md-5 col-sm-12 order-md-1" style={{ flex: "1 0 50%" }}>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7379905504937!2d67.18867214275399!3d24.876970359817253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1c6d30ea7%3A0x3034dc0ab3319dad!2sAhmed%20%26%20Rehman%20Builders%20%26%20Developers!5e0!3m2!1sen!2sus!4v1708529326069!5m2!1sen!2sus" style={{ border: "0", width: "100%", height: "60vh", boxshadow: "2px 2px lightgrey" }} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
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




export default Home