import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import ChatBox from "./ChatBox";
import { useAuth } from "../Context/AuthProvider";
export default function ChatContainer() {
  const [chatuser, setChatUser] = useState();
  const [message, setMessage] = useState("");
  const { path } = useParams();
  const { currentUser } = useAuth()
  useEffect(() => {
    const db = getFirestore();
    const getUser = async () => {
      const docRef = doc(db, "users", path);
      const docSnap = await getDoc(docRef);
      setChatUser(docSnap.data());
    };
    getUser();
  }, [path]);

  const send = (e) => {
    e.preventDefault();
    if(message)
    console.log(message);
    setMessage(" ")



    if (path) {
      const payload = {
        message: message,
        senderEmail: currentUser.email,
      };
    }
    
  }


  return (
    <div className="text-white w-full relative">
      <ChatHeader chatuser={chatuser} />
      <ChatBox />
      <ChatFooter message={message} setMessage={setMessage} send={send} />
    </div>
  );
}
