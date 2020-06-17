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
} from "../constants";

export class jobAction {
  static addJob(payload) {
    debugger;
    return {
      type: ADD_JOB,
      payload,
    };
  }
  static addJobSuccess(payload) {
    debugger;
    return {
      type: ADD_JOB_SUCCESS,
      payload,
    };
  }
  static addJobFailure(error) {
    debugger;
    return {
      type: ADD_JOB_FAILURE,
      error,
    };
  }

  static getJob(payload) {
    return {
      type: GET_JOB,
      payload,
    };
  }
  static getJobSuccess(payload) {
    return {
      type: GET_JOB_SUCCESS,
      payload,
    };
  }
  static getJobFailure(error) {
    return {
      type: GET_JOB_FAILURE,
      error,
    };
  }

  static getJobs(payload) {
    return {
      type: GET_JOBS,
      payload,
    };
  }
  static getJobsSuccess(payload) {
    return {
      type: GET_JOBS_SUCCESS,
      payload,
    };
  }
  static getJobsFailure(error) {
    return {
      type: GET_JOBS_FAILURE,
      error,
    };
  }

  static setUpStudentProfile(payload) {
    debugger;
    return {
      type: SET_UP_STUDENT_PROFILE,
      payload,
    };
  }
  static setUpStudentProfileSuccess(payload) {
    debugger;
    return {
      type: SET_UP_STUDENT_PROFILE_SUCCESS,
      payload,
    };
  }
  static setUpStudentProfileFailure(error) {
    debugger;
    return {
      type: SET_UP_STUDENT_PROFILE_FAILURE,
      error,
    };
  }

  static setUpCompanyProfile(payload) {
    debugger;
    return {
      type: SET_UP_COMPANY_PROFILE,
      payload,
    };
  }
  static setUpCompanyProfileSuccess(payload) {
    debugger;
    return {
      type: SET_UP_COMPANY_PROFILE_SUCCESS,
      payload,
    };
  }
  static setUpCompanyProfileFailure(error) {
    debugger;
    return {
      type: SET_UP_COMPANY_PROFILE_FAILURE,
      error,
    };
  }
}
