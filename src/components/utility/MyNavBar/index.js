import React from "react";
import styled from "styled-components";

import LOGO_IMG from "./logo192.png"

import {HashLink as Link} from "react-router-hash-link";

const LogoImgDiv = styled.img`
  width: 40px;
  height: 40px;
`;

class MyNavbar extends React.Component{
  render() {
    return (
      <div className="my-navbar">
        <Link smooth to={`/home`} className="my-navbar-link">
          <LogoImgDiv src={LOGO_IMG} />
          {/* <p className="my-navbar-p" style={{display: "inline-block"}}>Physician Practicing Smarter</p> */}
        </Link>
      </div>
    );
  }
}

export default MyNavbar;
