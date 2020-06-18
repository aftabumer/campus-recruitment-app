import {
  SIGNUP,
  LOGIN,
  IS_LOGGED_IN,
  LOGOUT,
  // GET_USERS,
  GET_USER_BY_ID,
} from "../constants";
import { Observable } from "rxjs/Rx";
import { authAction } from "../action/index";
import auth, { db } from "../../config/firebaseClientConfig";

export default class authEpic {
  static signup = (action$) =>
    action$.ofType(SIGNUP).switchMap(({ payload }) => {
      debugger;
      console.log(payload);
      return Observable.fromPromise(
        auth.createUserWithEmailAndPassword(payload.email, payload.password)
      )
        .switchMap((response) => {
          payload["uid"] = response.user.uid;
          response.user.updateProfile({
            displayName: payload.firstName + " " + payload.lastName,
          });
          if (response.type && response.type === "SIGNUP_FAILURE") {
            return Observable.of(authAction.signupFailure(response.error));
          } else {
            return Observable.fromPromise(
              db.collection("users").doc(response.user.uid).set(payload)
            );
          }
        })
        .switchMap((response) => {
          console.log(response);
          return Observable.of(authAction.signupSuccess(payload));
        })
        .catch((err) => {
          return Observable.of(
            authAction.signupFailure({ error: err.message })
          );
        });
    });

  static isLoggedIn = (action$) =>
    action$.ofType(IS_LOGGED_IN).switchMap((_) => {
      return Observable.fromPromise(
        new Promise((resolve, reject) =>
          auth.onAuthStateChanged((user) => (user ? resolve(user) : reject()))
        )
      )
        .switchMap((response) => {
          if (response.type && response.type === "IS_LOGGED_IN_FAILURE") {
            return Observable.of(authAction.isLoggedInFailure(response));
          } else {
            return Observable.of(
              authAction.isLoggedInSuccess(response),
              authAction.getUserById({ uid: response.uid })
            );
          }
        })
        .catch((error) => {
          return Observable.of(
            authAction.isLoggedInFailure({ message: "No User is Logged In" })
          );
        });
    });

  static logout = (action$) =>
    action$.ofType(LOGOUT).switchMap((_) => {
      return Observable.fromPromise(auth.signOut())
        .switchMap((response) => {
          return Observable.of(
            authAction.logoutSuccess(response),
            authAction.isLoggedIn(response)
          );
        })
        .catch((error) => {
          return Observable.of(
            authAction.logoutFailure({ message: "Error in Signout" })
          );
        });
    });

  static login = (action$) =>
    action$.ofType(LOGIN).switchMap(({ payload }) => {
      console.log(payload);
      console.log(payload.email);
      console.log(payload.password);
      debugger;

      return Observable.fromPromise(
        auth.signInWithEmailAndPassword(payload.email, payload.password)
      )
        .switchMap((response) => {
          debugger;
          if (response.type && response.type === "LOGIN_FAILURE") {
            return Observable.of(authAction.loginFailure(response.error));
          } else {
            debugger;
            return Observable.of(
              authAction.loginSuccess(response),
              authAction.isLoggedIn(),
              authAction.getUserById({ uid: response.user.uid })
            );
          }
        })
        .catch((err) => {
          debugger;
          return Observable.of(authAction.loginFailure({ error: err.message }));
        });
    });

  // static getUsers = (action$) =>
  //   action$.ofType(GET_USERS).switchMap(({ payload }) => {
  //     var data = [];
  //     return Observable.fromPromise(
  //       clientConfig.firestore().collection("users").get()
  //     )
  //       .switchMap((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           data.push({ ...doc.data(), id: doc.id });
  //         });
  //         if (data.length > 0) {
  //           return Observable.of(authAction.getUsersSuccess(data));
  //         } else {
  //           return Observable.of(
  //             authAction.getUsersSuccess({ message: "No user found" })
  //           );
  //         }
  //       })
  //       .catch((error) => {
  //         return Observable.of(
  //           authAction.getUsersFailure({ message: error.message })
  //         );
  //       });
  //   });

  static getUserById = (action$) =>
    action$.ofType(GET_USER_BY_ID).switchMap(({ payload }) => {
      const { uid } = payload;
      debugger;
      return Observable.fromPromise(db.collection("users").doc(uid).get())
        .switchMap((doc) => {
          debugger;
          const data = { ...doc.data(), id: doc.id };
          return Observable.of(authAction.getUserByIdSuccess(data));
        })
        .catch((error) => {
          return Observable.of(
            authAction.getUserByIdFailure({ message: error.message })
          );
        });
    });
}
