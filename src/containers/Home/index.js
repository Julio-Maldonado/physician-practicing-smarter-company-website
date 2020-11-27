import React from "react";
import styled from "styled-components";

import "../styles.css";

import ImageContainer from "./ImageContainer";
import ImageCard from "./ImageCard";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FourthContainer from "./FourthContainer";
import FifthContainer from "./FifthContainer";
import BulkPPEInfoContainer from "./BulkPPEInfoContainer";

import SideMenu from "../../components/utility/SideMenu";
import Footer from "../../components/utility/Footer";
import Contact from "../../components/utility/Contact";
import MyNavBar from "../../components/utility/MyNavBar";
import BackgroundBlob from "../../components/utility/BackgroundBlob";

import {determineScreenState, isMobileSized} from "../../constants/helperFunctions";

import {BLOB_MAP} from "../../constants/constants";

const SectionBody = styled.div`
  max-width: ${props => isMobileSized(props.width) ? "85vw" : "70vw"};
  margin-left: auto;
  margin-right: auto;
`;

class Home extends React.Component {
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
            <ImageContainer width={width} />
            <ImageCard width={width}/>
            <SectionBody width={width}>
              <SecondContainer width={width} />
              <ThirdContainer width={width} />
              <FourthContainer width={width} />
              <FifthContainer width={width} />
              <BulkPPEInfoContainer width={width} />
              <BackgroundBlob style={BLOB_MAP[screenState]["blob1"]}/>
              {/* <BackgroundBlob style={BLOB_MAP[screenState]["blob2"]}/>
              <BackgroundBlob style={BLOB_MAP[screenState]["blob3"]}/> */}
              <BackgroundBlob style={BLOB_MAP[screenState]["blob4"]}/>
            </SectionBody>
            <Contact />
            <Footer />
          </div>
      </div>
    );
  }
}

export default Home;
