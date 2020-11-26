import React from "react";
import styled from "styled-components";

import MedicalCodingAndBillingImage from "./medical-billing-degree.png";

const StyledImg = styled.img`
  width: ${props => props.width > 1000 ? "70vw" : "100vw"};
  z-index: 999;
`;

const ImageContainer = ({width}) => 
  <div className="home-image-background" >
    <StyledImg width={width} src={MedicalCodingAndBillingImage} />
  </div>

export default ImageContainer;
