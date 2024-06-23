import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar'
// import Selects from './Selects'
import Canvas from './Canvas';
function Dpage1() {

    return (
        <>





            <div className="dashboard">
                <div className="head">
                    <div className="navhead">


                        <div className="title mt-1">


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
                    {/* This is siebat */}
                    <Sidebar />
                    <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-12 mx-auto dcol2">
                        <div className="dform1">
                            <p><b>Remaining Count:0</b></p>

                            <div data-mdb-input-init class="form-outline mb-4">
                                <label class="form-label" for="form5Example1" id="ft">VIN Number*</label>
                                <input type="text" id="form5Example1" class="form-control" placeholder='Enter VIN Number' />
                            </div>
                            <p id='ftext'>You have 0 remaining credits to view report. Select any package below to proceed.</p>
                            {/* <Selects /> */}

                            <button class="btn btn-success mt-2" style={{ border: 'none' }}>Check Vehicle Details</button>
                            <button class="btn btn-success mt-2" style={{  marginLeft: '3px', border: 'none' }}>Payment</button>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6  col-lg-7 col-md-12 dcol3">
                        <div class="card">
                            <div class="header">
                                <h2>All Reports</h2>
                            </div>

                            <div className="tablecontainer">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">VIN </th>
                                            <th scope="col">Email </th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Date & Time</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>

                                            <td colSpan='1' id='colborder'>1</td>
                                            <td colSpan='1' id='colborder' >12345678901234567</td>
                                            <td colSpan='1' id='colborder' style={{ whiteSpace: 'wrap', wordBreak: 'break-all' }}>Harrisimran55gmail.com</td>
                                            <td colSpan='1' id='colborder' >Pending</td>
                                            <td colSpan='1' id='colborder' style={{ whiteSpace: 'wrap', wordBreak: 'break-all' }}>2023-12-28 22:33:33</td>
                                            <td colSpan='1' id='lastcol'>

                                                <button class="btn btn-success mt-2" style={{ fontSize: '13px' }}>View Report</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Canvas />

        </>
    )
}

export default Dpage1
