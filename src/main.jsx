import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
 
import App from "./App";
 
import WishlistProvider from "./Context/WishlistContext";
 
import "./index.css";
 
ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
 
        <WishlistProvider>
 
            <App />
 
        </WishlistProvider>
 
    </BrowserRouter>
 
);
