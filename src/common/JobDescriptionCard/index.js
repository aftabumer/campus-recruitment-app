import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";

const JobDescriptionCard = ({
  jobTitle,
  jobDiscription,
  jobIcon,
  bgColor,
  history,
}) => {
  return (
    <div
      className="jd-card-container"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="jd-left-sec">
        <div
          className="jd-icon"
          style={{ backgroundImage: `url(${jobIcon})` }}
        />
      </div>
      <div className="jd-right-sec">
        <h1 className="job-title">{jobTitle}</h1>
        <p className="job-description">{jobDiscription}</p>
        <div className="btn-sec">
          <Button secondaryBtn btnText="read more" />
          <Button
            primaryBtn
            btnText="apply"
            onClick={() => history.push("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(JobDescriptionCard);
