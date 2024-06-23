import React from 'react'
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import logo from './AR builder logo.png'
import { NavLink } from 'react-router-dom';




const Navbar3 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Container state={isNavOpen ? 1 : 0}>
      <div className="brand">
        {/* <h3 style={{color:"orange",fontWeight:"700"}}>AL REHMAN GARDEN</h3> */}
        <NavLink to="/"><img  src={logo} alt="" /></NavLink>

      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`} style={{fontFamily:"Poppins"}}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Project">Projects</NavLink>
          </li>
         
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
               
          <button className="btn "  style={{ background: "rgb(167,12,24)" }}><NavLink to="/Contact" style={{color:"white"}} className="fa fa-calendar" > Schedule a visit</NavLink></button>
        </ul>
      </div>
      <div className="account-info">
        {/* <button className="btn info"></button> */}

      </div>
    </Container>
  )
}
const Container = styled.nav`
  display: flex;
  position:relative;
  height: 16vh;
  z-index:1000000000;
  justify-content: space-between;
  align-items: center;
  background:white;
  /* box-shadow: 10px 10px 5px black; */

  .brand {
    img {
      cursor: pointer;
      width: 80%;
      height: 17vh;
      margin-left:30px;
    }
  }
  .toggle {
    display: none;
    color:black;
   
  }
  .links {
    ul {
      display: flex;
      gap: 3.5rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: black;
          font-weight:700;
          /* cursor: pointer; */
          font-size:20px;
          /* transition: var(--default-transition); */
          &:hover {
            color: rgb(167,12,24);
           
          /* margin: 25; */
            gap: 3.5rem;
          }
        }
      }
    }
  }
  .account-info {
  background-color:orange;
    display: flex;
    gap: 1rem;
    margin-left: -300px;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }
  @media  (max-width: 1080px){
    .brand img{ 
      width:120px;

    }
    


  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;
    
    .account-info {
      display: none;
    }
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      height: 19vh;
      margin-left:-30px;
    }
    
    .toggle {
      padding-right: 1rem;
      width: 30px;
      display: block;
      z-index: 1;
     

    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "50%" : "0%")};
      height: 100vh;
      background-color:rgb(255, 255, 255);
      opacity: 0;
      
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            color: #030303;
            font-size:19px;
          }
        }
      }
    }
  }
`;


export default Navbar3