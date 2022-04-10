import React, { useEffect } from "react";
import { useParams,useLocation } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { doc, getDoc } from "firebase/firestore";
export default function ChatContainer() {
  const { path } = useParams();

  useEffect(() => { 
    const db = getFirestore();
    const getUser = async () => {
const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);
    }
  },[])
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}
