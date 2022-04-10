import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";

export default function SideBarUseList({ search, setSearch, name, email }) {
  const [toogle, setToogle] = useState(true);
  console.log(name, email);

  const searchedUser = allUsers.filter((user) => {
    if (search) {
      if (user.data().fullname.toLowerCase().includes(search.toLowerCase())) {
        return user;
      }
    }
  });

  const searchItem = searchedUser.map((user) => {
    return (
      <SideBarUseList
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
      <UserProfile />
    </>
  );
}
