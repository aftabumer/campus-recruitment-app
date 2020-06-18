import React, { useState, useEffect } from "react";
import LayoutWrapper from "../LayoutWrapper";
import { withRouter } from "react-router-dom";
import { authAction } from "../../store/action";
import { connect } from "react-redux";
import CompanyDashboard from "./CompanyDashboard";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = ({ user, getUserByIdLoader, isLoggedInAction }) => {
  const [companyCreateProfile, setcompanyCreateProfile] = useState(false);
  const [companyViewProfile, setcompanyViewProfile] = useState(true);
  const [createJob, setcreateJob] = useState(false);

  const [studentCreateProfile, setstudentCreateProfile] = useState(false);
  const [studentViewProfile, setstudentViewProfile] = useState(true);
  const [viewJobs, setviewJobs] = useState(false);

  const [viewCompanyProfiles, setviewCompanyProfiles] = useState(false);
  const [viewStudentProfiles, setviewStudentProfiles] = useState(true);
  const [viewAllJobs, setviewAllJobs] = useState(false);

  return (
    <LayoutWrapper>
      <div className="dashboard-container pb5">
        <h1 className="dashbord-title mt5">
          {getUserByIdLoader && "..."}
          {user && user.roll} dashborad
        </h1>
        <>
          {user && user.roll === "company" && (
            <CompanyDashboard
              companyCreateProfile={companyCreateProfile}
              setcompanyCreateProfile={setcompanyCreateProfile}
              companyViewProfile={companyViewProfile}
              setcompanyViewProfile={setcompanyViewProfile}
              createJob={createJob}
              setcreateJob={setcreateJob}
            />
          )}
          {user && user.roll === "student" && (
            <StudentDashboard
              studentCreateProfile={studentCreateProfile}
              setstudentCreateProfile={setstudentCreateProfile}
              studentViewProfile={studentViewProfile}
              setstudentViewProfile={setstudentViewProfile}
              viewJobs={viewJobs}
              setviewJobs={setviewJobs}
            />
          )}
          {user && user.roll === "admin" && (
            <AdminDashboard
              viewCompanyProfiles={viewCompanyProfiles}
              setviewCompanyProfiles={setviewCompanyProfiles}
              viewStudentProfiles={viewStudentProfiles}
              setviewStudentProfiles={setviewStudentProfiles}
              viewAllJobs={viewAllJobs}
              setviewAllJobs={setviewAllJobs}
            />
          )}
        </>
      </div>
    </LayoutWrapper>
  );
};

const mapStateToProps = (state) => {
  const {
    authReducer: { getUserByIdLoader, user },
  } = state;

  return {
    getUserByIdLoader,
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // isLoggedInAction: (payload) => dispatch(authAction.isLoggedIn(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
