import { FormEvent, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { UserContext } from "../../providers.tsx";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./loginStyles.scss";

/**
 * Login page component.
 * This component is used to log in the user.
 * It contains a form with fields for the username and password.
 * When the form is submitted, the user data is sent to the server to log in.
 * If the login is successful, the user is redirected to the home page.
 * If the login fails, an error message is displayed.
 * The user is required to enter their username and password to log in.
 * @constructor
 */
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const loginRequest = useMutation({
    mutationFn: () =>
      axios.post(BASE_URL + "/login", {
        username,
        password,
      }),
    onSuccess: (res) => {
      user.setUser(res.data);
      navigate("/");
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    loginRequest.mutate();
  }

  return (
    <>
      <div className="main-content">
        <Helmet title={"Login"} />
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Login</h1>
          {loginRequest.isError && (
            <div className={"error-message"}>
              Error: {loginRequest.error.message}
            </div>
          )}
          <div className="form-group">
            <span className="material-symbols-outlined">person</span>
            <input
              type="text"
              value={username}
              placeholder={"Username"}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="form-group">
            <span className="material-symbols-outlined">password</span>
            <input
              type="password"
              value={password}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button
            type="submit"
            disabled={loginRequest.isPending}
            className="login-button"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
