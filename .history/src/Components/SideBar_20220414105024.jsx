import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideBarUseList from "./SideBarUseList";
import { useAuth } from "../Context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SideBar() {
  const { logout, currentUser } = useAuth();
  const [alluserToggle, setAlluserToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-0 border-r-[.1px] border-r-gray-600">
      <div className="flex justify-between font-semibold text-2xl px-5 py-3 bg-[#202c33] text-gray-200">
        <div onClick={() => navigate("/")}>
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
          <MdMessage onClick={() => setAlluserToggle((prv) => !prv)} />
          <MdMoreVert />
        </div>
      </div>
      <SideBarUseList
        alluserToggle={alluserToggle}
        setAlluserToggle={setAlluserToggle}
      />
    </div>
  );
}