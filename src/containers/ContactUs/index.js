import React, { useReducer, useState, useEffect } from "react";

// import styled from "styled-components";
import Modal from "react-responsive-modal";
import Loader from "react-loader-spinner";

import "./styles.css";
import "react-responsive-modal/src/styles.css";

import H1 from "../../components/utility/H1";
import SideMenu from "../../components/utility/SideMenu";
import Footer from "../../components/utility/Footer";
import MyNavBar from "../../components/utility/MyNavBar";
// import BackgroundBlob from "../../components/utility/BackgroundBlob";

// import {determineScreenState, isMobileSized} from "../../constants/helperFunctions";
// import {BLOB_MAP} from "../../constants/constants";
import TitleContainer from "./TitleContainer";

const sendEmail = async({name, emailAddress, subject, message, type}) => {
  try {
    const resp = await fetch(
      "https://blooming-beyond-72124.herokuapp.com/api/send_email",
      {
        mode: "cors",
        method: "POST",
        body: JSON.stringify({name, emailAddress, subject, message, type}),
        headers: {"Content-Type": "application/json",},
      },
    );

    return resp.json();
  } catch (e) {
    return { success: false };
  }
};

// const SectionBody = styled.div`
//   max-width: ${props => isMobileSized(props.width) ? "85vw" : "70vw"};
//   margin-left: auto;
//   margin-right: auto;
// `;

// const SectionWrapper = styled.div`
//   padding: 0;
//   margin: 0;
//   padding-top: ${props => props.paddingTop};
// `;

const ContactUs = () => {
  const [sideMenuIsOpen, updateSideMenuIsOpen] = useState(false);
  const [width, updateWidth] = useState(0);
  // const [height, updateHeight] = useState(0);

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      emailAddress: "",
      subject: "Medical Billing and Collection",
      message: "",
      modalFlag: false,
      loading: false,
      modalText: "",
      type: "pps"
    },
  );

  const handleChange = evt => {
    const {name} = evt.target;
    const newValue = evt.target.value;
    setUserInput({ [name]: newValue });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setUserInput({loading: true});
    userInput["name"] = `${userInput.firstName} ${userInput.lastName}`;
    sendEmail(userInput).then(({success}) => {
      setUserInput({loading: false});
      if (success) {
        setUserInput({ modalText: "Email sent!" });
      } else {
        setUserInput({ modalText: "Email was not sent out...try again later." });
      }
      openModal();
    }).catch((err) => {
      setUserInput({loading: false});
    });
  };

  const openModal = () => {
    setUserInput({ modalFlag: true });
  };

  const closeModal = () => {
    setUserInput({ modalFlag: false });
  };

  const updateWindowDimensions = () => {
    updateWidth(window.innerWidth);
    // updateHeight(window.innerHeight);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, [])

  const navigateSideMenu = () => updateSideMenuIsOpen(!sideMenuIsOpen);
  // const screenState = determineScreenState(width);
  // const paddingTop = "1vh";
  return (
    <div className="App">
      <MyNavBar />
      <div onClick={() => navigateSideMenu()}>
        <SideMenu right width={width} isOpen={sideMenuIsOpen}/>
      </div>
      <div className="App-content">
        <div className="fill-header" />
        <H1 color="black">Contact Us</H1>
        <TitleContainer width={width}/>
        <form style={{marginBottom: "1vh"}} onSubmit={e => onFormSubmit(e)}>
          <ul className="form-style-1">
            <li>
              <input
                type="text"
                name="firstName"
                className="field-divided"
                placeholder="First Name"
                value={userInput.firstName}
                onChange={handleChange}
                required
              />{" "}
              <input
                type="text"
                name="lastName"
                className="field-divided"
                placeholder="Last Name"
                value={userInput.lastName}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <input
                type="email"
                name="emailAddress"
                className="field-long"
                placeholder="Your Email Address"
                value={userInput.emailAddress}
                onChange={handleChange}
                required
              />
            </li>
            <li>
              <select
                name="subject"
                className="field-select"
                defaultValue="Bulk PPE Order"
                onChange={handleChange}
              >
                <option value="Medical Billing and Collection">Medical Billing and Collection</option>
                <option value="Workers Comp Billing and Collection">Workers Comp Billing and Collection</option>
                <option value="Designated Doctor's Exams billing">Designated Doctor's Exams billing</option>
                <option value="Physician Credentialing">Physician Credentialing</option>
                <option value="Insurance Collections">Insurance Collections</option>
                <option value="Bulk PPE Order">Bulk PPE Order</option>
                <option value="Other">Other</option>
              </select>
            </li>
            <li>
              <textarea
                name="message"
                id="message"
                className="field-long field-textarea"
                placeholder="Your Message"
                value={userInput.message}
                onChange={handleChange}
              />
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
        <div style={{textAlign: "center!important"}}>
          <Modal open={userInput.modalFlag} onClose={() => closeModal()} center>
            <center>
              <h2>{userInput.modalText}</h2>
              {userInput.modalText === "Email sent!" ? <h3>We'll respond promptly.</h3> : null}
            </center>
          </Modal>
        </div>
        {userInput.loading ? (
          <div>
            <div
              style={{
                position: "fixed",
                left: "0vw",
                top: "0vh",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
                backgroundColor: "#FFFFFF",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "fixed",
                translate: "translate('-50%', '-50%')",
                left: "45vw",
                top: "15vh",
                zIndex: 9999,
              }}
            >
              <Loader type="ThreeDots" color="black" height="10vh" width="10vw"/>
            </div>
          </div>
        ) : null}
        {/* <BackgroundBlob style={BLOB_MAP[screenState]["blobReports1"]}/> */}
        {/* <BackgroundBlob style={BLOB_MAP[screenState]["blobReports2"]}/> */}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
