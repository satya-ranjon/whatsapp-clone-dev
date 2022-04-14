import React, { useEffect } from "react";

export default function userAllmesseages({ path, currentUser }) {
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
