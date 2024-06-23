import React, { useState } from "react";

function Modal(props) {
  const [title, setTitle] = useState(props?.data?.title);
  const [bedroom, setBedroom] = useState(props?.data?.bedroom);
  const [washroom, setWashroom] = useState(props?.data?.washroom);
  const [area, setArea] = useState(props?.data?.area);
  const [link, setLink] = useState(props?.data?.link);
  const [description, setDescription] = useState(props?.data?.description);

  const dataFill = () => {
    const title_ref = title;
    const bedroom_ref = bedroom;
    const washroom_ref = washroom;
    const area_ref = area;
    const description_ref = description;
    const link_ref = link;
    if (
      !title_ref ||
      !description_ref ||
      !area_ref ||
      !bedroom_ref ||
      !link_ref ||
      !washroom_ref
    ) {
      return alert("Please fill all the fields");
    }
    return props.uploading(
      title_ref,
      bedroom_ref,
      washroom_ref,
      area_ref,
      description_ref,
      link_ref,
    );
  };
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content" style={{ height: 'minContent' }} id="ogmodal">
            <div class="modal-header">

              <h5 class="modal-title" id="exampleModalLabel">
                Add project details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" >
              <div className="modalinput" style={{ padding: '5px' }}>


                <div class="input-group  mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Title
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="eg:Chapel Residency"
                    style={{ marginRight: "4px" }}
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
                </div>
                <div class="input-group input-group-sm mb-3" >
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Bedrooms
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="eg:4"
                    style={{ marginRight: "4px" }}
                    value={bedroom}
                    onChange={(e) => { setBedroom(e.target.value) }}
                  />
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Washrooms
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="eg:5"
                    style={{ marginRight: "4px" }}
                    value={washroom}
                    onChange={(e) => { setWashroom(e.target.value) }}
                  />
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Area
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="10,0000 sq/km"
                    style={{ marginRight: "4px" }}
                    value={area}
                    onChange={(e) => { setArea(e.target.value) }}
                  />

                </div>
                <div class="input-group  mb-3">
                  <span class="input-group-text" id="inputGroup-sizing-sm">
                    Facebook Link
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Enter your Facebook video link"
                    style={{ marginRight: "4px" }}
                    value={link}
                    onChange={(e) => { setLink(e.target.value) }}
                  />
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                  ></textarea>
                  <label for="floatingTextarea" style={{ fontSize: "13px" }}>
                    Project description
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={dataFill}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
