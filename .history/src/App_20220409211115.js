import { Route, Routes } from "react-router";
import ChatContainer from "./Components/ChatContainer";
import Home from "./Components/Home";
import SideBar from "./Components/SideBar";
import Login from "./Components/Login";

function App() {
  return (
    <div className="lg:p-5 lg:px-44 bg-[#0a1014] flex">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<ChatContainer />} />
      </Routes>
    </div>
  );
}

export default App;
