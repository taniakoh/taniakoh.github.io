import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import App from "./App.tsx";
import {ChakraProvider, defaultSystem} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider value={defaultSystem}>
        <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
