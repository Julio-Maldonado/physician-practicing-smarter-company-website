import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const AboutUsContainer3Styled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const AboutUsContainer3 = ({width}) =>
  <AboutUsContainer3Styled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        Management Information System Analysis and Modification:
      </H2>
      <H3 color="black">
        - Lead in developing the pre-registration office for Scottish Rite Children’s Hospital Clinic<br/>
        - Lead in redesigning the mail-log for John C. Lincoln Hospital Physician Network Development, LLC that increased revenue by 98%<br/>
        - Lead in developing a questionnaire regarding claims adjudication reimbursement and reports for Arizona Health Care Cost Containment Medicaid to audit and monitor the health plans, Lead in developing and edit audit reports 
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </AboutUsContainer3Styled>

export default AboutUsContainer3;
