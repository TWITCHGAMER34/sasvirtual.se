import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ConfirmPage from "./pages/confirm";
import DashboardPage from "./pages/dashboard";
import ProfilePage from "./pages/profile";
import AdminPage from "./pages/admin";
export default function Router() {
  return (
    <>
      <Helmet titleTemplate={"%s | Scandinavian Airlines Virtual"} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/confirm/:token"} element={<ConfirmPage />} />
        <Route path={"/dashboard"} element={<DashboardPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/admin"} element={<AdminPage />} />
      </Routes>
    </>
  );
}
