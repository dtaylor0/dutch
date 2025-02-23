import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <div className="w-screen h-screen font-sans text-5xl lg:text-xl">
            <App />
        </div>
    </StrictMode>,
);
