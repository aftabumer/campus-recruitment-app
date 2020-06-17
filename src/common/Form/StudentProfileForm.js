import React, { useState, useEffect } from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { jobAction, authAction } from "../../store/action";

const StudentProfileForm = ({
  history,
  isLoggedInAction,
  user,
  setUpStudentProfileAction,
}) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [email, setemail] = useState("");
  const [qulification, setqulification] = useState("");
  const [experience, setexperience] = useState("");
  const [address, setaddress] = useState("");

  useEffect(() => {
    console.log(isLoggedInAction);
    isLoggedInAction();
  }, [isLoggedInAction]);

  const profileSubmitHandler = () => {
    debugger;
    setUpStudentProfileAction({
      firstName: firstName,
      lastName: lastName,
      contactNumber: contactNumber,
      email: email,
      qulification: qulification,
      experience: experience,
      address: address,
      studentId: user && user.uid,
    });
  };

  return (
    <LayoutWrapper>
      {console.log("user student: ", user)}
      <div className="profile-form-container">
        <div className="profile-form-left-sec">
          <h1 className="profile-form-title m5">Student Profile Form</h1>
          <div className="profile-form-fields">
            <TextField
              placeholder="first name"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={firstName}
              onChange={(event) => {
                setfirstName(event.target.value);
              }}
            />
            <TextField
              placeholder="last name"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={lastName}
              onChange={(event) => {
                setlastName(event.target.value);
              }}
            />
            <TextField
              placeholder="contact number"
              className="profile-field"
              textFieldClass="text-field"
              type="number"
              value={contactNumber}
              onChange={(event) => {
                setcontactNumber(event.target.value);
              }}
            />
            <TextField
              placeholder="email addresss"
              className="profile-field"
              textFieldClass="text-field"
              type="email"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
            <TextField
              placeholder="qulification"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={qulification}
              onChange={(event) => {
                setqulification(event.target.value);
              }}
            />
            <TextField
              placeholder="experience"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={experience}
              onChange={(event) => {
                setexperience(event.target.value);
              }}
            />
            <TextField
              placeholder="address"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={address}
              onChange={(event) => {
                setaddress(event.target.value);
              }}
            />
          </div>
          <div className="profile-form-btn">
            <Button
              btnText="submit"
              primaryBtn
              onClick={profileSubmitHandler}
            />
          </div>
        </div>

        <div className="profile-form-right-sec">
          <div className="profile-form-bg" />
        </div>
      </div>
    </LayoutWrapper>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: {
      isLoggedIn,
      isLoggedInLoader,
      isLoggedInError,
      user,
      setUpStudentProfile,
      setUpStudentProfileLoader,
      setUpStudentProfileError,
    },
  } = state;

  return {
    isLoggedIn,
    isLoggedInLoader,
    isLoggedInError,
    user,
    setUpStudentProfile,
    setUpStudentProfileLoader,
    setUpStudentProfileError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUpStudentProfileAction: (payload) =>
      dispatch(jobAction.setUpStudentProfile(payload)),
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentProfileForm));
