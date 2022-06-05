import { db } from "../config/connectFireBase";
import {
  collection,
  addDoc,
  Timestamp,
  onSnapshot,
  getDocs,
  orderBy,
  query,
  where,
  doc,
  limit,
} from "firebase/firestore";
import {formatDate} from "../Helper/index";
export const sendComment = (data) => {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, "comments"), { ...data, createdAt: Timestamp.now() })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getCommentService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      var q = query(
        collection(db, "comments"),
        where("idpost", "==", id),
        orderBy("createdAt", "desc"),limit(30)
      );
      getDocs(q)
        .then((data) => {
        var arr = [];
          data.forEach((doc) => {
            let value = {...doc.data(), id: doc.id,createdAt:formatDate(Math.floor(new Date() - doc.data().createdAt.seconds),doc.data().createdAt.toDate())};
            arr.push(value);
          });
          resolve(arr);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
};
