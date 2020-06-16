import React from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";

const JobDescriptionForm = () => {
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
            />
            <TextField
              placeholder="job description"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="experience"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="requriment"
              className="profile-field"
              textFieldClass="text-field"
            />
          </div>
          <div className="profile-form-btn">
            <Button btnText="submit" primaryBtn />
          </div>
        </div>

        <div className="profile-form-right-sec">
          <div className="profile-form-bg" />
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default JobDescriptionForm;
