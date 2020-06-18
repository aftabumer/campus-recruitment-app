import React, { useState, useEffect } from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { jobAction, authAction } from "../../store/action";

const CompanyProfileForm = ({
  history,
  isLoggedInAction,
  user,
  setUpCompanyProfileAction,
}) => {
  const [companyName, setcompanyName] = useState("");
  const [email, setemail] = useState("");
  const [website, setwebsite] = useState("");
  const [contactNumber, setcontactNumber] = useState("");
  const [address, setaddress] = useState("");

  // useEffect(() => {
  //   console.log(isLoggedInAction);
  //   isLoggedInAction();
  // }, [isLoggedInAction]);

  const profileSubmitHandler = () => {
    debugger;
    setUpCompanyProfileAction({
      companyName: companyName,
      email: email,
      website: website,
      contactNumber: contactNumber,
      address: address,
      companyId: user && user.uid,
    });
  };

  return (
    <div className="profile-form-container">
      <div className="profile-form-left-sec">
        <h1 className="profile-form-title m5">Company Profile Form</h1>
        <div className="profile-form-fields">
          <TextField
            placeholder="company name"
            className="profile-field"
            textFieldClass="text-field"
            type="text"
            value={companyName}
            onChange={(event) => {
              setcompanyName(event.target.value);
            }}
          />
          <TextField
            placeholder="email address"
            className="profile-field"
            textFieldClass="text-field"
            type="text"
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <TextField
            placeholder="website"
            className="profile-field"
            textFieldClass="text-field"
            type="text"
            value={website}
            onChange={(event) => {
              setwebsite(event.target.value);
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
            placeholder="adrees"
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
          <Button btnText="submit" primaryBtn onClick={profileSubmitHandler} />
        </div>
      </div>

      <div className="profile-form-right-sec">
        <div className="profile-form-bg" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: {
      isLoggedIn,
      isLoggedInLoader,
      isLoggedInError,
      user,
      setUpCompanyProfile,
      setUpCompanyProfileLoader,
      setUpCompanyProfileError,
    },
  } = state;

  return {
    isLoggedIn,
    isLoggedInLoader,
    isLoggedInError,
    user,
    setUpCompanyProfile,
    setUpCompanyProfileLoader,
    setUpCompanyProfileError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUpCompanyProfileAction: (payload) =>
      dispatch(jobAction.setUpCompanyProfile(payload)),
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyProfileForm));
