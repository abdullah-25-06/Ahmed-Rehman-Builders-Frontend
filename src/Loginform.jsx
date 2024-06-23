
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function Loginform() {
    return (
        <>
            <div className=" login">
                <div className="navhead">

                    <div className="title">

                        <NavLink className="nav-link" to='/' style={{ color: 'white' }}><p>Vincheck Central</p></NavLink>

                    </div>
                    <NavLink className='nav-link'to='/Signupform'>

                    <div className="log">
                        <p style={{ color: 'white' }}>Sign up</p>

                        {/* <NavLink className="nav-link" to='/'><p></p></NavLink> */}
                    </div>
                    </NavLink>
                </div>
                <div className='nborder'></div>

                <div className="logform">
                    <div className="formbox ">
                        <form >
                            <h3 className='pb-3' >Login Form</h3>
                            <p>Email Adress</p>
                            <MDBInput className='mb-3' type='email' id='form1Example2' />
                            <p>Password</p>
                            <MDBInput className='mb-3' type='password' id='form1Example2' />

                            <MDBRow className='mb-4'>
                                <MDBCol className=''>
                                    <MDBCheckbox id='cursor' label='Remember me' defaultChecked />
                                </MDBCol>
                            </MDBRow>
                                <div className="lbtn">

                                    <button type="button" class="btn btn-primary " data-mdb-ripple-init id='loginbtn'>Sign in</button>
                                    {/* <button className='btnprimary'>Sign in </button> */}

                                </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Loginform
