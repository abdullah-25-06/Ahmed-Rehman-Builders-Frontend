import React from 'react'
import styled from "styled-components";
// import { FaWhatsapp } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useState } from 'react';

const Scroll = () => {
          const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
          <Div>
      <a href="https://api.whatsapp.com/send/?phone=03158058848&text=Hi%2C+I+want+to+discuss+about+a+project.&type=phone_number&app_absent=0" target='blank' className={`${visible ? "block" : "none"}`}>
      <SiWhatsapp />
      </a>
    </Div>
    
  )
}
const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color:green  ;
    padding: 1.3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1000000000;
    svg {
      color: white;
      font-size: 1.8rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;

export default Scroll