import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const FourthContainerStyled = styled.div`
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

const FourthContainer = ({width}) => 
  <FourthContainerStyled width={width}>
    <br/>
    <H2 color="black">
      What can we do for you?
    </H2>
    <H3 color="black">
      Physician Practicing Smarter provides innovative Medical Billing &amp; Collections Services. Regardless of the size of the practice, from an individual practitioner to a multi-specialty group - we offer:
    </H3>
    <H3 color="black">
      - complete billing<br/>
      - collections<br/>
      - accounts receivable management<br/>
      - superior reporting<br/>
      - analysis capabilities<br/>
    </H3>
    <H3 color="black">
      and a determination to deliver the maximum return for you. You did the work; now let us take the hassle out of obtaining your fair compensation.
    </H3>
    <br/>
  </FourthContainerStyled>

export default FourthContainer;
