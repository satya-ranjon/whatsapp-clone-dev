import React, { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
export default function AlluserFatch() {
  const [allUser, setAllUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
     useEffect(() => {
          const getAllUsers = async () => {
            const data = await 
       }
  }, []);
  return <div>AlluserFatch</div>;
}