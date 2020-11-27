import React from "react";
import styled from "styled-components";

import "../styles.css";

import TitleContainer from "./TitleContainer";
import AboutUsContainer1 from "./AboutUsContainer1";
import AboutUsContainer2 from "./AboutUsContainer2";
import AboutUsContainer3 from "./AboutUsContainer3";
import AboutUsContainer4 from "./AboutUsContainer4";

import H1 from "../../components/utility/H1";
import SideMenu from "../../components/utility/SideMenu";
import Footer from "../../components/utility/Footer";
import MyNavBar from "../../components/utility/MyNavBar";
import BackgroundBlob from "../../components/utility/BackgroundBlob";

import {determineScreenState, isMobileSized} from "../../constants/helperFunctions";
import {BLOB_MAP} from "../../constants/constants";

const SectionBody = styled.div`
  max-width: ${props => isMobileSized(props.width) ? "85vw" : "70vw"};
  margin-left: auto;
  margin-right: auto;
`;

class AboutUs extends React.Component {
  state = {
    isOpen: false,
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => { this.setState({ width: window.innerWidth, height: window.innerHeight }) };

  componentWillUnmount() { window.removeEventListener("resize", this.updateWindowDimensions); }

  navigateSideMenu = () => { this.setState({isOpen: !this.state.isOpen}); }

  render() {
    const {width} = this.state;
    const screenState = determineScreenState(width);
    return (
      <div className="App">
          <MyNavBar />
          <div onClick={() => this.navigateSideMenu()}>
            <SideMenu right width={width} isOpen={this.state.isOpen}/>
          </div>
          <div className="App-content">
            <div className="fill-header" />
            <H1 color="black">About Us</H1>
            <SectionBody width={width}>
            <TitleContainer width={width} />
            <AboutUsContainer1 width={width} />
            <AboutUsContainer2 width={width} />
            <AboutUsContainer3 width={width} />
            <AboutUsContainer4 width={width} />
            <BackgroundBlob style={BLOB_MAP[screenState]["blobReports1"]}/>
            <BackgroundBlob style={BLOB_MAP[screenState]["blobReports2"]}/>
            <BackgroundBlob style={BLOB_MAP[screenState]["blobReports3"]}/>
            <BackgroundBlob style={BLOB_MAP[screenState]["blobReports4"]}/>
            </SectionBody>
            <Footer />
          </div>
      </div>
    );
  }
}

export default AboutUs;
