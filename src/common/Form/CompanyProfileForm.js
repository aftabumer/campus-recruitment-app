import React from "react";
import TextField from "../TextField";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button";

const CompanyProfileForm = () => {
  return (
    <LayoutWrapper>
      <div className="profile-form-container">
        <div className="profile-form-left-sec">
          <h1 className="profile-form-title m5">Company Profile Form</h1>
          <div className="profile-form-fields">
            <TextField
              placeholder="company name"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="email address"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="website"
              className="profile-field"
              textFieldClass="text-field"
            />
            <TextField
              placeholder="contact number"
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

export default CompanyProfileForm;
