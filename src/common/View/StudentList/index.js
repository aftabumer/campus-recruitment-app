import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { jobAction } from "../../../store/action";
import StudentCard from "./StudentCard";

const StudentLists = ({
  getStudentProfileAction,
  getStudentProfiles,
  getStudentProfilesLoader,
}) => {
  useEffect(() => {
    debugger;
    getStudentProfileAction();
  }, [getStudentProfileAction]);

  return (
    <div className="job-list-container">
      {getStudentProfilesLoader && "loading"}
      {getStudentProfiles &&
        getStudentProfiles.map((getStudentProfile) => (
          <div className="job-lists mb5">
            <StudentCard getStudentProfile={getStudentProfile} />
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    jobReducer: { getStudentProfiles, getStudentProfilesLoader },
  } = state;

  return {
    getStudentProfiles,
    getStudentProfilesLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStudentProfileAction: (payload) =>
      dispatch(jobAction.getStudentProfiles(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StudentLists));
