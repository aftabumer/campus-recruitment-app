import React, { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import TextField from "../TextField";
import Button from "../Button";
import SelectOption from "../SelectOption";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authAction } from "../../store/action";

const SignUpForm = ({ history, signupAction }) => {
  const rolls = ["admin", "company", "student"];

  const [selectedRoll, setSelectedRoll] = useState("admin");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signupSubmitHandler = () => {
    debugger;
    signupAction({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      roll: selectedRoll,
    });

    history.push("/");
  };

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
                  value={firstName}
                  onChange={(event) => {
                    setfirstName(event.target.value);
                  }}
                />
                <TextField
                  placeholder="last name"
                  className="f-l-name-field"
                  value={lastName}
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                />
              </div>

              <TextField
                placeholder="email"
                type="email"
                className="email-field"
                value={email}
                onChange={(event) => {
                  setemail(event.target.value);
                }}
              />
              <TextField
                placeholder="password"
                type="password"
                className="password-field"
                value={password}
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
              />
            </div>
            <div className="sign-up-btn-sec">
              <Button
                btnText="already account"
                secondaryBtn
                onClick={() => history.push("/login")}
              />
              <Button
                btnText="sign up"
                primaryBtn
                onClick={signupSubmitHandler}
              />
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

const mapStateToProps = (state) => {
  const {
    authReducer: { signup, signupLoader, signupError },
  } = state;

  return {
    signup,
    signupLoader,
    signupError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupAction: (payload) => dispatch(authAction.signup(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpForm));
