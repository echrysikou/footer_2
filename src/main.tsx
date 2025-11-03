import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";


// google-fonts
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/400-italic.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/500-italic.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/600-italic.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
    <App />
  </StrictMode>
);
