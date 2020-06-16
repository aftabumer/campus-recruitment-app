import { Observable } from "rxjs/Rx";
import { categoryAction } from "../action/index";
import {
  ADD_JOB,
  GET_JOB,
  GET_JOBS,
  SET_UP_STUDENT_PROFILE,
} from "../constants";
import clientConfig from "./../../config/firebaseClientConfig";
import firebase from "firebase";
import store from "../store.js";
import { HttpService } from "../../services/http";
import PATH from "./../../config/path";

export default class categoryEpic {
  // static addCategory = (action$) =>
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
  // static getCategories = (action$) =>
  //   action$.ofType(GET_CATEGORIES).switchMap((_) => {
  //     // const { catId, subCatId } = payload;
  //     const data = [];
  //     return Observable.fromPromise(
  //       clientConfig.firestore().collection("categories").get()
  //     )
  //       .switchMap((querySnapshot) => {
  //         let subCategoriescategoryImagesArr = [];
  //         querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           // console.log(doc.id, " => ", doc.data());
  //           data.push({ ...doc.data(), id: doc.id });
  //           subCategoriescategoryImagesArr.push(
  //             clientConfig
  //               .firestore()
  //               .collection("categories")
  //               .doc(doc.id)
  //               .collection("subCategories")
  //               .get()
  //           );
  //         });
  //         return Observable.fromPromise(
  //           Promise.all(subCategoriescategoryImagesArr)
  //         );
  //       })
  //       .switchMap((subQueryData) => {
  //         subQueryData.map((subCategories, index) => {
  //           data[index]["subCategories"] = [];
  //           subCategories.forEach((item) => {
  //             data[index]["subCategories"].push({
  //               ...item.data(),
  //               id: item.id,
  //             });
  //           });
  //           return null;
  //         });
  //         return Observable.of(categoryAction.getCategoriesSuccess({ data }));
  //       })
  //       .catch((error) => {
  //         return Observable.of(
  //           categoryAction.getCategoriesFailure({
  //             message: error.message,
  //           })
  //         );
  //       });
  //   });
}
