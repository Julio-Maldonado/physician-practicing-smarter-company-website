import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

import {isMobileSized} from "../../constants/helperFunctions";

const FifthContainerStyled = styled.div`
    text-align: left;
`;

const HomeDescriptionDiv = styled.div`
    background-color: #F0F0F0;
    border-radius: 5px;
`;

const FifthContainer = ({width}) => 
  <FifthContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black" width={width}>
        Why Should you work with Physician Practicing Better?
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;We are passionate about processes, because we know that a well-managed process prevents errors and maximizes the output. Our process catches incorrect codes, data-entry mistakes, and missing information to avoid costly delays, denials, and resubmissions. Delays are minimized, and AR days reduced as we scrub claims before they are submitted. We keep current with insurance specifications and regulations to ensure fees are kept at the maximum allowable reimbursement.
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {isMobileSized(width) ? null : "We also focus on procedure codes, so claims are not suspended or rejected. We process Secondary Carrier claims upon receipt of the primary carrier EOB making sure that you receive the maximum amount covered by the insurance companies and minimizing out-of-pocket expenses to your patients. We submit most claims electronically, and daily. Paper claims are usually mailed weekly. "}We process claims for:<br/>
        - Medicare<br/>
        - BC/BS<br/>
        - Medicaid<br/>
        - Tri-Care<br/>
        and other payers.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;We also handle: Workers Comp, Personal Injury, Cash Payments, HMO, PPO claims and Self-pay (Patient Statements). Each EOB is audited for correct payment and/or benefits and credited appropriately when necessary.
        <br/>
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </FifthContainerStyled>

export default FifthContainer;
