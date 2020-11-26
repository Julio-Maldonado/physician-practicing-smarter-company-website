import React from "react";
import styled from "styled-components";

import "../styles.css";

import ImageContainer from "./ImageContainer";
import ImageCard from "./ImageCard";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import FifthContainer from "./FifthContainer";
import FourthContainer from "./FourthContainer";

import SideMenu from "../../components/utility/SideMenu";
import Footer from "../../components/utility/Footer";
import MyNavBar from "../../components/utility/MyNavBar";
// import BackgroundBlob from "../../components/utility/BackgroundBlob";

const SectionBody = styled.div`
  max-width: 70vw;
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
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => { this.setState({ width: window.innerWidth, height: window.innerHeight }) };

  componentWillUnmount() { window.removeEventListener('resize', this.updateWindowDimensions); }

  navigateSideMenu = () => { this.setState({isOpen: !this.state.isOpen}); }

  render() {
    const {width} = this.state;
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
            <SectionBody>
              <SecondContainer width={width} />
              <ThirdContainer width={width} />
              <FourthContainer width={width} />
              <FifthContainer width={width} />
              {/* <BackgroundBlob style={{top: "50%", right: "10%"}}/>
            <BackgroundBlob style={{top: "70%", left: "10%"}}/> */}
            </SectionBody>
            <Footer />
          </div>
      </div>
    );
  }
}

export default Home;
