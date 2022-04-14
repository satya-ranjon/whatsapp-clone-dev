/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  getFirestore,
} from "firebase/firestore";
import { useAuth } from "../Context/AuthProvider";

export default function userAllmesseages({ path }) {
  const db = getFirestore();
  const [ChatMesseage, setChatMesseages] = useState("");
  const { currentUser } = useAuth();
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
  getMessages();

  return { ChatMesseage };
}
