import React, { useEffect, useState } from 'react'
import Modal from "../Modal/Modal"
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FacebookEmbed } from 'react-social-media-embed';
import Navbar3 from '../Navbar3/Navbar3';
import Footer from '../Footer/Footer';
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import { CSpinner } from '@coreui/react';




function Innerproject() {
    const [queryParameters] = useSearchParams();
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isData, setIsData] = useState(false)
    const [stat, setStat] = useState(true)
    const id = queryParameters.get("id");
    useEffect(() => {
        async function Call() {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_DEVELOPMENT_URL}/dashboard/project?id=${id}`
                );
                console.log(data)
                setTitle(data.title)
                setDescription(data.description)
                setImages(data.pic)
                setLink(data?.link)
                setIsData(true)
                setIsLoading(false)
                setStat(prev => !prev)
            } catch (err) {
                setIsData(false)
                setIsLoading(false)
                setStat(prev => !prev)
                alert(err);
            }
        }
        Call();
        return () => { };
    }, [id]);
    const data = isData && !isLoading &&
        <div key={stat}>
            <div className="col-md-10 mx-auto mt-5 innerbox ">
                <h2 className=''>{title}</h2>
                <div className="line"></div>
            </div>
            <h2 className='text-center mt-5'>About Our Project</h2>
            <div className="col-md-10 mx-auto inneritems">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-sm-11 cola">

                    <h5>
                        {description}
                    </h5>
                    <a href="https://api.whatsapp.com/send/?phone=03158058848&text=Hi%2C+I+want+to+discuss+about+a+project.&type=phone_number&app_absent=0" target='blank'>
                    <button className='mt-2' 

                        style={{ width: '150px', height: '38px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '13px' }}
                        id="rembtn"
                    >
                        Enquire Now!
                    </button></a>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-11 col-sm-11  colb">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <FacebookEmbed url={`${link}`}width={500}  height={300} />
                        {/* <FacebookEmbed url={"https://www.facebook.com/BuildersGFS/videos/1196635581509534"}width={500}  height={300}/> */}
                        {/* <FacebookEmbed url={"https://www.facebook.com/BuildersGFS/videos/1145371583467952"}width={500}  height={300}/> */}
                        {/* <FacebookEmbed url={"https://fb.watch/rOpty7GMLo/"}width={500}  height={300}/> */}
                        {/* <FacebookEmbed url={"https://fb.watch/rOp29OtUVq/"}width={400}  /> */}
                        {/* <div className='fvideo'> */}
                        {/* <FacebookEmbed url={`${link}`} /> */}
                        {/* </div> */}
                    </div>

                </div>
            </div>
            <h2 className='text-center im'>IMAGES TOUR</h2>
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto innerimages mt-4">
                {images?.map((img, ind) => {
                    return <div className="inimage" data-bs-toggle="modal" data-bs-target="#exampleModal" key={ind}>
                        <img src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${img}`} alt={title} />
                    </div>
                })}
            </div>
        </div>
    return (
        <>
            <Navbar3 />
            <div className="inner">
                {isLoading ? <div style={{"textAlign":"center" ,"margin":"10px"}}> <CSpinner color="dark" /></div> : isData && data}
            </div >
            {images.length >= 1 && <Modal data={images} title={title} />}


            <div className="truck">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 jkhgkj">
                            <div className="truck_img1">
                                <img src={truck} alt="#" />
                            </div>
                        </div>
                        <div className="col-md-6 hassaan">
                            <div className="truck_img1">
                                <img src={jcb} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Innerproject
