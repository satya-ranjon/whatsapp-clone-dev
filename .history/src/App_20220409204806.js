import ChatContainer from "./Components/ChatContainer";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="lg:p-3 lg:px-44 bg-[#0a1014] flex">
      <SideBar />
      <ChatContainer />
    </div>
  );
}

export default App;
