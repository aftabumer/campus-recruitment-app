import {
  // GET_JOB,
  // GET_JOBS,
  SET_UP_STUDENT_PROFILE,
  SET_UP_COMPANY_PROFILE,
  GET_COMPANY_PROFILE,
  ADD_JOB,
  GET_JOBS,
  GET_COMPANY_PROFILES,
  GET_STUDENT_PROFILES,
} from "../constants";
import { Observable } from "rxjs/Rx";
import { jobAction } from "../action/index";
import { db } from "../../config/firebaseClientConfig";

export default class categoryEpic {
  static setUpStudentProfile = (action$) =>
    action$.ofType(SET_UP_STUDENT_PROFILE).switchMap(({ payload }) => {
      debugger;
      console.log(payload);
      return Observable.fromPromise(
        db.collection("student profiles").doc().set(payload)
      )
        .switchMap((response) => {
          console.log(response);
          debugger;
          return Observable.of(jobAction.setUpStudentProfileSuccess(payload));
        })
        .catch((err) => {
          debugger;
          return jobAction.setUpStudentProfileFailure(
            `Error in Save student data! ${err}`
          );
        });
    });

  static setUpCompanyProfile = (action$) =>
    action$.ofType(SET_UP_COMPANY_PROFILE).switchMap(({ payload }) => {
      debugger;
      console.log(payload);
      return Observable.fromPromise(
        db.collection("company profiles").doc().set(payload)
      )
        .switchMap((response) => {
          console.log(response);
          debugger;
          return Observable.of(jobAction.setUpCompanyProfileSuccess(payload));
        })
        .catch((err) => {
          debugger;
          return jobAction.setUpCompanyProfileFailure(
            `Error in Save student data! ${err}`
          );
        });
    });

  static addJob = (action$) =>
    action$.ofType(ADD_JOB).switchMap(({ payload }) => {
      debugger;
      console.log(payload);
      return Observable.fromPromise(
        db.collection("job descriptions").doc().set(payload)
      )
        .switchMap((response) => {
          console.log(response);
          debugger;
          return Observable.of(jobAction.addJobSuccess(payload));
        })
        .catch((err) => {
          debugger;
          return jobAction.addJobFailure(
            `Error in add job description! ${err}`
          );
        });
    });

  static getCompanyProfile = (action$) =>
    action$.ofType(GET_COMPANY_PROFILE).switchMap(({ payload }) => {
      debugger;
      const { id } = payload;
      // var data = {};
      return db
        .collection("company profiles")
        .doc(id)
        .get()
        .then((doc) => {
          debugger;
          if (doc.exists) {
            debugger;
            return jobAction.getCompanyProfileSuccess({
              ...doc.data(),
              vid: doc.id,
            });
          } else {
            debugger;
            return jobAction.getCompanyProfileFailure(`No such document!`);
          }
        })
        .catch((error) => {
          debugger;
          return jobAction.getCompanyProfileFailure(
            `Error in getting profile! ${error}`
          );
        });
    });

