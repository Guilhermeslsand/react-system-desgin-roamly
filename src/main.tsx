import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./styles/tokens.css";
import "../styles/Button.css";
import "../styles/ButtonNav.css";
import "../styles/Badge.css";
import "../styles/Nav.css";
import "../styles/Logo.css";
import "../styles/Topbar.css";
import "../styles/Form.css";
import "../styles/Checkbox.css";
import "../styles/Card.css";
import "../styles/Destinations.css";
import "../styles/Hero.css";
import "../styles/SearchBar.css";
import "../styles/Grid.css";
import "../styles/Table.css";
import "./styles/shell.css";
import "./styles/demo.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
