import React, { useEffect, useRef, useState } from "react";
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
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import ChatBox from "./ChatBox";
import { useAuth } from "../Context/AuthProvider";

export default function ChatContainer() {
  const [chatuser, setChatUser] = useState();
  const [message, setMessage] = useState("");
  const [ChatMesseages, setChatMesseages] = useState("");
  const { path } = useParams();
  const { currentUser } = useAuth();
  const chatReff = useRef(null);
  const db = getFirestore();

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", path);
      const docSnap = await getDoc(docRef);
      setChatUser(docSnap.data());
    };

    getUser();

    console.log("ChatContainer4");
  }, [path]);

  useEffect(() => {
    console.log(chatReff);
  }, []);

  const send = async (e) => {
    e.preventDefault();

    if (path) {
      setMessage(" ");
      const db = getFirestore();
      // sender
      let collRefsender = await collection(
        db,
        `chats/${currentUser.uid}/messages`
      );
      await addDoc(collRefsender, {
        message: message,
        senderID: currentUser.uid,
        reciverID: path,
        timestamp: Timestamp.now(),
      });
      // reciver
      let collRefreciver = await collection(db, `chats/${path}/messages`);
      await addDoc(collRefreciver, {
        message: message,
        senderID: currentUser.uid,
        reciverID: path,
        timestamp: Timestamp.now(),
      });

      // FridenListSender;
      await setDoc(doc(db, `friendList/${currentUser.uid}/list/`, path), {
        email: chatuser.email,
        fullname: chatuser.fullname,
        photoURL: chatuser.photoURL,
        lastMessage: message,
      });
      // FridenListReciver;
      await setDoc(doc(db, `friendList/${path}/list/`, currentUser.email), {
        email: chatuser.email,
        fullname: chatuser.fullname,
        photoURL: chatuser.photoURL,
        lastMessage: message,
      });
      console.log("ChatContainer3");
    }
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
      console.log("ChatContainer2");
    };
    getMessages();
    console.log("ChatContainer1");
  };

  console.log("ChatContainer");

  return (
    <div className="text-white w-full relative">
      <ChatHeader chatuser={chatuser} />
      <ChatBox ChatMesseages={ChatMesseages} chatReff={chatReff} />
      <ChatFooter message={message} setMessage={setMessage} send={send} />
    </div>
  );
}