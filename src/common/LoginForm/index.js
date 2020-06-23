import React, { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import ImageText from "../ImageText";
import TextField from "../TextField";
import Button from "../Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { authAction } from "../../store/action";

const LoginForm = ({ history, loginAction }) => {
  const [selectRoll, setSelectRoll] = useState("admin");
  const loginAs = [
    { title: "admin", icon: require("./../../assets/img-icon/admin.png") },
    { title: "company", icon: require("./../../assets/img-icon/company.png") },
    { title: "student", icon: require("./../../assets/img-icon/student.png") },
  ];

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginSubmitHandler = () => {
    debugger;
    loginAction({
      email: email,
      password: password,
      // roll: selectRoll,
    });

    history.push("/");
  };

  return (
    <LayoutWrapper>
      <div className="login-form-container">
        <div className="login-form-left-sec">
          {/* <ImageText
              tilte={loginAs[0].title}
              icon={loginAs[0].icon}
              onClick={() => {
                setSelectRoll("admin");
              }}
              className={selectRoll === "admin" && "active-roll"}
            />
            <ImageText
              tilte={loginAs[1].title}
              icon={loginAs[1].icon}
              onClick={() => {
                setSelectRoll("campany");
              }}
              className={selectRoll === "campany" && "active-roll"}
            />
            <ImageText
              tilte={loginAs[2].title}
              icon={loginAs[2].icon}
              onClick={() => {
                setSelectRoll("student");
              }}
              className={selectRoll === "student" && "active-roll"}
            /> */}
          {/* {loginAs.map((item) => (
            <ImageText tilte={item.title} icon={item.icon} />
          ))} */}
        </div>
        <div className="login-form-right-sec">
          <div className="login-form-content">
            <p className="login-form-text">login</p>
            {/* <p className="login-form-text">login as {selectRoll}</p> */}
            <TextField
              placeholder="email"
              type="email"
              className="login-field"
              value={email}
              onChange={(event) => {
                setemail(event.target.value);
              }}
            />
            <TextField
              placeholder="password"
              type="password"
              className="login-field"
              value={password}
              onChange={(event) => {
                setpassword(event.target.value);
              }}
            />
            <div className="login-btn-container">
              <Button btnText="login" primaryBtn onClick={loginSubmitHandler} />
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: { login, loginLoader, loginError },
  } = state;

  return {
    login,
    loginLoader,
    loginError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (payload) => dispatch(authAction.login(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
