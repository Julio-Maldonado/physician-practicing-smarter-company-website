import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ServiceContainer2Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ServiceContainer2 = ({width}) => 
  <ServiceContainer2Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        Medical Coding &amp; Claim Reimbursement
      </H2>
      <H3 color="black">
        <b id="h3">Yes</b>, medical coding is a fundamental aspect of maximizing claim reimbursement. The proper knowledge of medical coding and reimbursement methodologies will maximum reimbursements available. We assign the correct ICD-10, CPT, and/or HCPCS codes derived from the medical records and reports from your practice. Our Medical Coding Specialists generally have several years of clinical experience in a range of medical specialties.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ServiceContainer2Styled>

export default ServiceContainer2;
