import React from "react";

import { slide as Menu } from "react-burger-menu";
import { HashLink as Link } from "react-router-hash-link";

import { isMobile } from "react-device-detect";

const NavigationLink = ({title, endpoint}) =>
  <Link smooth to={`/${endpoint}`} className="menu-item">
    {title}
  </Link>;

const SideMenu = props => {
  return (
    props.width < 1000 || isMobile ? 
     <Menu isOpen={props.isOpen} {...props} id="stack">
        <NavigationLink title="Home" endpoint="home" />
        <br /><br />
        <NavigationLink title="Services" endpoint="services" />
        <br /><br />
        <NavigationLink title="About Us" endpoint="aboutus" />
        <br /><br />
        <NavigationLink title="Contact Us" endpoint="contacttus" />
        <br /><br />
        <NavigationLink title="PPE" endpoint="ppe" />
        <br />
      </Menu> :
      <div className="add-to-navbar">
        <div className="horizontal-navbar">
          <NavigationLink title="Home" endpoint="home" />
          <NavigationLink title="Services" endpoint="services" />
          <NavigationLink title="About Us" endpoint="aboutus" />
          <NavigationLink title="Contact Us" endpoint="contacttus" />
          <NavigationLink title="PPE" endpoint="ppe" />
        </div>
      </div>
  );
};

export default SideMenu;
