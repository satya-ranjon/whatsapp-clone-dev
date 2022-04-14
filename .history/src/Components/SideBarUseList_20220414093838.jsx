import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../Context/AuthProvider";

export default function SideBarUseList() {
  const [toogle, setToogle] = useState(true);
  const { currentUser } = useAuth();
  const [searchinput, setSearchinput] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allFriends, setAllfriends] = useState([]);
  console.log(allFriends);
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

    const getAllFriends = async () => {
      const first = collection(db, `friendList/${currentUser.uid}/list`);
      onSnapshot(first, (querySnapshot) => {
        let messeages = querySnapshot.docs.map((doc) => doc.data());
        setAllfriends(messeages);
      });
    };
    getAllFriends();
  }, []);
  // console.log(allUsers);

  const searchedUser = allUsers.filter((user) => {
    if (searchinput) {
      if (
        user.data().fullname.toLowerCase().includes(searchinput.toLowerCase())
      ) {
        return user;
      }
    }
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <UserProfile
        key={user.data().uid}
        name={user.data().fullname}
        photoURL={user.data().photoURL}
        email={user.data().email}
        uid={user.data().uid}
      />
    );
  });
  const allUseres = allUsers.map((user) => {
    return (
      <UserProfile
        key={user.data().uid}
        name={user.data().fullname}
        photoURL={user.data().photoURL}
        email={user.data().email}
        uid={user.data().uid}
      />
    );
  });
  const allFriend = allFriends.map((user) => {
    console.log(user)
    return (
      // <UserProfile
      //   key={user.data().uid}
      //   name={user.data().fullname}
      //   photoURL={user.data().photoURL}
      //   email={user.data().email}
      //   uid={user.data().uid}
      // />
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
            onChange={(e) => setSearchinput(e.target.value)}
            value={searchinput}
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
      <div className="bg-[#111b21] overflow-y-scroll scroll-my-1 h-[88vh] lg:h-[84vh] scrollbar scrollbar-thumb-gray-400 scrollbar-thin text-gray-200 duration-500 transition-all">
        {searchItem.length > 0 ? searchItem : allUseres}
      </div>
    </>
  );
}
