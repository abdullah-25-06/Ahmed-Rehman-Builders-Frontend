import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import about from "../Home/img/about.png"
// import Background1 from "../Home/img/alice-donovan-rouse-tMHAmxLyzvA-unsplash.jpg"
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"
import Navbar3 from "../Navbar3/Navbar3"
import axios from 'axios';


export const About = () => {
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
    //     {
    //         // image : profile1,
    //         name: "Diane Hurst",
    //         nam2: "IT sourcing Manager",
    //         comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
    //         // name: "John Alendon"
    //     },
    //     {
    //         // image : profile2,
    //         name: "Damein Cochran",
    //         nam2: "Sales Associate",
    //         comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
    //         // name: "Natasha"
    //     },
    //     {
    //         // image : profile1,
    //         name: "Sophia-Rose Butler",
    //         nam2: "Medical Assistant",
    //         comment: " >Wow! Worth much more than I paid. This report is the real deal! Thank you!",
    //         // name: "Alex Hormonzi"
    //     },
    //     {
    //         // image : profile1,
    //         name: "Diane Hurst",
    //         nam2: "IT sourcing Manager",
    //         comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
    //         // name: "John Alendon"
    //     },
    //     {
    //         // image : profile2,
    //         name: "Damein Cochran",
    //         nam2: "Sales Associate",
    //         comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
    //         // name: "Natasha"
    //     },
    //     {
    //         // image : profile1,
    //         name: "Sophia-Rose Butler",
    //         nam2: "Medical Assistant",
    //         comment: "Wow! Worth much more than I paid. This report is the real deal! Thank you!",
    //         // name: "Alex Hormonzi"
    //     }
    // ]
    return (
        <>
            <Navbar3 />
            <div class="page-heading header-text" style={{ backgroundImage: `url("/alice-donovan-rouse-tMHAmxLyzvA-unsplash.jpg")` }}>
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12">
                            <h3 style={{ fontFamily: "Poppins", fontWeight: "900" }}>About</h3>
                            <span style={{ color: "white", fontFamily: "Poppins" }} class="breadcrumb"><a href='/#' style={{ color: "white" }} >Home</a> / Properties</span>

                        </div>
                    </div>
                </div>
            </div>
            {/* about */}

            <br />
            <div className="about">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className="col-md-7">
                            <div className="titlepage">
                                <h2 style={{ color: "rgb(167,12,24)", fontFamily: "Poppins", fontWeight: "900" }}>ABOUT AHMED & REHMAN BUILDERS & DEVELOPERS</h2>
                                <span style={{ fontFamily: "Mulish", color: "black" }}>We are a company that does construction work and helps people invest their capital wisely. We believe in trust and respect. We believe in working closely with our customers, engineers, masterminds, and others involved in our systems plans. Our rule is that everyone shares responsibility for doing a good job, so you can always anticipate great service from us.<br />
                                    Our company, Ahmed & Rehman Builders & Developers, has been around for 25+ years of experience. M Faisal Khan (CEO) and Abdullah wali is a reputed builder. He has lots of experience in Pakistan. We’ve erected multitudinous different kinds of structures, from houses to shops, and we’ve helped guests invest in lots of different areas. Every design we do is top-notch, giving you a great place to invest in your future.
                                </span>
                                <a className="read_more" href="/#" style={{ fontFamily: "Poppins" }}> Read More</a>
                            </div>
                        </div>
                        <br />
                        <div className="col-md-5">
                            <div className="about_img">
                                <figure><img src={about} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of about */}
            <section class="section-services section-t8" style={{ marginTop: "30px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    {/* <h2 className="title-a"></h2> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-box-c foo">
                                <div className="card-header-c d-flex">
                                    <div className="card-box-ico">
                                        <span className="fa fa-award"></span>
                                    </div>
                                    <div className="card-title-c align-self-center">
                                        <h2 className="title-c" style={{ fontFamily: "Poppins" }}>Our Mission</h2>
                                    </div>
                                </div>
                                <div className="card-body-c">
                                    <p className="content-c " style={{ fontFamily: "Mulish", color: "black" }}>
                                        Our mission is simple: to prioritize our customers above all else, delivering homes that stand as living proof of our commitment. Fueled by a robust resource base, we embrace the challenge of large-scale development projects with confidence. Guided by our faith, we consistently exceed our customers' expectations. With projects spanning Karachi, our track record speaks volumes about our dedication and capability.</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card-box-c foo">
                                <div className="card-header-c d-flex">
                                    <div className="card-box-ico">
                                        <span className="fa fa-building"></span>
                                    </div>
                                    <div className="card-title-c align-self-center">
                                        <h2 className="title-c" style={{ fontFamily: "Poppins" }}>Our Vision </h2>
                                    </div>
                                </div>
                                <div className="card-body-c">
                                    <p className="content-c" style={{ fontFamily: "Mulish", color: "black" }}>
                                        Our vision is clear: to create signature landmarks that define the Karachi region. Our core values revolve around fairness, ensuring everyone is treated with equal respect. We uphold uncompromising standards of quality and maintenance, fostering a culture that cherishes people, partnerships, and sustainability. Our commitment to excellence and safety is unwavering, making it the cornerstone of our business.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of services */}
            <br />
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


                                        <span style={{ fontFamily: "Mulish", color: "black" }}>{testimonials.comment}</span>
                                        <hr />
                                        <span style={{ fontweight: "700", fontFamily: "Poppins" }}>{testimonials.name}</span>

                                    </div>
                                </SwiperSlide>))
                        }



                    </Swiper>

                </div>
            </div>

            {/* end of testimonials */}
            {/* truck */}
            <div className="truck">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 jkhgkj">
                            <div className="truck_img1">
                                <img src={truck} alt="#" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="truck_img1 hassaan">
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
export default About