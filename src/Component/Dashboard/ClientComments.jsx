import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Canvas from "./Canvas";
function Table() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function apiFunction() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/contact/getcontact`, {
          headers: {
            auth_token: localStorage.getItem("token"),
          }
        }
        );
        setComments([...data]);
      } catch (error) {
        console.log(error);
      }
    }
    apiFunction();
  }, []);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_DEVELOPMENT_URL}/contact/deletecontact?id=${id}`, {
          headers: {
            auth_token: localStorage.getItem("token"),
          }
      }
      );
      alert("Comment Deleted");
      const newC = comments.filter((c) => c._id !== id);
      setComments([...newC]);
    } catch (error) {
      alert("Try again");
    }
  };
  const data = comments.map((item, index) => {
    return (
      <tr>
        <th scope="col" id="ttr">
          {index + 1}
        </th>
        <th scope="col" id="ttr">
          {item.name}
        </th>
        <th scope="col" id="ttr">
          {item.email}
        </th>
        <th scope="col" id="ttr">
          {item.phoneno}
        </th>
        <th scope="col" id="ttr">
          {item.desc}
        </th>
        <th scope="col" id="ttr2">
          <span>
            <button
              id="rembtn4"
              onClick={() => {
                deleteHandler(item._id);
              }}
            >
              <img src="close.png" alt="" />
            </button>
          </span>
        </th>
      </tr>
    );
  });
  return (
    <>
      <div className="navhead container-fluid">
        <div className="title">
          <NavLink
            className="navbar-brand"
            id="brandname"
            data-aos="flip-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            
            <img src="logo.png" alt=""  style={{width :'100px',height:'70px'}}/>
            {/* <p>Logo</p> */}
          </NavLink>
        </div>

        <a
          class="btn btn-primary mb-2"
          id="cbtn"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img src="ham.png" alt="" sizes="" srcset="" />
        </a>
      </div>
      <div className="headupload2">
        <Sidebar />
        <div className="col-md-10 col-sm-12 mx-auto pb-2 tablehead">
          <table class="table table-hover table-sucess mx-auto">
            {/* <div className="tablewrapper"> */}
            <thead>
              <tr>
                <th scope="col" id="tth">
                  #
                </th>
                <th scope="col" id="tth">
                  Name
                </th>
                <th scope="col" id="tth">
                  Email
                </th>
                <th scope="col" id="tth">
                  Phone
                </th>
                <th scope="col" id="tth">
                  Querie
                </th>
                <th scope="col" id="tth">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
      <Canvas/>
    </>
  );
}

export default Table;
