import { MdToll, MdMoreVert, MdMessage } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import SideBarUseList from "./SideBarUseList";
import { useAuth } from "../Context/AuthProvider";

export default function SideBar() {
  const { logout, currentUser } = useAuth();

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
      <SideBarUseList search={search} setSearch={setSearch} />
      {searchItem}
    </div>
  );
}
