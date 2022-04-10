import React, { useEffect } from "react";
import { useParams,useLocation } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { getFirestore,collection} from 'firebase/firestore'
export default function ChatContainer() {
  const { path } = useParams();

  useEffect(() => { 
    const db = getFirestore();
    const getUser = async () => {
      const data = await db.collection("users").doc;
    }
  },[])
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}
