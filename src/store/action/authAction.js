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
  SET_USER,
  // GET_USERS,
  // GET_USERS_FAILURE,
  // GET_USERS_SUCCESS,
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_SUCCESS,
} from "../constants";

export class authAction {
  ////////////////////////  SIGNUP  ////////////////////
  static signup(payload) {
    debugger;
    return {
      type: SIGNUP,
      payload,
    };
  }
  static signupSuccess(payload) {
    debugger;
    return {
      type: SIGNUP_SUCCESS,
      payload,
    };
  }
  static signupFailure(error) {
    debugger;
    return {
      type: SIGNUP_FAILURE,
      error,
    };
  }

  /////////////LOGIN//////////////////////////

  static login(payload) {
    debugger;
    return {
      type: LOGIN,
      payload,
    };
  }

  static loginSuccess(payload) {
    debugger;
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  }

  static loginFailure(error) {
    debugger;
    return {
      type: LOGIN_FAILURE,
      error,
    };
  }

  ////////////////////////  LOGOUT  ////////////////////
  static logout(payload) {
    debugger;
    return {
      type: LOGOUT,
      payload,
    };
  }
  static logoutSuccess(payload) {
    debugger;
    return {
      type: LOGOUT_SUCCESS,
      payload,
    };
  }
  static logoutFailure(error) {
    debugger;
    return {
      type: LOGOUT_FAILURE,
      error,
    };
  }

  ///////////// isLoggin //////////////
  static isLoggedIn(payload) {
    debugger;
    return {
      type: IS_LOGGED_IN,
      payload,
    };
  }

  static isLoggedInSuccess(payload) {
    debugger;
    return {
      type: IS_LOGGED_IN_SUCCESS,
      payload,
    };
  }

  static isLoggedInFailure(error) {
    debugger;
    return {
      type: IS_LOGGED_IN_FAILURE,
      error,
    };
  }

  static setUser(payload) {
    debugger;
    return {
      type: SET_USER,
      payload,
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

  static getUserById(payload) {
    debugger;
    return {
      type: GET_USER_BY_ID,
      payload,
    };
  }
  static getUserByIdSuccess(payload) {
    debugger;
    return {
      type: GET_USER_BY_ID_SUCCESS,
      payload,
    };
  }
  static getUserByIdFailure(error) {
    debugger;
    return {
      type: GET_USER_BY_ID_FAILURE,
      error,
    };
  }
}
