import React, { useState } from "react";

function Modal(props) {
    const [images] = useState(props.data);
    const data = images.map((img, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} id="modalcarousel" key={index}>
            <div className='imgdiv'>
                <img
                    src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`}
                    alt="modal Images"
                />
            </div>
        </div>
    ));

    const data2 = images.map((_, index) => (
        <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            class="active"
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
        ></button>
    ));

    return (
        <>
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog  modal-lg  modal-dialog-centered">
                    <div class="modal-content" id='imgmodal'>
                        <div class="modal-header">
                            {/* <h1 class="modal-title fs-5 mt-3" id="exampleModalLabel">
                                {title}
                            </h1> */}
                            <button
                                type="button"
                                class="btn-close mt-3"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div id="carouselExampleIndicators" class="carousel slide">
                                <div class="carousel-indicators">
                                    {data2}
                                </div>
                                <div class="carousel-inner">{data}</div>
                                <button
                                    class="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                    id='imgpreview'
                                >
                                    <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button
                                    class="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                    id='imgpreview'
                                >
                                    <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    );
}

export default Modal;
