import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DatabaseProvider } from "./DataContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DatabaseProvider>
        <App />
    </DatabaseProvider>
);


