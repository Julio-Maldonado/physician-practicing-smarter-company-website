import React from "react";
import styled from "styled-components";

import LOGO_IMG from "./logo192.png"

import {HashLink as Link} from "react-router-hash-link";
import {scrollToTop} from "../../../constants/helperFunctions"

const NavBarDiv = styled.div`
  z-index: 99;
  color: white;
  background-color: #5E5E5D;
  height: 7vh;
  width: 100vw;
  position: fixed;
  padding-top: 1vh;
`;

const LogoImgDiv = styled.img`
  width: 40px;
  height: 40px;
`;

class MyNavbar extends React.Component{
  render() {
    return (
      <NavBarDiv>
        <Link smooth to={`/home`} className="my-navbar-link" onClick={() => scrollToTop()}>
          <LogoImgDiv src={LOGO_IMG} />
          {/* <p className="my-navbar-p" style={{display: "inline-block"}}>Physician Practicing Smarter</p> */}
        </Link>
      </NavBarDiv>
    );
  }
}

export default MyNavbar;
