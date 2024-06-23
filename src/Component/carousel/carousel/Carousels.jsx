import React from 'react'
// import vediobg from "./videobg.mp4"
import "./cstyle.css"

export default function Carousels() {

	return (
		<>
			<div className="main1" style={{ width: "100%", height: "" }} >
				<video style={{}} id="housevideo" src="/videobg.mp4" autoPlay loop muted />
				<div className="content ">
					<h1 style={{fontFamily:"Anton" , fontWeight:"900" , color:"maroon"}} >Ahmed & Rehman <br/>Builders & Developers.</h1>
					<p style={{fontFamily:"Poppins",  fontWeight:"800"}} >Since the beginning, AR Builders has been delivering projects & leading the construction sector <br/>towards higher standards of planning for better quality of life.</p>
					{/* <span>ahmed & Rehman	</span> */}
				</div>
			</div>



		</>
	)
}
