import { Route, Routes } from "react-router";
import ChatContainer from "./Components/ChatContainer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PrivateRoutes from "./Private/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoutes />}>
        <Route index element={<Home />} />
        <Route path="chats/:path" element={<ChatContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
