import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoute from "./routes/AppRoute";
import { CombineContextProvider } from "./context/CombineContext/CombineProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CombineContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
        <ToastContainer />
      </QueryClientProvider>
    </CombineContextProvider>
  </StrictMode>
);
