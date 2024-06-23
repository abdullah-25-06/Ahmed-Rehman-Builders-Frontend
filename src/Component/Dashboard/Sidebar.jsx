import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth";
// import AuthContext from "./context/auth";

// import 'react-toastify/dist/ReactToastify.css';

function Sidebar() {
  const ctx = useContext(AuthContext)
  const logoutHandler = () => {
    ctx.onLogout()
  }
  return (
    <>
      <div className="dcol1 col-xxl-2 col-xl-2 col-1g-2 col-md-2 ">
        <nav class="sidebar " id="side">
          <div className="sidebar-inner">
            <header class="sidebar-header"></header>

            <nav class="sidebar-menu">
              <hr />

              <p
                style={{ fontSize: "15px", paddingTop: "", marginLeft: "10px" }}
              >
                Main
              </p>
              <button type="button" id="sbutton">
                <img src="file.png" alt="" />
                <NavLink className="nav-link" to="/Dashboard">
                  <span id="spam">All Projects</span>
                </NavLink>
              </button>
              <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                External
              </p>
              <button type="button" id="sbutton">
                <img src="upload.png" alt='pic' />
                <NavLink className="nav-link" to="/UploadProject">
                  <span id="spam">Upload Project</span>
                </NavLink>
              </button>
              <button type="button" id="sbutton">
                <img src="chat.png" alt='pic' />
                <NavLink className="nav-link" to="/UserComments">
                  <span id="spam">User Comments</span>
                </NavLink>
                {/* <a className="nav-link" href="/Reviews"  rel="noreferrer"  style={{textDecoration:'none'}}>
                  <span id="spam">User Reviews</span>
                </a> */}
              </button>
              <button type="button" id="sbutton">
                <img src="userreview.png" alt='pic' />
                <NavLink className="nav-link" to="/ClientReviews">
                  <span id="spam">Client Reviews</span>
                </NavLink>
                {/* <a className="nav-link" href="/Reviews"  rel="noreferrer"  style={{textDecoration:'none'}}>
                  <span id="spam">User Reviews</span>
                </a> */}
              </button>

              <p style={{ fontSize: "15px", padding: "0", marginLeft: "10px" }}>
                Authentication
              </p>
              {/* <button type="button" id="sbutton">
                <img src="use.png" alt='pic'/>
                <NavLink className="nav-link" to="/Profile">
                  <span id="spam">Profile</span>
                </NavLink>
              </button> */}
              <button type="button" id="sbutton" onClick={logoutHandler}>
                <img src="signout.png" alt='pic' />
                <span id="spam">Sign Out</span>

              </button>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

