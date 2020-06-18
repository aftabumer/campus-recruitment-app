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
  SET_UP_COMPANY_PROFILE,
  SET_UP_COMPANY_PROFILE_FAILURE,
  SET_UP_COMPANY_PROFILE_SUCCESS,
  GET_COMPANY_PROFILE,
  GET_COMPANY_PROFILE_SUCCESS,
  GET_COMPANY_PROFILE_FAILURE,
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

  getCompanyProfile: null,
  getCompanyProfileLoader: false,
  getCompanyProfileError: null,

  setUpCompanyProfile: null,
  setUpCompanyProfileLoader: false,
  setUpCompanyProfileError: null,
};

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// ADD DETAIL /////////////////////////
    case ADD_JOB:
      debugger;
      return {
        ...state,
        addCategory: null,
        addCategoryLoader: true,
        addCategoryError: null,
      };
    case ADD_JOB_SUCCESS:
      debugger;
      return {
        ...state,
        addCategory: action.payload,
        addCategoryLoader: false,
        addCategoryError: null,
      };
    case ADD_JOB_FAILURE:
      debugger;
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
      debugger;
      return {
        ...state,
        getJobs: null,
        getJobsLoader: true,
        getJobsError: null,
      };
    case GET_JOBS_SUCCESS:
      debugger;
      console.log(action.payload);
      return {
        ...state,
        getJobs: action.payload,
        getJobsLoader: false,
        getJobsError: null,
      };
    case GET_JOBS_FAILURE:
      debugger;
      return {
        ...state,
        getJobs: null,
        getJobsLoader: false,
        getJobsError: action.error,
      };

    //////////////////////////SET_UP_STUDENT_PROFILE/////////////////////////
    case SET_UP_STUDENT_PROFILE:
      console.log(action.payload);
      debugger;
      return {
        ...state,
        setUpStudentProfile: null,
        setUpStudentProfileLoader: true,
        setUpStudentProfileError: null,
      };
    case SET_UP_STUDENT_PROFILE_SUCCESS:
      debugger;
      return {
        ...state,
        setUpStudentProfile: action.payload,
        setUpStudentProfileLoader: false,
        setUpStudentProfileError: null,
      };
    case SET_UP_STUDENT_PROFILE_FAILURE:
      debugger;
      return {
        ...state,
        setUpStudentProfile: null,
        setUpStudentProfileLoader: false,
        setUpStudentProfileError: action.error,
      };

    ////////////////////////// GET_COMPANY_PROFILE /////////////////////////
    case GET_COMPANY_PROFILE:
      debugger;
      return {
        ...state,
        getCompanyProfile: null,
        getCompanyProfileLoader: true,
        getCompanyProfileError: null,
      };
    case GET_COMPANY_PROFILE_SUCCESS:
      debugger;
      return {
        ...state,
        getCompanyProfile: action.payload,
        getCompanyProfileLoader: false,
        getCompanyProfileError: null,
      };
    case GET_COMPANY_PROFILE_FAILURE:
      debugger;
      return {
        ...state,
        getCompanyProfile: null,
        getCompanyProfileLoader: false,
        getCompanyProfileError: action.error,
      };

    //////////////////////////SET_UP_COMPANY_PROFILE/////////////////////////
    case SET_UP_COMPANY_PROFILE:
      console.log(action.payload);
      debugger;
      return {
        ...state,
        setUpCompanyProfile: null,
        setUpCompanyProfileLoader: true,
        setUpCompanyProfileError: null,
      };
    case SET_UP_COMPANY_PROFILE_SUCCESS:
      debugger;
      return {
        ...state,
        setUpCompanyProfile: action.payload,
        setUpCompanyProfileLoader: false,
        setUpCompanyProfileError: null,
      };
    case SET_UP_COMPANY_PROFILE_FAILURE:
      debugger;
      return {
        ...state,
        setUpCompanyProfile: null,
        setUpCompanyProfileLoader: false,
        setUpCompanyProfileError: action.error,
      };

    default:
      return state;
  }
}
