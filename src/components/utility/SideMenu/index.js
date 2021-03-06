import React from "react";

import {slide as Menu} from "react-burger-menu";
import {HashLink as Link} from "react-router-hash-link";
import {scrollToTop} from "../../../constants/helperFunctions"
import {isMobile} from "react-device-detect";

const NavigationLink = ({title, endpoint}) =>
  <Link smooth to={`/${endpoint}`} className="menu-item" onClick={() => scrollToTop()}>
    {title}
  </Link>;

const SideMenu = props => {
  return (
    props.width < 1000 || isMobile ? 
      <Menu isOpen={props.isOpen} {...props} id="stack">
        <NavigationLink title="Home" endpoint="home" />
        <br/><br/>
        <NavigationLink title="About Us" endpoint="aboutus" />
        <br/><br/>
        <NavigationLink title="Reports" endpoint="reports" />
        <br/><br/>
        <NavigationLink title="Services" endpoint="services" />
        <br/><br/>
        <NavigationLink title="Contact" endpoint="contactus" />
        <br/><br/>
        <NavigationLink title="PPE" endpoint="ppe" />
        <br/>
      </Menu> :
      <div className="add-to-navbar">
        <div className="horizontal-navbar">
          <NavigationLink title="Home" endpoint="home" />
          <NavigationLink title="About Us" endpoint="aboutus" />
          <NavigationLink title="Services" endpoint="services" />
          <NavigationLink title="Reports" endpoint="reports" />
          <NavigationLink title="Contact" endpoint="contactus" />
          <NavigationLink title="PPE" endpoint="ppe" />
        </div>
      </div>
  );
};

export default SideMenu;
