import React from "react";

const StudentCard = ({ getStudentProfile }) => {
  return (
    <div className="job-card-container p5 br2">
      <div className="job-card-top-sec">
        <h1 className="job-card-tittle">
          {getStudentProfile.firstName + "" + getStudentProfile.lastName}
        </h1>
        <p className="job-card-description mt2 mb2" style={{ height: "auto" }}>
          {getStudentProfile.address}
        </p>
        <p className="job-card-description" style={{ height: "auto" }}>
          {getStudentProfile.website}
        </p>
      </div>
      <div className="job-card-bottom-sec">
        <p className="job-card-requriment">{getStudentProfile.email}</p>
        <hr className="break-line" />
        <p className="job-card-experience">{getStudentProfile.contactNumber}</p>
      </div>
    </div>
  );
};

export default StudentCard;
