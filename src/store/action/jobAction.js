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

export class jobAction {
  static addJob(payload) {
    return {
      type: ADD_JOB,
      payload,
    };
  }
  static addJobSuccess(payload) {
    return {
      type: ADD_JOB_SUCCESS,
      payload,
    };
  }
  static addJobFailure(error) {
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
    return {
      type: SET_UP_STUDENT_PROFILE,
      payload,
    };
  }
  static setUpStudentProfileSuccess(payload) {
    return {
      type: SET_UP_STUDENT_PROFILE_SUCCESS,
      payload,
    };
  }
  static setUpStudentProfileFailure(error) {
    return {
      type: SET_UP_STUDENT_PROFILE_FAILURE,
      error,
    };
  }
}
