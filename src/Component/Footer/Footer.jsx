import React from 'react'
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';
import logo from '../Navbar3/AR builder logo.png'

const Footer = () => {
  return (
    <>
           
          <MDBFooter className='text-center text-lg-start text-muted' style={{ background: "silver", padding: "10px", boxshadow: "10px 10px 5px black" }}>
          <section className='' style={{ color: "black" }}>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <img src={logo}  style={{width:"45%",height:"20vh"}} className="me-3"  alt="" />
                   
                  <h4 className='text-uppercase fw-bold mb-4' style={{ fontFamily:"Poppins"}}>
                    Ahmed & Rehman Builders & Developers
                                   </h4>
                  <p>
  
                  </p>
                </MDBCol>
                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ fontFamily:"Poppins" }}>Leading Real State Network</h6>
                  <p style={{fontFamily:"Mulish" , fontWeight:"700"}}> 
                    <MDBIcon icon="home" className="me-2" />
                    CM-24 Gulistan e Rafi, Malir City, Karachi
                  </p>
                  <p style={{fontFamily:"Mulish" , fontWeight:"700"}}>
                    <MDBIcon icon="envelope" className="me-3" />
                    arbuilderndeveloper@gmail.com
                  </p>
                  <p style={{fontFamily:"Mulish" , fontWeight:"700"}}>
                    <MDBIcon icon="phone" className="me-3" />0300-0288620
                  </p>
                  <p style={{fontFamily:"Mulish" , fontWeight:"700"}}>
                    <MDBIcon icon="phone" className="me-3" />0315-8058848
                  </p>
                  
                  <div className='hover' style={{ color: " rgb(167,12,24)" }}>
                    <a href='/#' className='me-4 text-reset'>
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                   
                    <a href='/#' className='me-4 text-reset'>
                      <MDBIcon fab icon="google" />
                    </a>
                    <a href='/#' className='me-4 text-reset'>
                      <MDBIcon fab icon="instagram" />
                    </a>
                    
                  </div>
  
                </MDBCol>
  
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ fontFamily:"Poppins" }}>Our Projects</h6>
                  <p style={{fontFamily:"Mulish" }}>
                    <a href='\I?id=665cd293a6f05b5fcbfc1d46' className='text-reset'>
                      CM-05 
                    </a>
                  </p>
                  <p style={{fontFamily:"Mulish" }}>
                    <a href='#!' className='text-reset'>
                      
                    </a>
                  </p>
                  <p style={{fontFamily:"Mulish" }}>
                    <a href='#!' className='text-reset'>
                      
                    </a>
                  </p>
                  <p style={{fontFamily:"Mulish" }}>
                    <a href='#!' className='text-reset'>
                     
                    </a>
                  </p>
                </MDBCol>
  
                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4' style={{ fontFamily:"Poppins"  }}>Quick Lines</h6>
                  
                  <p>
                    <a style={{fontFamily:"Mulish"}} href='/contact' className='text-reset'>
                      Contact us
                    </a>
                  </p>
                  <p>
                    <a style={{fontFamily:"Mulish"}} href='/about' className='text-reset'>
                      About Company
                    </a>
                  </p>
                  <p>
                    <a style={{fontFamily:"Mulish"}} href='/project' className='text-reset'>
                      Our Projects
                    </a>
                  </p>
                </MDBCol>
  
  
              </MDBRow>
            </MDBContainer>
          </section>
  
          
        </MDBFooter>
        <div className='text-center p-2' style={{ backgroundColor: 'black', color: "white" }}>
             Copyright © 2021 | AR Builders & Developers 
            <a className='text-reset' href='https://mdbootstrap.com/'>
              
            </a>
          </div>
          </>
  )
}

export default Footer
