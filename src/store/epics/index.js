import { combineEpics } from "redux-observable";
import authEpic from "./authEpic";
import jobEpic from "./jobEpic";

const rootEpic = combineEpics(
  authEpic.signup,
  authEpic.login,
  authEpic.logout,
  authEpic.isLoggedIn,
  //   authEpic.getUsers,
  //   authEpic.getUserById
  jobEpic.addJob,
  jobEpic.getJob,
  jobEpic.getJobs,
  jobEpic.setUpStudentProfile,
);

export default rootEpic;
