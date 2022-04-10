import React, { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

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
  return <div>AlluserFatch</div>;
}