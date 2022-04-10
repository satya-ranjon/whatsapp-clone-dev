import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { doc, getDoc,getFirestore } from "firebase/firestore";
export default function ChatContainer() {
  const [chatuser, setChatUser] = useState()
  const { path } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const getUser = async () => {
      const docRef = doc(db, "users", path);
      const docSnap = await getDoc(docRef);
      setChatUser(docSnap.data());
      console.log(docSnap.data());
    };
    getUser();
  }, [path]);
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}
