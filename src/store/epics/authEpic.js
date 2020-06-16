import { Observable } from "rxjs/Rx";
import { authAction } from "../action/index";
import { HttpService } from "../../services/http";
import PATH from "./../../config/path";
import {
  SIGNUP,
  LOGIN,
  IS_LOGGED_IN,
  LOGOUT,
  // GET_USERS,
  // GET_USER_BY_ID,
} from "../constants";
import clientConfig from "./../../config/firebaseClientConfig";
import firebase from "firebase";

export default class authEpic {
  static signup = (action$) =>
    action$.ofType(SIGNUP).switchMap(({ payload }) => {
      return HttpService.post(PATH.SINGUP, payload)
        .switchMap(({ response }) => {
          if (response.status === 200) {
            return Observable.of(authAction.signupSuccess(response.data));
          } else {
            return Observable.of(authAction.signupFailure(response.error));
          }
        })
        .catch((err) => {
          return Observable.of(
            authAction.signupFailure({ error: err.message })
          );
        });
    });

  static login = (action$) =>
    action$.ofType(LOGIN).switchMap(({ payload }) => {
      const { email, password, isRememberMe } = payload;

      if (isRememberMe) {
        return Observable.fromPromise(
          clientConfig.auth().signInWithEmailAndPassword(email, password)
        )
          .switchMap(({ user }) => {
            if (user["emailVerified"]) {
              return Observable.of(
                authAction.loginSuccess({ user }),
                authAction.isLoggedIn()
              );
            } else {
              return Observable.of(
                authAction.loginFailure({
                  message: `You Email address is not verified!`,
                })
              );
            }
          })
          .catch((error) => {
            return Observable.of(
              authAction.loginFailure({ message: error.message })
            );
          });
      } else {
        return Observable.fromPromise(
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        )

          .switchMap((_) => {
            return Observable.fromPromise(
              clientConfig.auth().signInWithEmailAndPassword(email, password)
            ).switchMap(({ user }) => {
              if (user["emailVerified"]) {
                return Observable.of(
                  authAction.loginSuccess({ user }),
                  authAction.isLoggedIn()
                );
              } else {
                return Observable.of(
                  authAction.loginFailure({
                    message: `You Email address is not verified!`,
                  })
                );
              }
            });
          })
          .catch((error) => {
            return Observable.of(
              authAction.loginFailure({ message: error.message })
            );
          });
      }
    });

  static isLoggedIn = (action$) =>
    action$.ofType(IS_LOGGED_IN).switchMap((_) => {
      var data = {};
      return Observable.fromPromise(
        new Promise((resolve, reject) =>
          clientConfig
            .auth()
            .onAuthStateChanged((user) => (user ? resolve(user) : reject()))
        )
      )
        .switchMap((user) => {
          if (user["emailVerified"]) {
            //  clientConfig.firestore().collection("users").doc(user.uid).get(),
            // clientConfig
            //   .firestore()
            //   .collection("users")
            //   .doc(user.uid)
            //   .onSnapshot(function (doc) {
            //     var source = doc.metadata.hasPendingWrites
            //       ? "Local"
            //       : "Server";
            //     console.log(source, " data: ", doc.data());
            //   })

            // .switchMap((doc) => {
            //   debugger;
            //   data = { ...doc.data(), id: doc.id };
            //   return Observable.of(authAction.isLoggedInSuccess(data));
            // })

            // .catch((error) => {
            //   return Observable.of(
            //     authAction.logout(),
            //     authAction.isLoggedInFailure({
            //       message: "unable to fethch user data",
            //     })
            //   );
            // });
            return Observable.of(
              authAction.getUserById({ userId: user.uid }),
              authAction.isLoggedInSuccess(user)
            );
          } else {
            return Observable.of(
              authAction.isLoggedInFailure({
                message: "User email address is not verified",
              }),
              authAction.logout()
            );
          }
        })
        .catch((error) => {
          return Observable.of(
            authAction.isLoggedInFailure({
              message: "User is not authenticated",
            })
          );
        });
    });

