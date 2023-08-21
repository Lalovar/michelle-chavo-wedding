import firebase_app from "./config";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getData(name) {
  let result = [];
  let error = null;

  try {
    const querySnapshot = await getDocs(collection(db, "invitados"));
    querySnapshot.forEach((doc) => {
      const obj = {
        id: doc.id,
        ...doc.data(),
      };
      result.push(obj);
    });
  } catch (e) {
    error = e;
  }
  return { result, error };
}
