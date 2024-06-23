import React, { useContext, useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import ProjectContext from '../../context/project'
import Navbar3 from '../Navbar3/Navbar3'
import Footer from '../Footer/Footer'
import Cform from '../Contact/Cform'
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"


function Project() {
    const navigate = useNavigate()
    const ctx = useContext(ProjectContext)
    const [projData, setProjData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isData, setIsData] = useState(false)
    const [stat, setStat] = useState(true)
    useEffect(() => {
        if (ctx.data.length >= 1) {
            setProjData([...ctx.data])
            setStat(prev => !prev)
            setIsLoading(false)
            setIsData(true)
        }

    }, [ctx])
    const BtnHandler = (id) => {
        return navigate({
            pathname: `/I`,
            search: createSearchParams({
                id: id,
            }).toString(),
        });
    }
    const data = projData.length >= 1 && projData.map((elem, ind) => {
        return <div className="pcard" key={ind}>
            <div className="htop">
                <img src={`${process.env.REACT_APP_DEVELOPMENT_URL}/images/${elem.title.data_url}`}
                    alt={elem.title.title} />
            </div>
            <div className="hbottom">
                <h6 className='mt-2'>{elem.title.title} </h6>
                <div className='bimages'>
                    <div className='imgdetail'>
                        <img src="area.png" alt="" />
                        <p className='mt-3 btext'>{elem.area} <span className='unit'>sqf</span></p>
                    </div>
                    <div className='imgdetail'>

                        <img src="bed.png" alt="" />
                        <p className='mt-3 btext'>{elem.bedroom} beds</p>
                    </div>
                    <div className='imgdetail'>

                        <img src="tub.png" alt="" />
                        <p className='mt-3 btext'>{elem.washroom} baths</p>
                    </div>
                </div>
                <div className="bprices">
                    {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span className='unit'>
                            Price
                        </span>
                        <span className='unit2'>{elem.price}</span>
                    </div> */}
                    {/* <NavLink to="/i"> */}
                    <button
                        id="rembtn2"
                        onClick={() => { BtnHandler(elem.title._id) }}
                    >
                        View Details
                    </button>
                    {/* </NavLink> */}
                </div>
            </div>

        </div>
    })
    return (
        <>
        <Navbar3/>
            <div className="hprojectpage">
                <h2 className='text-center mt-4'>Featured Projects</h2>
                <div className="col-md-11 col-sm-12 mx-auto pcardholder" key={stat}>
                    {/* Yh aik main indivual card ha abd is p map krio aur route bh isy p dala wa ha next inner page ka bakio p route nhi h isy p map krio just! */}
                    {/* <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-24.webp" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>
                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <NavLink to="/i">
                                    <button
                                        id="rembtn2"
                                    >
                                        Walk through
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                    </div> */}
                    {/* {isLoading  } */}
                    {isLoading ? <p>Data is Loading</p> : isData && data}
                    {/* <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2024/02/grid-NTR-1-4-1024x682.jpg" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>

                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <button
                                    id="rembtn2"
                                >
                                    Walk through
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-4.webp" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>

                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <button
                                    id="rembtn2"
                                >
                                    Walk through
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/0-3.webp" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>

                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <button
                                    id="rembtn2"
                                >
                                    Walk through
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2024/01/7-Winder-Enclave-1024x682.jpg" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>

                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <button
                                    id="rembtn2"
                                >
                                    Walk through
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="pcard">
                        <div className="htop">
                            <img src="https://gfsbuilders.com.pk/wp-content/uploads/2023/10/1-80.webp" alt="" />
                        </div>
                        <div className="hbottom">
                            <h6 className='mt-2'>GLOBE RESIDENCY Main Univerity Road Project </h6>
                            <div className='bimages'>
                                <div className='imgdetail'>

                                    <img src="area.png" alt="" />
                                    <p className='mt-3 btext'>5000 <span className='unit'>sqf</span></p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="bed.png" alt="" />
                                    <p className='mt-3 btext'>4 beds</p>
                                </div>
                                <div className='imgdetail'>

                                    <img src="tub.png" alt="" />
                                    <p className='mt-3 btext'>4 baths</p>
                                </div>
                            </div>
                            <div className="bprices">
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <span className='unit'>
                                        Price
                                    </span>
                                    <span className='unit2'>5000</span>
                                </div>
                                <button
                                    id="rembtn2"
                                >
                                    Walk through
                                </button>
                            </div>
                        </div>

                    </div>

 */}
                </div>
            </div>
            {/* Project Page */}
            <Cform/>
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
            <Footer/>
        </>
    )
}

export default Project
