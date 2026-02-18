import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResumeProvider } from "./context/ResumeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ResumeProvider>
    <App />
  </ResumeProvider>
);
