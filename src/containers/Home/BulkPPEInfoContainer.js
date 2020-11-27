import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";
import {scrollToTop} from "../../constants/helperFunctions"

import {HashLink as Link} from "react-router-hash-link";

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
        <b id="h2">Bulk PPE</b>
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;We're currently offering bulk PPE orders for your organization to stay safe and follow guidelines during this global pandemic. Visit our <Link smooth to={`/ppe`} onClick={() => scrollToTop()}>PPE</Link> page for more info.
        <br/>
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </FifthContainerStyled>

export default FifthContainer;
