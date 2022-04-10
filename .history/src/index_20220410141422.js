import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { AuthProvider } from "./Context/AuthProvider";
import "./index.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  // <AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </AuthProvider>
);
