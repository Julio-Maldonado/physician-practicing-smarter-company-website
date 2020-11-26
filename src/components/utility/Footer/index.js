import React from "react";

import { HashLink as Link } from "react-router-hash-link";

import { isMobile, isAndroid, isIOS } from "react-device-detect";

import H4 from "../H4";

import "../styles.css";

const Footer = () => {
  return (
    <div>
      <H4 color="black">© Copyright 2020 Physician Practicing Smarter | Designed by Yeux Technologies</H4>
      <br/>
    </div>
  );
};

export default Footer;
