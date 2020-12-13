import React from "react";
import styled from "styled-components";

import H4 from "../../components/utility/H4";

import {isMobileSized, determineScreenState} from "../../constants/helperFunctions";

const widthMap = {
  "wide": 350,
  "full": 300,
  "pacman": 275,
  "half": 270,
  "mobile": 200
};

const leftMap = {
  "wide": 60,
  "full": 60,
  "pacman": 60,
  "half": 55,
  "mobile": 47
};

const topMap = {
  "wide": 20,
  "full": 17,
  "pacman": 16,
  "half": 15,
  "mobile": 12
};

const StyledCard = styled.div`
  width: ${props => widthMap[props.screenState]}px;
  border-radius: 7px;
  background-color: white;
  color: black;
  margin: auto;
  position: absolute !important;
  left: ${props => leftMap[props.screenState]}vw;
  top: ${props => topMap[props.screenState]}vh;
  opacity: 0.8;
`;

const ImageContainer = ({width}) => 
  <StyledCard screenState={determineScreenState(width)}>
    <h2 color="black">Physician Practicing Smarter</h2>
    <h3>- A Billing &amp; Collections Firm -</h3>
    {isMobileSized(width) ? null : <br/>}
    <H4>4313 N. 10th Street Suite E</H4>
    <H4>McAllen, Texas 78504</H4>
  </StyledCard>

export default ImageContainer;
