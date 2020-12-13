import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const ReportsContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const ReportsContainer = ({width}) =>
  <ReportsContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">Reports include:</b>
      </H2>
      <H3 color="black">
        - Instant access to accurate aging to know who is delinquent<br/>
        - Appeal insurance carriers on delayed or denied claims<br/>
        - Medicare/Medicaid Credit balances - run report to catch monthly government credits<br/>
        - Refunds<br/>
        - MTD Summary all Visits, New Patients, Charges, Total payments, Cash Payments, Insurance payments and Adjustments.<br/>
        - Year to Date Report<br/>
        - Practice Stats Report<br/>
        - Payment report (by charges or payments)<br/>
        - Procedural Analysis Indicating Revenue Generated by each Procedure<br/>
        - Diagnosis Report<br/>
        - Claims Cost Analysis<br/>
        - Patient referrals / Referring doctors<br/>
        - Custom Report Generator: allows you to extract any information you need from the database
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </ReportsContainerStyled>

export default ReportsContainer;
