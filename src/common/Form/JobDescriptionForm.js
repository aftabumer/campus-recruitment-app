import React, { useEffect, useState } from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";
import { jobAction, authAction } from "../../store/action";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const JobDescriptionForm = ({
  history,
  isLoggedInAction,
  user,
  addJobAction,
}) => {
  const [jobTitle, setjobTitle] = useState("");
  const [jobDescription, setjobDescription] = useState("");
  const [experiences, setexperiences] = useState("");
  const [requriment, setrequriment] = useState("");

  useEffect(() => {
    console.log(isLoggedInAction);
    isLoggedInAction();
  }, [isLoggedInAction]);

  const jobSubmitHandler = () => {
    debugger;
    addJobAction({
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      experiences: experiences,
      requriment: requriment,
      jobId: user && user.uid,
    });
  };

  return (
    <LayoutWrapper>
      <div className="profile-form-container">
        <div className="profile-form-left-sec">
          <h1 className="profile-form-title m5">Job Description Form</h1>
          <div className="profile-form-fields">
            <TextField
              placeholder="job title"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={jobTitle}
              onChange={(event) => {
                setjobTitle(event.target.value);
              }}
            />
            <TextField
              placeholder="job description"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={jobDescription}
              onChange={(event) => {
                setjobDescription(event.target.value);
              }}
            />
            <TextField
              placeholder="experience"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={experiences}
              onChange={(event) => {
                setexperiences(event.target.value);
              }}
            />
            <TextField
              placeholder="requriment"
              className="profile-field"
              textFieldClass="text-field"
              type="text"
              value={requriment}
              onChange={(event) => {
                setrequriment(event.target.value);
              }}
            />
          </div>
          <div className="profile-form-btn">
            <Button btnText="submit" primaryBtn onClick={jobSubmitHandler} />
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
      addJob,
      addJobLoader,
      addJobError,
    },
  } = state;

  return {
    isLoggedIn,
    isLoggedInLoader,
    isLoggedInError,
    user,
    addJob,
    addJobLoader,
    addJobError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addJobAction: (payload) => dispatch(jobAction.addJob(payload)),
    isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobDescriptionForm));
