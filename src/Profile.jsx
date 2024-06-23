
import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Canvas from './Canvas';

function Loginform() {

    return (

        <>
            <div className="dashboard">
                <div className="head">
                    <div className="navhead">

                        <div className="title">

                            <NavLink className="nav-link" to='/'><p>Vincheck Central</p></NavLink>

                        </div>
                        <a
                            class="btn btn-primary mb-2" id="cbtn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <img src="ham.png" alt="" sizes="" srcset="" />
                        </a >
                    </div>
                    <div className='nborder'></div>
                </div>
                <div className="dbody">
                    <Sidebar />
                    <div className="reqform">
                        <h1 style={{color:'white'}}>
                            Account Information
                        </h1>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-9 mx-auto mainre2 mt-4">

                            <div className="reqbox ">
                                <div class="row ">

                                    <div className="pt-2 pb-1" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div class="col">
                                            <div data-mdb-input-init class="form-outline">
                                                <label class="form-label" for="form3Example1" id='reqlabel'>Name</label>
                                                <input type="text" id="form3Example1" class="form-control" placeholder='Enter your name' />
                                            </div>
                                        </div>
                                        <div class="col">
                                            {/* <div data-mdb-input-init class="form-outline">
                                                <label class="form-label" for="form3Example1" id='reqlabel'>Name</label>
                                                <input type="text" id="form3Example1" class="form-control" placeholder='Enter your name' />
                                            </div> */}
                                            <div data-mdb-input-init class="form-outline" >
                                                <label class="form-label" for="form3Example1" id='reqlabel'>Email Adress</label>
                                                <input type="text" id="form3Example" class="form-control" placeholder='Enter your email' />
                                            </div>
                                            </div>
                                        </div>
                                        <div className="pt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form3Example1" id='reqlabel'> Current Password</label>
                                                    <input type="text" id="form3Example1" class="form-control" placeholder='Current password' />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div data-mdb-input-init class="form-outline">
                                                    <label class="form-label" for="form3Example1" id='reqlabel'> New Password</label>
                                                    <input type="text" id="form3Example" class="form-control" placeholder='New password' />
                                                </div>
                                                {/* <div data-mdb-input-init class="form-outline" >
                                                <label class="form-label" for="form3Example2" id='reqlabel'style={{marginRight:"35px"}}>New Password</label>
                                                <input type="text" id="form3Example1" class="form-control" placeholder='Enter new passowrd' />
                                            </div> */}
                                            </div>
                                        </div>
                                        <div className="reqbtn">

                                            <button class="btn btn-success mt-4" style={{ fontSize: '13px', width: '5rem' }}>Save</button>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div>


                    </div>
                </div >
                <Canvas />

            </>
            )
}

            export default Loginform
