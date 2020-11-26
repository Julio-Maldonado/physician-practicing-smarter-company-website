import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const FifthContainerStyled = styled.div`
    text-align: left;
//   background: #2E3950;
//   margin-left: -15vw;
//   width: 100vw;
//   height: ${props => props.width > 1000 ? "30vh" : "20vh"};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
`;

const FifthContainer = ({width}) => 
  <FifthContainerStyled width={width}>
    <br/>
    <H3 color="black">
      We are passionate about processes, because we know that a well-managed process prevents errors and maximizes the output ensuring that billing errors are corrected before they become problems. We catch incorrect codes, data-entry mistakes, and missing information to avoid costly delays, denials, and resubmissions. Delays are minimized, and AR days reduced as we scrub claims before they are submitted. We keep current with insurance specifications and regulations and ensure the fees are kept at the maximum allowable reimbursement. We also focus on procedure codes, so claims are not suspended or rejected. We process Secondary Carrier claims upon receipt of the primary carrier EOB making sure that you receive the maximum amount covered by the insurance companies and minimizing out-of-pocket expenses to your patients. We submit most claims electronically, and daily. Paper claims are usually mailed weekly. We process claims for Medicare, BC/BS, Medicaid, Tri-Care and other payers. We also handle Workers Comp, Personal Injury, Cash Payments, HMO, PPO claims and Self-pay (Patient Statements). Each EOB is audited for correct payment and/or benefits and credited appropriately when necessary.
    </H3>
    <br/>
  </FifthContainerStyled>

export default FifthContainer;