  static getCompanyProfiles = (action$) =>
    action$.ofType(GET_COMPANY_PROFILES).switchMap((_) => {
      debugger;
      const data = [];
      return Observable.fromPromise(db.collection("company profiles").get())
        .switchMap((querySnapshot) => {
          debugger;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            debugger;
            // console.log(doc.id, " => ", doc.data());
            data.push({ ...doc.data(), id: doc.id });
            console.log(data);
          });
          return Observable.of(jobAction.getCompanyProfilesSuccess(data));
        })
        .catch((error) => {
          debugger;
          return Observable.of(
            jobAction.getCompanyProfilesFailure(
              `Error in getting compaies profiles! ${error}`
            )
          );
        });
    });

  static getStudentProfiles = (action$) =>
    action$.ofType(GET_STUDENT_PROFILES).switchMap((_) => {
      debugger;
      const data = [];
      return Observable.fromPromise(db.collection("student profiles").get())
        .switchMap((querySnapshot) => {
          debugger;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            debugger;
            // console.log(doc.id, " => ", doc.data());
            data.push({ ...doc.data(), id: doc.id });
            console.log(data);
          });
          return Observable.of(jobAction.getStudentProfilesSuccess(data));
        })
        .catch((error) => {
          debugger;
          return Observable.of(
            jobAction.getStudentProfilesFailure(
              `Error in getting compaies profiles! ${error}`
            )
          );
        });
    });

  static getJobs = (action$) =>
    action$.ofType(GET_JOBS).switchMap((_) => {
      debugger;
      const data = [];
      return Observable.fromPromise(db.collection("job descriptions").get())
        .switchMap((querySnapshot) => {
          debugger;
          querySnapshot.forEach((doc) => {
            console.log(doc);
            debugger;
            // console.log(doc.id, " => ", doc.data());
            data.push({ ...doc.data(), id: doc.id });
            console.log(data);
          });
          return Observable.of(jobAction.getJobsSuccess(data));
        })
        .catch((error) => {
          debugger;
          return Observable.of(
            jobAction.getJobsFailure(`Error in getting jobs! ${error}`)
          );
        });
    });
  // static getJobs = (action$) =>
  //   action$.ofType(GET_JOBS).switchMap((_) => {
  //     debugger;
  //     const data = [];
  //     return Observable.fromPromise(db.collection("job descriptions").get())
  //       .switchMap((querySnapshot) => {
  //         debugger;
  //         querySnapshot.forEach((doc) => {
  //           console.log(doc);
  //           debugger;
  //           // console.log(doc.id, " => ", doc.data());
  //           data.push({ ...doc.data(), id: doc.id });
  //           console.log(data);
  //         });
  //         return Observable.of(jobAction.getJobsSuccess(data));
  //       })
  //       .catch((error) => {
  //         debugger;
  //         return Observable.of(
  //           jobAction.getJobsFailure(`Error in getting jobs! ${error}`)
  //         );
  //       });
  //   });

  // static    = (action$) =>
  //   action$.ofType(ADD_JOB).switchMap(({ payload }) => {
  //     const {
  //       displayName,
  //       coverImageFile,
  //       iconFile,
  //       description,
  //       objStatus,
  //     } = payload;
  //     var storageRef = firebase.storage().ref();
  //     var docId;
  //     //## 1. storageRef.child.put should be in a single line
  //     //## 2. `images/category${coverImageFile.name}` please recheck it there any need of '/' between category and ${coverImageFile.name}?
  //     //## 3. categoryImagesArr need a relative word like categoryImagesArr or something else
  //     return Observable.fromPromise(
  //       clientConfig.firestore().collection("categories").add({
  //         displayName,
  //         description,
  //         objStatus,
  //       })
  //     )
  //       .switchMap((docRef) => {
  //         return (docId = docRef.id);
  //       })
  //       .switchMap(() => {
  //         var categoryImagesArr = [
  //           storageRef
  //             .child(`images/category/${docId}/${coverImageFile.name}`)
  //             .put(coverImageFile),
  //           storageRef
  //             .child(`images/icon/${docId}/${iconFile.name}`)
  //             .put(iconFile),
  //         ];
  //         return Observable.fromPromise(
  //           Promise.all(categoryImagesArr)
  //         ).switchMap((response) => {
  //           // var progresss =
  //           //   (response.task.snapshot.bytesTransferred /
  //           //     response.task.snapshot.totalBytes) *
  //           //   100;
  //           // console.log(progresss);
  //           var urlArr = [
  //             response[0].task.snapshot.ref.getDownloadURL(),
  //             response[1].task.snapshot.ref.getDownloadURL(),
  //           ];
  //           return Promise.all(urlArr);
  //         });
  //       })
  //       .switchMap((downloadURL) => {
  //         return Observable.fromPromise(
  //           clientConfig
  //             .firestore()
  //             .collection("categories")
  //             .doc(docId)
  //             .update({
  //               displayImage: downloadURL[0],
  //               icon: downloadURL[1],
  //               coverImageFileName: coverImageFile.name,
  //               iconFileName: iconFile.name,
  //             })
  //         );
  //       })
  //       .switchMap(() => {
  //         return Observable.of(
  //           categoryAction.addCategorySuccess({
  //             message: "category successfuly created",
  //             id: docId,
  //           }),
  //           categoryAction.getCategorySubCategories({ id: docId })
  //         );
  //       })
  //       .catch((error) => {
  //         return Observable.of(
  //           categoryAction.addCategoryFailure({ message: error.message })
  //         );
  //       });
  //   });
  // static getCategory = (action$) =>
  //   action$.ofType(GET_CATEGORY).switchMap(({ payload }) => {
  //     const { id } = payload;
  //     var data = {};
  //     return Observable.fromPromise(
  //       clientConfig.firestore().collection("categories").doc(id).get()
  //     )
  //       .switchMap((doc) => {
  //         data = { ...doc.data(), id: doc.id };
  //         return Observable.of(categoryAction.getCategorySuccess({ data }));
  //       })
  //       .catch((error) => {
  //         return Observable.of(
  //           categoryAction.getCategoryFailure({ message: error.message })
  //         );
  //       });
  //   });
}
