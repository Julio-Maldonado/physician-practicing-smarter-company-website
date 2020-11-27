import React from "react";
import styled from "styled-components";
import {HashLink as Link} from "react-router-hash-link";
import {scrollToTop} from "../../constants/helperFunctions"

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const BulkPPEInfoContainer2Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const BulkPPEInfoContainer2 = ({width}) => 
  <BulkPPEInfoContainer2Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black" width={width}>
        <b id="h2">Physician Practicing Smarter</b>
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;Whether your bulk order requires 10,000 or +100,000 sets of gloves, testing kits, or other PPE, we can meet your demand. <Link smooth to="./contactus" onClick={() => scrollToTop()}>Contact us</Link> to tell us more about your order and we will be in touch with you shortly. Our priority is to ensure your organization can get back to where it needs to be <b id="h3">safely</b>.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </BulkPPEInfoContainer2Styled>

export default BulkPPEInfoContainer2;
