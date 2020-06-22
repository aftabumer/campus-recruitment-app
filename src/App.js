import React, { useEffect } from "react";
import Header from "./common/Header";
import Routes from "./Routing/Routes";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { jobAction } from "./store/action";

const App = ({ getJobsAction }) => {
  useEffect(() => {
    debugger;
    getJobsAction();
  }, [getJobsAction]);
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: { getUserByIdLoader, user },
    jobReducer: { getJobs, getCompanyProfile, getJobsLoader },
  } = state;

  return {
    getJobs,
    getJobsLoader,
    getUserByIdLoader,
    getCompanyProfile,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getJobsAction: (payload) => dispatch(jobAction.getJobs(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
