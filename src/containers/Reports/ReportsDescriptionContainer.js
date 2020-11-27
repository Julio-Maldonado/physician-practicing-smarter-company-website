import React from "react";
import styled from "styled-components";

import H3 from "../../components/utility/H3";

const ReportsDescriptionContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ReportsDescriptionContainer = ({width}) => 
  <ReportsDescriptionContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H3 color="black">
        <b id="h3">Physician Practicing Smarter</b> Billing/Collection Services helps you unlock the insights and intelligence within your own data to help you run your business better. We offer complete reporting solutions, including customized and on-demand reporting. In addition, we run reports to identify denials or difficult payers and follow-up with calls and appeals. 
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ReportsDescriptionContainerStyled>

export default ReportsDescriptionContainer;
