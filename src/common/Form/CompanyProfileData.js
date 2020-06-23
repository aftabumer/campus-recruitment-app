import React, { useEffect } from "react";
import { jobAction } from "../../store/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CompanyProfileData = ({
  history,
  match,
  getCompanyProfile,
  getCompanyProfileAction,
  user,
  getJobsAction,
  getJobs,
}) => {
  // useEffect(() => {
  //   debugger;
  //   const profileId = user && user.id;
  //   debugger;
  //   if (profileId) {
  //     getCompanyProfileAction({ id: profileId });
  //   }
  // }, [getCompanyProfileAction]);

  // useEffect(() => {
  //   debugger;
  //   getJobsAction();
  // }, [getJobsAction]);
  console.log(getCompanyProfile && getCompanyProfile);
  console.log(getJobs && getJobs);
  return (
    <div className="company-profile-data-container">
      <h1>profile data</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: { getUserByIdLoader, user },
    jobReducer: { getJobs, getCompanyProfile },
  } = state;

  return {
    getJobs,
    getUserByIdLoader,
    getCompanyProfile,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getCompanyProfileAction: (payload) =>
    //   dispatch(jobAction.getCompanyProfile(payload)),
    // getJobsAction: (payload) => dispatch(jobAction.getJobs(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyProfileData));
