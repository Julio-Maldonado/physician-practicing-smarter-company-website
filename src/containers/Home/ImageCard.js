import React from "react";
import styled from "styled-components";

import H4 from "../../components/utility/H4";

const StyledCard = styled.div`
  width: ${props => props.width > 1000 ? "300px" : "200px"};
  border-radius: 15px;
  background-color: white;
  color: black;
  margin: auto;
  position: absolute !important;
  left: ${props => props.width > 1000 ? "60vw" : "55vw"};
  top: ${props => props.width > 1000 ? "20vh" : "20vw"};
  opacity: 0.8;
`;

const ImageContainer = ({width}) => 
  <StyledCard width={width}>
    <h3>Physician Practicing Smarter</h3>
    <h3>- A Billing &amp; Collections Firm -</h3><br/>
    <H4>4314 N. 10th Street Suite E</H4>
    <H4>McAllen, Texas 78501</H4>
  </StyledCard>

export default ImageContainer;
