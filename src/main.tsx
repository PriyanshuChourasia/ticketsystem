import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteNavigation from "./routes/RouteNavigation";
import AuthProvider from "./context/AuthContext/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouteNavigation />
    </AuthProvider>
  </StrictMode>
);
