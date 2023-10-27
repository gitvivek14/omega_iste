import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import './fonts/Gotham/Gotham-Bold.otf'
import './fonts/Steel/steel-steel-700.ttf'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/reducer/index"
import { Provider } from "react-redux";
import {Toaster} from "react-hot-toast"
import { BrowserRouter } from "react-router-dom";
import { inject } from "@vercel/analytics/*";
inject();
const store = configureStore({
    reducer:rootReducer
})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    
    <Provider store = {store}>
        <BrowserRouter>
        <Theme>
        <App />
        <Toaster></Toaster>

    </Theme>
    </BrowserRouter>
    </Provider>
    
    
);
