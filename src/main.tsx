import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteNavigation from "./routes/RouteNavigation";
import AuthProvider from "./context/AuthContext/AuthProvider";
import DesignationProvider from "./context/DesignationContext/DesignationProvider";
import UserProvider from "./context/UserContext/UserProvider";
import RoleProvider from "./context/RoleContext/RoleProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <DesignationProvider>
            <RoleProvider>
              <RouteNavigation />
              <ToastContainer />
            </RoleProvider>
          </DesignationProvider>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