  static logout = (action$) =>
    action$.ofType(LOGOUT).switchMap((_) => {
      return Observable.fromPromise(clientConfig.auth().signOut())
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

  // static assignUserRole = (action$) =>
  //   action$.ofType(ASSIGN_USER_ROLE).switchMap(({ payload }) => {
  //     const { userId, operation } = payload;

  //     if (operation === "invokeAdmin") {
  //       return Observable.fromPromise(
  //         clientConfig
  //           .firestore()
  //           .collection("users")
  //           .doc(userId)
  //           .update({
  //             roles: firebase.firestore.FieldValue.arrayUnion("ADMIN"),
  //           })
  //       )
  //         .switchMap(() => {
  //           return Observable.of(
  //             authAction.assignUserRoleSuccess({
  //               message: "Admin role assigned",
  //             }),
  //             authAction.getUsers()
  //           );
  //         })
  //         .catch((error) => {
  //           return Observable.of(
  //             authAction.getUsersFailure({ message: error.message })
  //           );
  //         });
  //     } else if (operation === "revokeAdmin") {
  //       return Observable.fromPromise(
  //         clientConfig
  //           .firestore()
  //           .collection("users")
  //           .doc(userId)
  //           .update({
  //             roles: firebase.firestore.FieldValue.arrayRemove("ADMIN"),
  //           })
  //       )
  //         .switchMap(() => {
  //           return Observable.of(
  //             authAction.assignUserRoleSuccess({
  //               message: "Admin role revoked",
  //             }),
  //             authAction.getUsers()
  //           );
  //         })
  //         .catch((error) => {
  //           return Observable.of(
  //             authAction.getUsersFailure({ message: error.message })
  //           );
  //         });
  //     } else if (operation === "invokeProfessional") {
  //       return Observable.fromPromise(
  //         clientConfig
  //           .firestore()
  //           .collection("users")
  //           .doc(userId)
  //           .update({
  //             roles: firebase.firestore.FieldValue.arrayUnion("PROFESSIONAL"),
  //           })
  //       )
  //         .switchMap(() => {
  //           return Observable.of(
  //             authAction.assignUserRoleSuccess({
  //               message: "Professional role assigned",
  //             }),
  //             authAction.getUsers()
  //           );
  //         })
  //         .catch((error) => {
  //           return Observable.of(
  //             authAction.getUsersFailure({ message: error.message })
  //           );
  //         });
  //     } else if (operation === "revokeProfessional") {
  //       return Observable.fromPromise(
  //         clientConfig
  //           .firestore()
  //           .collection("users")
  //           .doc(userId)
  //           .update({
  //             roles: firebase.firestore.FieldValue.arrayRemove("PROFESSIONAL"),
  //           })
  //       )
  //         .switchMap(() => {
  //           return Observable.of(
  //             authAction.assignUserRoleSuccess({
  //               message: "Professional role revoked",
  //             }),
  //             authAction.getUsers()
  //           );
  //         })
  //         .catch((error) => {
  //           return Observable.of(
  //             authAction.getUsersFailure({ message: error.message })
  //           );
  //         });
  //     }
  //   });

  // static getUserById = (action$) =>
  //   action$.ofType(GET_USER_BY_ID).switchMap(({ payload }) => {
  //     const { userId } = payload;

  //     return Observable.fromPromise(
  //       clientConfig.firestore().collection("users").doc(userId).get()
  //     )
  //       .switchMap((doc) => {
  //         const data = { ...doc.data(), id: doc.id };

  //         return Observable.of(authAction.getUserByIdSuccess(data));
  //       })
  //       .catch((error) => {
  //         return Observable.of(
  //           authAction.getUserByIdFailure({ message: error.message })
  //         );
  //       });
  //   });
}
