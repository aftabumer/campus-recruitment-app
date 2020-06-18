import React from "react";
import { Switch, Route } from "react-router-dom";
import JobCardsList from "../common/JobCardsList";
import SignUpForm from "../common/SignUpForm";
import LoginForm from "../common/LoginForm";
import StudentProfileForm from "../common/Form/StudentProfileForm";
import CompanyProfileForm from "../common/Form/CompanyProfileForm";
import JobDescriptionForm from "../common/Form/JobDescriptionForm";
import Dashboard from "../common/Dashbord";

const Routes = ({ childProps }) => {
  return (
    <Switch>
      <Route exact path="/" component={JobCardsList} props={childProps} />
      <Route path="/sign-up" component={SignUpForm} props={childProps} />
      <Route path="/login" component={LoginForm} props={childProps} />
      <Route
        path="/student-profile-form"
        component={StudentProfileForm}
        props={childProps}
      />
      <Route
        path="/company-profile-form"
        component={CompanyProfileForm}
        props={childProps}
      />
      <Route
        path="/job-description-form"
        component={JobDescriptionForm}
        props={childProps}
      />
      <Route path="/dashboard" component={Dashboard} props={childProps} />
    </Switch>
  );
};
export default Routes;
