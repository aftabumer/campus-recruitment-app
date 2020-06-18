import React from "react";
import Button from "../Button";
import StudentProfileForm from "../Form/StudentProfileForm";
import CompanyProfileData from "../Form/CompanyProfileData";
import JobLists from "../View/JobLists";

const StudentDashboard = ({
  studentCreateProfile,
  setstudentCreateProfile,
  studentViewProfile,
  setstudentViewProfile,
  viewJobs,
  setviewJobs,
}) => {
  return (
    <div className="companydashbord-container">
      <div className="btn-container mt5">
        <TabRenders
          studentCreateProfile={studentCreateProfile}
          setstudentCreateProfile={setstudentCreateProfile}
          studentViewProfile={studentViewProfile}
          setstudentViewProfile={setstudentViewProfile}
          viewJobs={viewJobs}
          setviewJobs={setviewJobs}
        />
      </div>
      <div className="dashbord-content mt5">
        {studentCreateProfile && <StudentProfileForm />}
        {studentViewProfile && <CompanyProfileData />}
        {viewJobs && <JobLists />}
      </div>
    </div>
  );
};

export default StudentDashboard;

const TabRenders = ({
  studentCreateProfile,
  setstudentCreateProfile,
  studentViewProfile,
  setstudentViewProfile,
  viewJobs,
  setviewJobs,
}) => {
  return (
    <div className="btn-container mt5">
      <Button
        btnText="create profile"
        width="33%"
        tabBtn
        className={studentCreateProfile && "active-tab"}
        onClick={() => {
          setstudentCreateProfile(!studentCreateProfile);
          setstudentViewProfile(false);
          setviewJobs(false);
        }}
      />
      <Button
        btnText="view profile"
        width="33%"
        tabBtn
        className={studentViewProfile && "active-tab"}
        onClick={() => {
          setstudentViewProfile(!studentViewProfile);
          setviewJobs(false);
          setstudentCreateProfile(false);
        }}
      />
      <Button
        btnText="view jobs"
        width="33%"
        tabBtn
        className={viewJobs && "active-tab"}
        onClick={() => {
          setviewJobs(!viewJobs);
          setstudentCreateProfile(false);
          setstudentViewProfile(false);
        }}
      />
    </div>
  );
};
