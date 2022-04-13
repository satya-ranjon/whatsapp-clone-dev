import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { doc, getDoc,getFirestore } from "firebase/firestore";
import ChatBox from "./ChatBox";
export default function ChatContainer() {
  const [chatuser, setChatUser] = useState();
  const [message, setMessage] = useState("");
  const { path } = useParams();

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
    console.log(message);
    if(message.length > 0 )
    console.log(message);
    setMessage(" ")
    
  }


  return (
    <div className="text-white w-full relative">
      <ChatHeader chatuser={chatuser} />
      <ChatBox />
      <ChatFooter message={message} setMessage={setMessage} send={send} />
    </div>
  );
}
