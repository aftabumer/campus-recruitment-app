import React from "react";
import JobDescriptionCard from "../JobDescriptionCard";
import LayoutWrapper from "../LayoutWrapper";

const JobCardsList = () => {
  return (
    <LayoutWrapper>
      <div className="job-card-list-container">
        {jobLists.map((jobList) => (
          <div className="job-card-list-section">
            <JobDescriptionCard
              jobTitle={jobList.title}
              jobDiscription={jobList.description}
              jobIcon={jobList.jobIcon}
              bgColor={jobList.bgColor}
            />
          </div>
        ))}
      </div>
    </LayoutWrapper>
  );
};

export default JobCardsList;

const jobLists = [
  {
    title: "chemist",
    description:
      "A chemist searches for new knowledge about chemicals and uses it to improve the way we live. He or she may develop products such as synthetic fibers, drugs, and cosmetics. Chemists create processes, including oil refining and petrochemical processing, that reduce energy use and pollution.",
    jobIcon: require("./../../assets/img-icon/chemistry.png"),
    bgColor: "#a9b5be",
  },
  {
    title: "computer programmers",
    description:
      "Supervise computer programmers or other systems analysts or serve as project leaders for particular systems projects.",
    jobIcon: require("./../../assets/img-icon/computer.png"),
    bgColor: "#83E94F",
  },
  {
    title: "analysis",
    description:
      "Use the computer in     the analysis and solution of business problems, such as development of integrated production and inventory control and cost analysis systems.",
    jobIcon: require("./../../assets/img-icon/analysis.png"),
    bgColor: "#897EB9",
  },
  {
    title: "Strategies Expert",
    description:
      "Drafting, Laying Out, and Specifying Technical Devices, Parts, and Equipment - Providing documentation, detailed instructions, drawings, or specifications to tell others about how devices, parts, equipment, or structures are to be fabricated, constructed, assembled, modified, maintained, or used.",
    jobIcon: require("./../../assets/img-icon/strategies.png"),
    bgColor: "#B4CB95",
  },
  {
    title: "chemist",
    description:
      "A chemist searches for new knowledge about chemicals and uses it to improve the way we live. He or she may develop products such as synthetic fibers, drugs, and cosmetics. Chemists create processes, including oil refining and petrochemical processing, that reduce energy use and pollution.",
    jobIcon: require("./../../assets/img-icon/chemistry.png"),
    bgColor: "#a9b5be",
  },
  {
    title: "computer programmers",
    description:
      "Supervise computer programmers or other systems analysts or serve as project leaders for particular systems projects.",
    jobIcon: require("./../../assets/img-icon/computer.png"),
    bgColor: "#83E94F",
  },
  {
    title: "analysis",
    description:
      "Use the computer in     the analysis and solution of business problems, such as development of integrated production and inventory control and cost analysis systems.",
    jobIcon: require("./../../assets/img-icon/analysis.png"),
    bgColor: "#897EB9",
  },
  {
    title: "Strategies Expert",
    description:
      "Drafting, Laying Out, and Specifying Technical Devices, Parts, and Equipment - Providing documentation, detailed instructions, drawings, or specifications to tell others about how devices, parts, equipment, or structures are to be fabricated, constructed, assembled, modified, maintained, or used.",
    jobIcon: require("./../../assets/img-icon/strategies.png"),
    bgColor: "#B4CB95",
  },
  {
    title: "chemist",
    description:
      "A chemist searches for new knowledge about chemicals and uses it to improve the way we live. He or she may develop products such as synthetic fibers, drugs, and cosmetics. Chemists create processes, including oil refining and petrochemical processing, that reduce energy use and pollution.",
    jobIcon: require("./../../assets/img-icon/chemistry.png"),
    bgColor: "#a9b5be",
  },
  {
    title: "computer programmers",
    description:
      "Supervise computer programmers or other systems analysts or serve as project leaders for particular systems projects.",
    jobIcon: require("./../../assets/img-icon/computer.png"),
    bgColor: "#83E94F",
  },
  {
    title: "analysis",
    description:
      "Use the computer in     the analysis and solution of business problems, such as development of integrated production and inventory control and cost analysis systems.",
    jobIcon: require("./../../assets/img-icon/analysis.png"),
    bgColor: "#897EB9",
  },
  {
    title: "Strategies Expert",
    description:
      "Drafting, Laying Out, and Specifying Technical Devices, Parts, and Equipment - Providing documentation, detailed instructions, drawings, or specifications to tell others about how devices, parts, equipment, or structures are to be fabricated, constructed, assembled, modified, maintained, or used.",
    jobIcon: require("./../../assets/img-icon/strategies.png"),
    bgColor: "#B4CB95",
  },
];
