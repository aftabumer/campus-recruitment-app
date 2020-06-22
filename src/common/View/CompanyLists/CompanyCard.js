import React from "react";

const CompanyCard = ({ getCompanyProfile }) => {
  console.log("company profiles", getCompanyProfile);
  return (
    <div className="job-card-container p5 br2">
      <div className="job-card-top-sec">
        <h1 className="job-card-tittle">{getCompanyProfile.companyName}</h1>
        <p className="job-card-description mt2 mb2" style={{ height: "auto" }}>
          {getCompanyProfile.address}
        </p>
        <p className="job-card-description" style={{ height: "auto" }}>
          {getCompanyProfile.website}
        </p>
      </div>
      <div className="job-card-bottom-sec">
        <p className="job-card-requriment">{getCompanyProfile.email}</p>
        <hr className="break-line" />
        <p className="job-card-experience">{getCompanyProfile.contactNumber}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
