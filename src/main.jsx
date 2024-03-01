import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* passing the DATA array as a prop to the App component so it can be
accessed by App.jsx to use the information stored in the array */}
    <App />
  </React.StrictMode>
);
