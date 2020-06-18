import React from "react";
import Button from "../Button";
import { withRouter } from "react-router-dom";
import JobIcon from "./../../assets/img-icon/jd.png";

const JobDescriptionCard = ({
  jobTitle,
  jobDescription,
  jobExperiences,
  jobRequriment,
  jobIcon,
  bgColor,
  history,
}) => {
  return (
    <div className="jd-card-container" style={{ backgroundColor: `#a9b5be` }}>
      <div className="jd-left-sec">
        <div
          className="jd-icon"
          style={{ backgroundImage: `url(${JobIcon})` }}
        />
      </div>
      <div className="jd-right-sec">
        <h1 className="job-title">{jobTitle}</h1>
        <p className="job-description">{jobDescription}</p>
        <p className="job-experience">{jobExperiences}</p>
        <p className="job-requriment">{jobRequriment}</p>
        <div className="btn-sec">
          <Button
            primaryBtn
            btnText="apply"
            // onClick={() => history.push("/login")}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(JobDescriptionCard);
