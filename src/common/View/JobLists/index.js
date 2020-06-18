import React, { useEffect } from "react";
import JobCard from "./JobCard";
import { connect } from "react-redux";
import { jobAction } from "../../../store/action";
import { withRouter } from "react-router-dom";

const JobLists = ({ getJobs, getJobsAction }) => {
  useEffect(() => {
    debugger;
    getJobsAction();
  }, [getJobsAction]);

  return (
      <div className="job-list-container">
        {getJobs &&
          getJobs.map((getJob) => (
            <div className="job-lists mb5">
              <JobCard
                title={getJob.jobTitle}
                description={getJob.jobDescription}
                experience={getJob.experiences}
                requriments={getJob.requriment}
              />
            </div>
          ))}
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
    getJobsAction: (payload) => dispatch(jobAction.getJobs(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(JobLists));
