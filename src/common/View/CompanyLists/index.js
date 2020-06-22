import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { jobAction } from "../../../store/action";
import CompanyCard from "./CompanyCard";

const CampanyLists = ({
  getCompanyProfileAction,
  getCompanyProfiles,
  getCompanyProfilesLoader,
}) => {
  useEffect(() => {
    debugger;
    getCompanyProfileAction();
  }, [getCompanyProfileAction]);

  return (
    <div className="job-list-container">
      {getCompanyProfilesLoader && "loading"}
      {getCompanyProfiles &&
        getCompanyProfiles.map((getCompanyProfile) => (
          <div className="job-lists mb5">
            <CompanyCard getCompanyProfile={getCompanyProfile} />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    jobReducer: { getCompanyProfiles, getCompanyProfilesLoader },
  } = state;

  return {
    getCompanyProfiles,
    getCompanyProfilesLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyProfileAction: (payload) =>
      dispatch(jobAction.getCompanyProfiles(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CampanyLists));
