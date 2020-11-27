import React from "react";
import styled from "styled-components";
import {HashLink as Link} from "react-router-hash-link";

import {scrollToTop} from "../../constants/helperFunctions";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const FourthContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const FourthContainer = ({width}) => 
  <FourthContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black">
        <b id="h2">What can we do for you?</b>
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;Physician Practicing Smarter provides innovative Medical Billing &amp; Collections Services. Regardless of the size of the practice, whether you are an individual practitioner or a multi-specialty group - we offer:
      </H3>
      <H3 color="black">
        - complete billing<br/>
        - collections<br/>
        - accounts receivable management<br/>
        - superior reporting<br/>
        - analysis capabilities<br/>
      </H3>
      <H3 color="black">
        and a determination to deliver the maximum return for you. You did the work; let us take the hassle out of obtaining your fair compensation.
      </H3>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;Read up on all of our services <Link smooth to="./services" onClick={() => scrollToTop()}>here</Link>.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </FourthContainerStyled>

export default FourthContainer;
