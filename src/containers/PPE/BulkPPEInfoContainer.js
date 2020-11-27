import React from "react";
import styled from "styled-components";

import H2 from "../../components/utility/H2";
import H3 from "../../components/utility/H3";

const BulkPPEInfoContainerStyled = styled.div`
  text-align: left;
`;

const HomeDescriptionDiv = styled.div`
  background-color: #F0F0F0;
  border-radius: 5px;
`;

const BulkPPEInfoContainer = ({width}) => 
  <BulkPPEInfoContainerStyled width={width}>
    <br/>
    <HomeDescriptionDiv>
      <H2 color="black" width={width}>
        <b id="h2">The Need</b>
      </H2>
      <H3 color="black">
        &nbsp;&nbsp;&nbsp;&nbsp;The global pandemic caused by COVID-19 has caused a massive need for PPE. Schools, companies, organizations, non-profits, and more rely on PPE to continue operating.<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;That's why we decided to start offering bulk PPE through a quick and simple process.
      </H3>
    </HomeDescriptionDiv>
    <br/>
  </BulkPPEInfoContainerStyled>

export default BulkPPEInfoContainer;
