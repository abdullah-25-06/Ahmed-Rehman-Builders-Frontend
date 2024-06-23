import { React, useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth";

function Canvas() {
  const ctx = useContext(AuthContext)
  const logoutHandler = () => {
    ctx.onLogout()
  }

  return (
    <>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">MENU</h5>
          <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close">
            {/* <img src="cross.png" alt="" /> */}
          </button>
        </div>
        <div class="offcanvas-body">
          <div className="canvascontent">
            <p
            >
              Main
            </p>
            <button type="button" id="sbutton">
              <img src="file.png" alt="pic" />
              <NavLink className="nav-link" to="/Dashboard">
                <span id="spam">All Projects</span>
              </NavLink>
            </button>
            <p
              style={{
                paddingTop: "17px",
              }}
            >
              External
            </p>
            <button type="button" id="sbutton" className="my-1">
              <img src="upload.png" alt="pic" />
              <a className="nav-link" href="/UploadProject" rel="noreferrer">
                <span id="spam">Upload Project</span>
              </a>
            </button>
            <button type="button" id="sbutton" className="my-1">
              <a className rel="noreferrer" href="/UserComments">
                <img src="chat.png" alt="pic" />
                <span id="spam">User Comments</span>
              </a>
            </button>
            <button type="button" id="sbutton" className="my-1">
              <img src="userreview.png" alt="pic" />
              <a className="nav-link" rel="noreferrer" href="/ClientReviews">
                <span id="spam">Client Reviews</span>
              </a>
            </button>
            <p
              style={{
                paddingTop: "17px",
              }}
            >
              Authentication
            </p>
            <button type="button" id="sbutton" className="my-1" onClick={logoutHandler}>
              <img src="signout.png" alt="pic" />
              <a className="nav-link" href="/">
                <span id="spam" >Sign Out</span>
              </a>
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default Canvas;
