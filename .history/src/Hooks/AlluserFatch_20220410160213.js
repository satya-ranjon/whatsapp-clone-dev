import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

export default function AlluserFatch({ currentUser }) {
  const [allUser, setAllUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const db = getFirestore();
    const getAllUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setAllUser(doc.data());
        //    console.log(doc.id, " => ", doc.data());
      });
    };
    getAllUsers();
  }, []);

  return { allUser };
}
