import React from 'react'

function Signup() {
    return (
        <div className="col-xxl-11 mx-auto sign">
            <div className="stable mt-1">
                <h3>  Vechicle Information</h3>
                <img src="" alt="" />
                <table class="table">


                    <tbody>


                        <tr class="table-info" id='stable'>
                            <th scope="row">VIN</th>
                            <td>12345678912345671</td>
                        </tr>
                        <tr class="table-light" id='stable' >
                            <th scope="row">YEAR</th>
                            <td>2004</td>
                        </tr>
                        <tr class="table-info" id='stable' >
                            <th scope="row">MADEIN</th>
                            <td>GERMANY</td>
                        </tr>
                        <tr class="table-light" id='stable'>
                            <th scope="row">MODEL</th>
                            <td>A8</td>
                        </tr>
                        <tr class="table-info" id='stable'>
                            <th scope="row">ENGINE CYLINDERS</th>
                            <td>6</td>
                        </tr>
                        <tr class="table-light" id='stable'>
                            <th scope="row">MAKE</th>
                            <td>AUDI</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="sform">
                <h2 className='text-center' style={{whiteSpace:'nowrap'}}>Get Full Report in 32$</h2>
                <h3 className='mb-5' style={{textAlign:'center'}}>SignUp & Get Your Vechicle Report Instantly!</h3>
                <form className='col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 mx-auto'>
                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form4Example1">Name</label>
                        <input type="email" id="form4Example1" class="form-control" />
                    </div>
                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form4Example1">Email address</label>
                        <input type="email" id="form4Example1" class="form-control" />
                    </div>
                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form4Example1">Phone no</label>
                        <input type="email" id="form4Example1" class="form-control" />
                    </div>
                    <div data-mdb-input-init class="form-outline mb-3">
                        <label class="form-label" for="form4Example1">Password</label>
                        <input type="email" id="form4Example1" class="form-control" />
                    </div>

                    <div className="lbtn">
                        <button type="button" class="btn btn-primary " data-mdb-ripple-init id='loginbtn'>Sign in</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup
