import React from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";

const StudentProfileForm = () => {
  return (
    <LayoutWrapper>
      <div className="profile-form-container">
        <div className="profile-form-left-sec">
          <h1 className="profile-form-title m5">Student Profile Form</h1>
          <div className="profile-form-fields">
            <TextField
              placeholder="first name"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="last name"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="contact number"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="email address"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="qulification"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="experience"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="adrees"
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

export default StudentProfileForm;
