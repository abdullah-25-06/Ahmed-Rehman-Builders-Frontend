import axios from "axios";
import Modal from "./Modal";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// import Canvas from "./Canvas";

function Update() {

  const [metaData, setMetaData] = useState();
  const [detailData, setDetailData] = useState();
  const [pic, setPic] = useState();
  const [titlePic, SetTitlePic] = useState();
  const [delpic, setDelpic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(false);
  const [queryParameters] = useSearchParams();
  const [apiData, setAPIData] = useState({});
  const [stat, setStat] = useState(true);
  const id = queryParameters.get("id");

  useEffect(() => {
    async function apiFunction() {
      try {
        const {
          data: { meta_data, detail_data },
        } = await axios.get(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/onepost?id=${id}`
          , { headers: { auth_token: localStorage.getItem("token"), } }
        );
        console.log(detail_data)
        setMetaData(meta_data);
        SetTitlePic(meta_data.data_url)
        setPic(detail_data.data);
        delete detail_data.data;
        setDetailData(detail_data);
        setIsLoading(false);
        setIsData(true);
        setAPIData({
          title: meta_data?.title,
          bedroom: detail_data?.bedroom,
          area: detail_data?.area,
          washroom: detail_data?.washroom,
          description: meta_data?.description,
          link: detail_data?.link
        });
        setStat((prev) => !prev);
      } catch (error) {
        setIsData(false);
        setIsLoading(false);
        setStat((prev) => !prev);
      }
    }
    apiFunction();
  }, [id]);
  const titleSubmit = async (e) => {
    e.preventDefault();
    const fileObj = e.target.title.files[0];
    if (!fileObj) {
      alert("Please select a file")
      return
    }
    try {
      const data = await axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/updatetitle?id=${id}`, {
        data: fileObj
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          auth_token: localStorage.getItem("token"),
        }
      })
      SetTitlePic(data.data.img.data_url)
      e.target.title.value = ''
    } catch (err) {
      console.log(err)
    }
  };
  const addImages = async (e) => {
    e.preventDefault();
    const fileObj = e.target.img.files;
    if (!fileObj) {
      alert("Please select a file")
      return
    }
    const file = Object.values(fileObj)
    try {
      const { data: { detail_data } } = await axios.put(`${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/addimage?id=${id}`, {
        data: [...file]
      }, {
        headers: {
          "Content-Type": "multipart/form-data",
          auth_token: localStorage.getItem("token")
        }
      })
      setPic(detail_data.data);
      e.target.img.value = ''
    } catch (err) {
      console.log(err)
    }
  };
  const setState = async (
    title,
    bedroom,
    washroom,
    area,
    description,
    link,
  ) => {
    setMetaData({ ...metaData, title: title, description: description });
    setAPIData({ title, bedroom, washroom, area, description, link });
  };
  function validateFormFields(obj) {
    const requiredFields = [
      "title",
      "bedroom",
      "washroom",
      "area",
      "link",
      "description",
    ];

    for (const field of requiredFields) {
      if (!(field in obj)) {
        return false;
      }

      if (
        obj[field] === null ||
        obj[field] === undefined ||
        obj[field] === ""
      ) {
        return false;
      }
    }

    return true;
  }
  const Navigate = useNavigate()
  const backHandler = () => {
    Navigate("/Dashboard")
  }
  const SendRequest = async () => {
    if (validateFormFields(apiData)) {
      try {
        await axios.put(
          `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/updatepost?id=${id}`,
          {
            // data: file,
            ...apiData,
            delpic: delpic,
          },
          {
            headers: {
              "Content-Type": " application/json",
              auth_token: localStorage.getItem("token"),
            },
          }
        );
        alert("Data delivered successfully");
        setDelpic([])
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("All fields and some images are required");
    }
  };
  const addDeletePic = (img, id) => {
    setDelpic((prev) => {
      prev.push(img);
      return prev;
    });
    setPic((prevPosts) => prevPosts.filter((post, index) => index !== id));
  };

  const myJSX = metaData && detailData && pic && (
    <>
      <div id="update">
        <div>
          <div className="backbtn">
            <img onClick={backHandler} src="backbtn2.png" alt="" />
          </div>
          <div>
            <h1 className="text-center my-2 updatetitle">{metaData.title}</h1>
          </div>
          <div style={{ display: "flex" }} id="mainupdate">
            <div
              className="col-xxl-6 col-xl-6 col-md-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <p id="titlep"> Title Image </p>
              <img
                src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${titlePic}`}
                alt={metaData.title}

                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  borderRadius: "10px",
                  padding: "3px",
                }}
              />
              <form onSubmit={titleSubmit} id="titleform">
                <div id="titleimagebtns">

                  <label for="file-upload2" class="custom-file-upload">
                    Change Title Image
                  </label>
                  <input id="file-upload2" type="file" name="title" />

                  <button
                    class="browsebtn my-2"
                    style={{
                      width: "135px",
                      whiteSpace: "nowrap",
                      padding: "5px",
                      borderRadius: '6px',
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div
              id="projectd"
              className="col-xxl-6 col-xl-6 col-md-6 col-sm-12"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <p id="updatedesc">Project description </p>
              <p id="updatedesc2"> {metaData.description}</p>
              <div style={{ width: "100%", display: "flex", gap: "5px" }} id="btnholders">
                {isLoading ? (
                  <h1>Data is Loading</h1>
                ) : (
                  isData && (
                    <button
                      class="browsebtn my-2"
                      style={{
                        width: "235px",
                        whiteSpace: "nowrap",
                        padding: "5px",
                      }}
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Update project details
                    </button>
                  )
                )}
                <form onSubmit={addImages} id="uform" >

                  <label for="file-upload" class="custom-file-upload">
                    Add New Images
                  </label>
                  <input id="file-upload" type="file" name="img" multiple />

                  <button
                    class="browsebtn my-2"
                    style={{
                      width: "235px",
                      whiteSpace: "nowrap",
                      padding: "5px",
                    }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
                <button
                  class="browsebtn my-2"
                  style={{
                    width: "235px",
                    whiteSpace: "nowrap",
                    padding: "5px",
                    fontSize: "13px",
                    borderRadius: "12px",
                  }}
                  id="rembtn"
                  onClick={SendRequest}
                >
                  Upload Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-3"
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {pic.map((img, ind) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    margin: "3px",
                  }}
                >
                  <img
                    key={ind}
                    src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`}
                    alt={metaData.title}
                    width={"380px"}
                    height={"260px"}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                      borderRadius: "10px",
                    }}
                  />
                  <button
                    onClick={() => {
                      addDeletePic(img, ind);
                    }}
                    style={{
                      width: "150px",
                      height: "30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "13px",
                    }}
                    id="rembtn"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
  return (
    <div>
      {isLoading ? <h1>Data is Loading</h1> : isData && myJSX}
      <Modal
        uploading={setState}
        key={stat}
        data={{
          title: metaData?.title,
          bedroom: detailData?.bedroom,
          area: detailData?.area,
          washroom: detailData?.washroom,
          description: metaData?.description,
          link: detailData?.link
        }}
      />
    </div>
    // <Canvas>
  );

}

export default Update;
