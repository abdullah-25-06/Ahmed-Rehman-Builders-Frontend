import React, { useEffect, useState } from "react";
import { NavLink, createSearchParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";
import Canvas from "./Canvas";

function Totalprojects() {
  // setRecords(ctx.data);
  const navigate = useNavigate();
  // const ctx = useContext(DataContext);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function Call() {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/viewpost`,
          {
            headers: {
              auth_token: localStorage.getItem("token"),
            },
          }
        );
        setRecords(data.data);
      } catch (err) {
        // alert(err);
      }
    }
    Call();
    return () => { };
  }, []);
  const checkHandler = (id) => {
    return navigate({
      pathname: `/U`,
      search: createSearchParams({
        id: id,
      }).toString(),
    });
  };
  const updateContext = (updatedObj) => {
    setRecords((prevObj) => {
      return prevObj.map((obj) => {
        if (obj._id === updatedObj._id) {
          return updatedObj;
        } else {
          return obj;
        }
      });
    });
  };
  const submitHandler = async (id) => {

    try {
      const { data } = await axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/completepost?id=${id}`, {
      }, {
        headers: {
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("token"),
        }
      })
      updateContext(data.data)
      alert("Uploaded Successfully")
    } catch (err) {
      console.log(err)
    }
  };
  const updateContext2 = (id) => {
    const newData = records.map((obj) => {
      if (obj._id !== id) return obj;
      else return null
    });
    setRecords([...newData]);
  };
  const deleteHandler = async (id) => {

    try {
      await axios.delete(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/delete?id=${id}`, {
        headers: {
          auth_token: localStorage.getItem("token"),
        }
      })

      updateContext2(id)
      alert("Uploaded Successfully")
    } catch (err) {
      console.log(err)
    }
  };
  const row =
    records.length > 0
      ? records.map((elem, index) => {
        if (elem) {
          return (
            <div className="totalcont" key={index}>
              <div className="top">
                <img
                  src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${elem?.data_url}`}
                  alt={elem?.title}
                  width={"300px"}
                  height={"180px"}
                />
              </div>
              <div className="bottom">
                <h5>{elem?.title}</h5>
                <button
                  onClick={() => {
                    checkHandler(elem?._id);
                  }}
                  class="browsebtn2 my-1"
                  id="color"
                  style={{
                    width: "100%",
                    whiteSpace: "nowrap",
                    padding: "5px",
                  }}
                >
                  Check
                </button>
                {elem?.completed ? <button
                  onClick={() => {
                    deleteHandler(elem?._id);
                  }}
                  class="browsebtn2  "
                  id="color2"
                  style={{
                    width: "100%",
                    whiteSpace: "nowrap",
                    padding: "5px",
                  }}
                >
                  Delete!
                </button> :
                  <button
                    onClick={() => {
                      submitHandler(elem?._id);
                    }}
                    class="browsebtn2  "
                    id="color2"
                    style={{
                      width: "100%",
                      whiteSpace: "nowrap",
                      padding: "5px",
                    }}
                  >
                    Upload!
                  </button>}
              </div>
            </div>
          );
        }else return null
      })
      : null;
  return (
    <>
      <div className="navhead container-fluid">
        <div className="title">
          <NavLink
            className="navbar-brand"
            id="brandname"
            // to="/"
            data-aos="flip-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-delay="500"
          >

            <img src="logo.png" alt="" style={{ width: '100px', height: '70px' }} />
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
      <div className="headupload">
        <Sidebar />
        <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 total">
          {row ? row : <p>No Projects</p>}

        </div>
      </div>
      <Canvas />
    </>

  );
}

export default Totalprojects;
