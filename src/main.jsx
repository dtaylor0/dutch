import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <div className="w-screen h-screen font-sans text-2xl lg:text-base">
        <App />
    </div>,
);
