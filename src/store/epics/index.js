import { combineEpics } from "redux-observable";
import authEpic from "./authEpic";
import jobEpic from "./jobEpic";

const rootEpic = combineEpics(
  authEpic.signup,
  authEpic.login,
  authEpic.logout,
  authEpic.isLoggedIn,
  authEpic.getUserById,
  jobEpic.addJob,
  jobEpic.setUpCompanyProfile,
  jobEpic.setUpStudentProfile,
  // jobEpic.getCompanyProfile,com
  jobEpic.getCompanyProfiles,
  jobEpic.getStudentProfiles,
  jobEpic.getJobs
);

export default rootEpic;
