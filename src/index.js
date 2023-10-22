import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import './fonts/Gotham/Gotham-Bold.otf'
import './fonts/Steel/steel-steel-700.ttf'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( 
    <Theme>
        <App />
    </Theme>
    
);
