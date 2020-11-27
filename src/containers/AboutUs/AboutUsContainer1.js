import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const AboutUsContainer1Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const AboutUsContainer1 = ({width}) =>
  <AboutUsContainer1Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        Executive Leadership Experience:
      </H2>
      <H3 color="black">
        - Served as Director of billing, collections, solid claims processing Medicare, Medi-cal, non-government, international and management consulting organization.  Provided consulting services for the Arizona Health Care Cost Containment System Medicaid Program; solid understanding of the state and government regulatory agencies, and accreditation organization, and working directly with the Medicaid Executive Director.<br/>
        - Lead in developing and implementing compliance tracking/reporting system processes to monitor compliance with state standards.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </AboutUsContainer1Styled>

export default AboutUsContainer1;
