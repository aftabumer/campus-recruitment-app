import React from "react";
import Button from "../Button";
import CompanyProfileForm from "../Form/CompanyProfileForm";
import JobDescriptionForm from "../Form/JobDescriptionForm";
import CompanyProfileData from "../Form/CompanyProfileData";

const CompanyDashboard = ({
  companyCreateProfile,
  setcompanyCreateProfile,
  companyViewProfile,
  setcompanyViewProfile,
  createJob,
  setcreateJob,
}) => {
  return (
    <div className="companydashbord-container">
      <div className="btn-container mt5">
        <TabRenders
          companyCreateProfile={companyCreateProfile}
          setcompanyCreateProfile={setcompanyCreateProfile}
          companyViewProfile={companyViewProfile}
          setcompanyViewProfile={setcompanyViewProfile}
          createJob={createJob}
          setcreateJob={setcreateJob}
        />
      </div>
      <div className="dashbord-content mt5">
        {companyCreateProfile && <CompanyProfileForm />}
        {companyViewProfile && <CompanyProfileData />}
        {createJob && <JobDescriptionForm />}
      </div>
    </div>
  );
};

export default CompanyDashboard;

const TabRenders = ({
  companyCreateProfile,
  setcompanyCreateProfile,
  companyViewProfile,
  setcompanyViewProfile,
  createJob,
  setcreateJob,
}) => {
  return (
    <div className="btn-container mt5">
      <Button
        btnText="create profile"
        width="33%"
        tabBtn
        className={companyCreateProfile && "active-tab"}
        onClick={() => {
          setcompanyCreateProfile(!companyCreateProfile);
          setcompanyViewProfile(false);
          setcreateJob(false);
        }}
      />
      <Button
        btnText="view profile"
        width="33%"
        tabBtn
        className={companyViewProfile && "active-tab"}
        onClick={() => {
          setcompanyViewProfile(!companyViewProfile);
          setcreateJob(false);
          setcompanyCreateProfile(false);
        }}
      />
      <Button
        btnText="create jobs"
        width="33%"
        tabBtn
        className={createJob && "active-tab"}
        onClick={() => {
          setcreateJob(!createJob);
          setcompanyCreateProfile(false);
          setcompanyViewProfile(false);
        }}
      />
    </div>
  );
};
