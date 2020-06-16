import {
  ADD_JOB,
  ADD_JOB_SUCCESS,
  ADD_JOB_FAILURE,
  GET_JOB,
  GET_JOB_FAILURE,
  GET_JOB_SUCCESS,
  GET_JOBS,
  GET_JOBS_FAILURE,
  GET_JOBS_SUCCESS,
  SET_UP_STUDENT_PROFILE,
  SET_UP_STUDENT_PROFILE_FAILURE,
  SET_UP_STUDENT_PROFILE_SUCCESS,
} from "../constants";

const initialState = {
  addJob: null,
  addJobLoader: false,
  addJobError: null,

  getJob: null,
  getJobLoader: false,
  getJobError: null,

  getJobs: null,
  getJobsLoader: false,
  getJobsError: null,

  setUpStudentProfile: null,
  setUpStudentProfileLoader: false,
  setUpStudentProfileError: null,
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// ADD DETAIL /////////////////////////
    case ADD_JOB:
      return {
        ...state,
        addCategory: null,
        addCategoryLoader: true,
        addCategoryError: null,
      };
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        addCategory: action.payload,
        addCategoryLoader: false,
        addCategoryError: null,
      };
    case ADD_JOB_FAILURE:
      return {
        ...state,
        addCategory: null,
        addCategoryLoader: false,
        addCategoryError: action.error,
      };

    ////////////////////////// GET_JOB /////////////////////////
    case GET_JOB:
      return {
        ...state,
        getJob: null,
        getJobLoader: true,
        getJobError: null,
      };
    case GET_JOB_SUCCESS:
      return {
        ...state,
        getJob: action.payload,
        getJobLoader: false,
        getJobError: null,
      };
    case GET_JOB_FAILURE:
      return {
        ...state,
        getJob: null,
        getJobLoader: false,
        getJobError: action.error,
      };

    //////////////////////////GET_JOBS/////////////////////////
    case GET_JOBS:
      return {
        ...state,
        getJobs: null,
        getJobsLoader: true,
        getJobsError: null,
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        getJobs: action.payload,
        getJobsLoader: false,
        getJobsError: null,
      };
    case GET_JOBS_FAILURE:
      return {
        ...state,
        getJobs: null,
        getJobsLoader: false,
        getJobsError: action.error,
      };

    //////////////////////////SET_UP_STUDENT_PROFILE/////////////////////////
    case SET_UP_STUDENT_PROFILE:  
      return {
        ...state,
        setUpStudentProfile: null,
        setUpStudentProfileLoader: true,
        setUpStudentProfileError: null,
      };
    case SET_UP_STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        setUpStudentProfile: action.payload,
        setUpStudentProfileLoader: false,
        setUpStudentProfileError: null,
      };
    case SET_UP_STUDENT_PROFILE_FAILURE:
      return {
        ...state,
        setUpStudentProfile: null,
        setUpStudentProfileLoader: false,
        setUpStudentProfileError: action.error,
      };

    default:
      return state;
  }
}
