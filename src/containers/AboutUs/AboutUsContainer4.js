import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const AboutUsContainer4Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const AboutUsContainer4 = ({width}) =>
  <AboutUsContainer4Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">Financial Analysis and Management:</b>
      </H2>
      <H3 color="black">
      - Correcting how UnitedHealth Group Processes E/R visits, which result in a cost saving of over $5,000,000.00 per year.<br/>
      - Lead in developing a claim policy and procedure for UnitedHealth Group on how to process Inpatient DRG newborns for Wisconsin saving over $1,600,903.00 within 4 months.<br/>
      - University of California, San Francisco decreased the unidentified (UNID) monies by over $900,000 within 3 months.<br/>
      - Redesigned CIGNA Healthcare’s medical billing statement, which resulted in a cost savings of over $1,300,000 per year.<br/>
      - Sun Health Corporation decreased the research and grants accounts receivables (A/R) from $526,000 and increase cash by $361,200 within 6 months
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </AboutUsContainer4Styled>

export default AboutUsContainer4;
