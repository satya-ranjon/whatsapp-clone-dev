import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideBarUseList from "./SideBarUseList";
import { useAuth } from "../Context/AuthProvider";
import AlluserFatch from "../Hooks/AlluserFatch";

export default function SideBar() {
  const { logout, currentUser } = useAuth();
  const { allUser } = AlluserFatch(currentUser);
  const [allUsers, setAllUsers] = useState([]);
  // console.log(allUser);

  useEffect(() => {
    const db = getFirestore();
    const getAllUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        const data = doc.data();
        setAllUsers(...data);
      });
    };
    getAllUsers();
  }, []);
  console.log(allUsers);
  return (
    <div className="w-72 border-r-[.1px] border-r-gray-600">
      <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
        <div>
          {currentUser.photoURL ? (
            <img
              className="rounded-full w-8 h-8 cursor-pointer "
              src={currentUser.photoURL}
              alt=""
            />
          ) : (
            <FaUserAlt className="rounded-full w-8 h-8" />
          )}
        </div>
        <div className="flex justify-between space-x-5 cursor-pointer my-auto">
          <MdToll onClick={() => logout()} />
          <MdMessage />
          <MdMoreVert />
        </div>
      </div>
      <SideBarUseList />
    </div>
  );
}
