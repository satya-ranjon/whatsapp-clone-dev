import React, { useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
export default function AlluserFatch() {
  const [allUser, setAllUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  return <div>AlluserFatch</div>;
}
