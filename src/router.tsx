import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { Helmet } from "react-helmet";

export default function Router() {
  return (
    <>
      <Helmet titleTemplate={"%s | Scandinavian Airlines Virtual"} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Routes>
    </>
  );
}
