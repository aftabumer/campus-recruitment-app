import {
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  IS_LOGGED_IN,
  IS_LOGGED_IN_FAILURE,
  IS_LOGGED_IN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SET_USER,
  // GET_USERS,
  // GET_USERS_FAILURE,
  // GET_USERS_SUCCESS,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
} from "../constants";

const initialState = {
  user: null,

  signup: null,
  signupLoader: false,
  signupError: null,

  login: null,
  loginLoader: false,
  loginError: null,

  isLoggedIn: false,
  isLoggedInLoader: false,
  isLoggedInError: false,

  // getUsers: null,
  // getUsersLoader: false,
  // getUsersError: null,

  getUserById: null,
  getUserByIdLoader: false,
  getUserByIdError: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    ////////////////////////// SIGNUP /////////////////////
    case SIGNUP:
      console.log(action.payload);
      debugger;
      return {
        ...state,
        signup: null,
        signupLoader: true,
        signupError: null,
      };
    case SIGNUP_SUCCESS:
      debugger;
      return {
        ...state,
        signup: action.payload,
        signupLoader: false,
        signupError: null,
      };
    case SIGNUP_FAILURE:
      debugger;
      return {
        ...state,
        signup: null,
        signupLoader: false,
        signupError: action.error,
      };

    ////////////////////////// IS LOGGED IN /////////////////////
    case IS_LOGGED_IN:
      debugger;
      return {
        ...state,
        isLoggedIn: null,
        isLoggedInLoader: true,
        isLoggedInError: null,
      };
    case IS_LOGGED_IN_SUCCESS:
      debugger;
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoggedInLoader: false,
        isLoggedInError: null,
      };
    case IS_LOGGED_IN_FAILURE:
      debugger;
      return {
        ...state,
        user: null,
        isLoggedIn: false,
        isLoggedInLoader: false,
        isLoggedInError: action.error,
      };

    ////////////////////// LOGIN /////////////////////
    case LOGIN:
      debugger
      return {
        ...state,
        login: null,
        loginLoader: true,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      debugger
      return {
        ...state,
        login: action.payload,
        loginLoader: false,
        loginError: null,
      };
    case LOGIN_FAILURE:
      debugger
      return {
        ...state,
        login: null,
        loginLoader: false,
        loginError: action.error,
      };

    /////////////
    case LOGOUT:
      debugger;
      return {
        ...state,
        user: null,
        authLoader: true,
        authError: null,
        isLoggedIn: false,
      };

    case LOGOUT_SUCCESS:
      debugger;
      return {
        ...state,
        initialState,
      };

    case LOGOUT_FAILURE:
      debugger;
      return {
        ...state,
        user: null,
        authLoader: false,
        authError: null,
        isLoggedIn: false,
      };

    case SET_USER:
      debugger;
      return {
        ...state,
        user: action.payload,
      };

    // //////////////////////////////GET_USERS//////////////

    // case GET_USERS:
    //   return {
    //     ...state,
    //     getUsers: null,
    //     getUsersLoader: true,
    //     getUsersError: null,
    //   };
    // case GET_USERS_SUCCESS:
    //   return {
    //     ...state,

    //     getUsers: action.payload,
    //     getUsersLoader: false,
    //     getUsersError: null,
    //   };
    // case GET_USERS_FAILURE:
    //   return {
    //     ...state,

    //     getUsers: null,
    //     getUsersLoader: false,
    //     getUsersError: action.error,
    //   };

    //////////////////////////////GET_USER_BY_ID//////////////

    case GET_USER_BY_ID:
      debugger;
      return {
        ...state,
        getUserById: null,
        getUserByIdLoader: true,
        getUserByIdError: null,
      };
    case GET_USER_BY_ID_SUCCESS:
      debugger;
      return {
        ...state,
        user: action.payload,
        getUserById: action.payload,
        getUserByIdLoader: false,
        getUserByIdError: null,
      };
    case GET_USER_BY_ID_FAILURE:
      debugger;
      return {
        ...state,

        getUserById: null,
        getUserByIdLoader: false,
        getUserByIdError: action.error,
      };

    default:
      return state;
  }
}
