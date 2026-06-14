import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Bars from "./components/common/Bars.jsx";
import NavContext from "./context/NavContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Bars>
        <NavContext>
          <App />
        </NavContext>
      </Bars>
    </BrowserRouter>
  </StrictMode>,
);
