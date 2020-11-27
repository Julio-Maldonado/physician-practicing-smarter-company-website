import React from "react";
import {HashLink as Link} from "react-router-hash-link";

import {scrollToTop} from "../../../constants/helperFunctions";
import H4 from "../H4";

import "../styles.css";

const Contact = () => {
  return (
    <div>
      <H4 color="black"><Link smooth to="./contactus" onClick={() => scrollToTop()}>Contact</Link> us - we're ready to serve.</H4>
    </div>
  );
};

export default Contact;
