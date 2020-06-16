import React, { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import TextField from "../TextField";
import Button from "../Button";
import SelectOption from "../SelectOption";

const SignUpForm = () => {
  const rolls = ["admin", "company", "student"];
  const [selectedRoll, setSelectedRoll] = useState();
  return (
    <LayoutWrapper>
      <div className="sign-up-form-container">
        <div className="sign-up-form-left-sec">
          <div className="sign-up-form-contant">
            <h1 className="sign-up-heading">sign up</h1>
            <p className="sign-up-detail-text">
              please fill in this form to create an account
            </p>
            <hr className="sign-up-break-line" />

            <div className="form-fileds">
              <div className="roll-section">
                <p className="roll-selection-message">
                  please select your roll:
                </p>
                <div className="roll-select-option">
                  <SelectOption
                    value={selectedRoll}
                    onChange={(event) => setSelectedRoll(event.target.value)}
                    SelectOptions={rolls.map((roll) => {
                      return {
                        key: roll,
                        value: roll,
                      };
                    })}
                  />
                </div>
              </div>

              <div className="name-field">
                <TextField
                  placeholder="first name"
                  className="f-l-name-field"
                />
                <TextField placeholder="last name" className="f-l-name-field" />
              </div>

              <TextField
                placeholder="email"
                type="email"
                className="email-field"
              />
              <TextField
                placeholder="password"
                type="password"
                className="password-field"
              />
            </div>
            <div className="sign-up-btn-sec">
              <Button btnText="already account" secondaryBtn />
              <Button btnText="sign up" primaryBtn />
            </div>
          </div>
        </div>
        <div className="sign-up-form-right-sec">
          <div className="sign-up-bg" />
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default SignUpForm;
