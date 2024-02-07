import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers.tsx";
import axios from "axios";

axios.defaults.withCredentials = true;
export const { VITE_BASE_URL: BASE_URL } = import.meta.env;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>,
);
