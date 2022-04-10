import React, { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot, getDocs } from "firebase/firestore";

export default function AlluserFatch({ currentUser }) {
  const [allUser, setAllUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const db = getFirestore();
    const getAllUsers = async () => {
      const data = await db.collection("users").onSnapshot((snapshot) => {
        setAllUser(
          snapshot.docs.filter((doc) => doc.data().email !== currentUser?.email)
        );
      });
    };
  }, []);
     
     
     
     

const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
     
     
     
  return { allUser };
}
