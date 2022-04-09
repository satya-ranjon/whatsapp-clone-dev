import { Route, Routes } from "react-router";
import ChatContainer from "./Components/ChatContainer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { AuthProvider } from "./Context/AuthProvider";
import PrivateRoutes from "./Private/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="chats" element={<ChatContainer />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
