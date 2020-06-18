import React from "react";

const JobCard = ({ title, description, requriments, experience }) => {
  return (
    <div className="job-card-container p5 br2">
      <div className="job-card-top-sec">
        <h1 className="job-card-tittle">{title}</h1>
        <p className="job-card-description mt2 mb2">{description}</p>
      </div>
      <div className="job-card-bottom-sec">
        <p className="job-card-requriment">{requriments}</p>
        <hr className="break-line" />
        <p className="job-card-experience">{experience}</p>
      </div>
    </div>
  );
};

export default JobCard;
