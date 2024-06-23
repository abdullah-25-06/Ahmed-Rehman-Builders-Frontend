import React from 'react'
import { NavLink } from 'react-router-dom';


function Sidebar() {
    // 

    // 
    return (
        <>
            <div className="dcol1 col-xxl-2 col-xl-2 col-1g-2 col-md-2 ">

                <nav class="sidebar " id="side">

                    <div className="sidebar-inner">
                        <header class="sidebar-header">

                        </header>

                            <nav class="sidebar-menu">
                                <div style={{ fontSize: "19px",paddingTop:'15px' }} id="cname" >
                                    {/* {ctx.username} */}
                                    Hassan
                                </div>
                                <hr />
                                {/* </button> */}
                                <p
                                    style={{ fontSize: "15px", paddingTop: "", marginLeft: "10px" }}
                                >
                                    Main
                                </p>
                                <button type="button" id="sbutton">
                                    <img src="home.png" alt="" />
                                    <NavLink className="nav-link" to="/Dashboard">
                                        <span id="spam">Dashboard</span>
                                    </NavLink>
                                </button>
                                <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                                    Get Help
                                </p>
                                <button type="button" id="sbutton">
                                    <img src="efund.png" alt="img" />
                                    <NavLink className="nav-link" to="/Request">
                                        <span id="spam">Request Refund</span>
                                    </NavLink>
                                </button>
                                <button type="button" id="sbutton">
                                    <img src="chat.png"  alt="img"/>
                                    <NavLink className="nav-link" to="/Chat">
                                        <span id="spam">Live Chat</span>
                                    </NavLink>
                                    {/* <span>Live Chat</span> */}
                                </button>

                                <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                                    Authentication
                                </p>
                                <button type="button" id="sbutton">
                                    <img src="use.png" alt="img"/>
                                    <NavLink className="nav-link" to="/Profile">
                                        <span id="spam">Profile</span>
                                    </NavLink>
                                </button>
                                <button type="button" id="sbutton" >
                                    <img src="signout.png" alt="img"/>
                                    
                                    <NavLink className="nav-link" to="/">
                                        <span id="spam" >Sign Out</span>
                                    </NavLink>
                                </button>
                            </nav>
                    </div>
                </nav>
            </div>


        </>
    )
}
export default Sidebar