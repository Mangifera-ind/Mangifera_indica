import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootelement = document.getElementById("root")
const root = createRoot(rootelement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);