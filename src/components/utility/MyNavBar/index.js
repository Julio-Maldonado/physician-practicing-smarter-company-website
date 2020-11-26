import React from "react";

import { HashLink as Link } from "react-router-hash-link";

class MyNavbar extends React.Component{
  render() {
    return (
      <div className="my-navbar">
        <Link smooth to={`/home`} className="my-navbar-link">
          <p className="my-navbar-p">Physician Practicing Smarter</p>
        </Link>
      </div>
    );
  }
}

export default MyNavbar;
