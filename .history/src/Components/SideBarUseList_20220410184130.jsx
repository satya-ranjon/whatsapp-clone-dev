import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
import React, { useEffect, useState } from "react";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useAuth } from "../Context/AuthProvider";

export default function SideBarUseList() {
  const [toogle, setToogle] = useState(true);
  const { currentUser } = useAuth();
  const [search, setSearch] = useState();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const getAllUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setAllUsers(
        querySnapshot.docs.filter(
          (doc) => doc.data.email !== currentUser?.email
        )
      );
    };
    getAllUsers();
  }, []);
  console.log(allUsers);

  const searchedUser = allUsers.filter((user) => {
    if (search) {
      if (user.data().fullname.toLowerCase().includes(search.toLowerCase())) {
        return user;
      }
    }
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <UserProfile
        name={user.data().fullname}
        photoURL={user.data().photoURL}
        email={user.data().email}
      />
    );
  });

  return (
    <>
      <div className="bg-[#111b21] flex justify-center p-3">
        <div
          className="pl-14 rounded-md w-full bg-[#202c33] relative"
          onClick={() => setToogle(true)}
          onMouseOut={() => setToogle(false)}
        >
          <input
            type="text"
            id="search"
            className="bg-[#202c33]  p-1 outline-none text-gray-300  "
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <label
            htmlFor="search"
            className="absolute left-3 bottom-2 text-gray-300 my-auto"
          >
            {(toogle && (
              <BsArrowLeft className="text-green-400 font-semibold" />
            )) || <AiOutlineSearch />}
          </label>
        </div>
      </div>
      {searchItem.length > 0 ? searchItem : <UserProfile />}
    </>
  );
}
