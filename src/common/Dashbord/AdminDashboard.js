import React from "react";
import Button from "../Button";
import CompanyProfileForm from "../Form/CompanyProfileForm";
import CompanyProfileData from "../Form/CompanyProfileData";
import JobLists from "../View/JobLists";
import CampanyLists from "../View/CompanyLists";
import StudentLists from "../View/StudentList";

const AdminDashboard = ({
  viewCompanyProfiles,
  setviewCompanyProfiles,
  viewStudentProfiles,
  setviewStudentProfiles,
  viewAllJobs,
  setviewAllJobs,
}) => {
  return (
    <div className="companydashbord-container">
      <div className="btn-container mt5">
        <TabRenders
          viewCompanyProfiles={viewCompanyProfiles}
          setviewCompanyProfiles={setviewCompanyProfiles}
          viewStudentProfiles={viewStudentProfiles}
          setviewStudentProfiles={setviewStudentProfiles}
          viewAllJobs={viewAllJobs}
          setviewAllJobs={setviewAllJobs}
        />
      </div>
      <div className="dashbord-content mt5">
        {viewCompanyProfiles && <CampanyLists />}
        {viewStudentProfiles && <StudentLists />}
        {viewAllJobs && <JobLists />}
      </div>
    </div>
  );
};

export default AdminDashboard;

const TabRenders = ({
  viewCompanyProfiles,
  setviewCompanyProfiles,
  viewStudentProfiles,
  setviewStudentProfiles,
  viewAllJobs,
  setviewAllJobs,
}) => {
  return (
    <div className="btn-container mt5">
      <Button
        btnText="view companies profiles"
        width="33%"
        tabBtn
        className={viewCompanyProfiles && "active-tab"}
        onClick={() => {
          setviewCompanyProfiles(!viewCompanyProfiles);
          setviewStudentProfiles(false);
          setviewAllJobs(false);
        }}
      />
      <Button
        btnText="view students profiles"
        width="33%"
        tabBtn
        className={viewStudentProfiles && "active-tab"}
        onClick={() => {
          setviewStudentProfiles(!viewStudentProfiles);
          setviewAllJobs(false);
          setviewCompanyProfiles(false);
        }}
      />
      <Button
        btnText="view jobs"
        width="33%"
        tabBtn
        className={viewAllJobs && "active-tab"}
        onClick={() => {
          setviewAllJobs(!viewAllJobs);
          setviewCompanyProfiles(false);
          setviewStudentProfiles(false);
        }}
      />
    </div>
  );
};
