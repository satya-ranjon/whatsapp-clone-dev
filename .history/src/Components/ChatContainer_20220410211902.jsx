import React, { useEffect } from "react";
import { useParams,useLocation } from "react-router";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import { doc, getDoc,getFirestore } from "firebase/firestore";
export default function ChatContainer() {
  const { path } = useParams();

  useEffect(() => { 
    const db = getFirestore();
    const getUser = async () => {
    const docRef = doc(db, "users", "k15981598k@gmail.com");
      const docSnap = await getDoc(docRef);
      console.log(docSnap);
    }
  },[])
  return (
    <div className="text-white w-full relative">
      <ChatHeader />
      <ChatFooter />
    </div>
  );
}
