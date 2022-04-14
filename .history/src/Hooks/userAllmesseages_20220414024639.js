import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  getFirestore,
} from "firebase/firestore";
export default function userAllmesseages({ path, currentUser }) {
  const db = getFirestore();
  const [ChatMesseages, setChatMesseages] = useState("");

  useEffect(() => {
    const getMessages = async () => {
      const first = query(
        collection(db, `chats/${path}/messages`),
        orderBy("timestamp")
      );
      const messSnapshot = await getDocs(first);
      let messeages = messSnapshot.docs.map((doc) => doc.data());

      let newMesseage = messeages.filter(
        (messeage) =>
          messeage.senderID === (currentUser.uid || path) ||
          messeage.reciverID === (currentUser.uid || path)
      );
      setChatMesseages(newMesseage);
    };
  }, []);

  return <div>userAllmesseages</div>;
}
