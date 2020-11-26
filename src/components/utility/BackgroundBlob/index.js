import React from "react";
import { Blob } from "react-blob";

const BackgroundBlob = ({style, props}) =>
  <Blob
    size="10vh"
    style={{
      position: "absolute",
      zIndex: 1,
      backgroundColor: "#18191A",
      color: "white",
      opacity: 0.5,
      fontSize: "10vh",
      ...style
    }}
    {...props}
  />

export default BackgroundBlob;
