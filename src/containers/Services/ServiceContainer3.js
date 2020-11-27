import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ServiceContainer3Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ServiceContainer3 = ({width}) => 
  <ServiceContainer3Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">HIPAA Compliance and Consulting</b>
      </H2>
      <H3 color="black">
        Physician Practicing Smarter has implemented numerous security measures to help ensure that your data and processes are secure, and in full compliance with all HIPAA guidelines on security and privacy.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ServiceContainer3Styled>

export default ServiceContainer3;
