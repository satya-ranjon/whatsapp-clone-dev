import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import {
  doc,
  getDoc,
  getFirestore,
  Timestamp,
  collection,
  addDoc,
  setDoc,
  CollectionReference,
  setCustomer,
  DocumentReference,
} from "firebase/firestore";
import ChatBox from "./ChatBox";
import { useAuth } from "../Context/AuthProvider";

export default function ChatContainer() {
  const [chatuser, setChatUser] = useState();
  const [message, setMessage] = useState("");
  const { path } = useParams();
  const { currentUser } = useAuth();
  console.log(chatuser);
  useEffect(() => {
    const db = getFirestore();
    const getUser = async () => {
      const docRef = doc(db, "users", path);
      const docSnap = await getDoc(docRef);
      setChatUser(docSnap.data());
    };
    getUser();
  }, [path]);

  const send = async (e) => {
    e.preventDefault();
    if (message) console.log(message);
    setMessage(" ");

    if (path) {
      const payload = {
        message: message,
        senderEmail: currentUser.email,
        reciverEmail: path,
        timestamp: Timestamp.now(),
      };

      const db = getFirestore();
      // sender
      let collRefsender = await collection(
        db,
        `chats/${currentUser.email}/messages`
      );
      await addDoc(collRefsender, {
        payload,
      });
      // reciver
      let collRefreciver = await collection(db, `chats/${path}/messages`);
      await addDoc(collRefreciver, {
        payload,
      });

      let collRefFridenListSender = await collection(
        db,
        `friendList/${currentUser.email}/list/${path}`
      );
      let collRefFridenListReciver = await collection(
        db,
        `friendList/${path}/list`
      );
      await addDoc(collRefFridenListSender, {
        email: chatuser.email,
        fullname: chatuser.fullname,
        photoURL: chatuser.photoURL,
      });
    }
  };

  return (
    <div className="text-white w-full relative">
      <ChatHeader chatuser={chatuser} />
      <ChatBox />
      <ChatFooter message={message} setMessage={setMessage} send={send} />
    </div>
  );
}
