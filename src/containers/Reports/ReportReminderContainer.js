import React from "react";
import styled from "styled-components";

import H3 from "../../components/utility/H3";

const ReportReminderContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ReportReminderContainer = ({width}) => 
  <ReportReminderContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H3 color="black">
        <b id="h3">Remember</b>, if you don't get paid, we don't get paid. It is to our mutual benefit to collect the full reimbursement for services rendered.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ReportReminderContainerStyled>

export default ReportReminderContainer;
