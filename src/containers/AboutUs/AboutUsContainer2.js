import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const AboutUsContainer2Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const AboutUsContainer2 = ({width}) =>
  <AboutUsContainer2Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">Managed Care/ Insurance Industry Expertise:</b>
      </H2>
      <H3 color="black">
        - Solid understanding of the Medicaid Plan requirement for their contracted health care plans. Proven ability to develop, implement internal audit approaches and methodologies that will meet the state and government rules for hospitals organization and the public and private sector.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </AboutUsContainer2Styled>

export default AboutUsContainer2;
