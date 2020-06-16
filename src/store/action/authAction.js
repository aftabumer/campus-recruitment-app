import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  IS_LOGGED_IN,
  IS_LOGGED_IN_FAILURE,
  IS_LOGGED_IN_SUCCESS,
  // GET_USERS,
  // GET_USERS_FAILURE,
  // GET_USERS_SUCCESS,
  // GET_USER_BY_ID,
  // GET_USER_BY_ID_FAILURE,
  // GET_USER_BY_ID_SUCCESS,
} from "../constants";

export class authAction {
  ////////////////////////  SIGNUP  ////////////////////
  static signup(payload) {
    return {
      type: SIGNUP,
      payload,
    };
  }
  static signupSuccess(payload) {
    return {
      type: SIGNUP_SUCCESS,
      payload,
    };
  }
  static signupFailure(error) {
    return {
      type: SIGNUP_FAILURE,
      error,
    };
  }

  /////////////LOGIN//////////////////////////

  static login(payload) {
    return {
      type: LOGIN,
      payload,
    };
  }

  static loginSuccess(payload) {
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  }

  static loginFailure(error) {
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }

  ////////////////////////  LOGOUT  ////////////////////
  static logout(payload) {
    return {
      type: LOGOUT,
      payload,
    };
  }
  static logoutSuccess(payload) {
    return {
      type: LOGOUT_SUCCESS,
      payload,
    };
  }
  static logoutFailure(error) {
    return {
      type: LOGOUT_FAILURE,
      error,
    };
  }

  ///////////// isLoggin //////////////
  static isLoggedIn(payload) {
    return {
      type: IS_LOGGED_IN,
      payload,
    };
  }

  static isLoggedInSuccess(payload) {
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload,
    };
  }

  static isLoggedInFailure(error) {
    return {
      type: IS_LOGGED_IN_FAILURE,
      error,
    };
  }

  // static getUsers(payload) {
  //   return {
  //     type: GET_USERS,
  //     payload,
  //   };
  // }
  // static getUsersSuccess(payload) {
  //   return {
  //     type: GET_USERS_SUCCESS,
  //     payload,
  //   };
  // }
  // static getUsersFailure(error) {
  //   return {
  //     type: GET_USERS_FAILURE,
  //     error,
  //   };
  // }

  // static getUserById(payload) {
  //   return {
  //     type: GET_USER_BY_ID,
  //     payload,
  //   };
  // }
  // static getUserByIdSuccess(payload) {
  //   return {
  //     type: GET_USER_BY_ID_SUCCESS,
  //     payload,
  //   };
  // }
  // static getUserByIdFailure(error) {
  //   return {
  //     type: GET_USER_BY_ID_FAILURE,
  //     error,
  //   };
  // }
}
