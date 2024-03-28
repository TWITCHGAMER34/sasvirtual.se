import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { Helmet } from "react-helmet";
import "../login/loginStyles.scss";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const registerAction = useMutation({
    mutationFn: () =>
      axios.post(BASE_URL + "/register", {
        username,
        password,
        email,
      }),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    registerAction.mutate();
    alert("Registration successful! Check your email to verify your account.");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  }

  return (
    <>
      <Helmet title={"Register"} />

      <form onSubmit={handleSubmit} className={"login-form"}>
        <h1>Register</h1>
        {registerAction.isError && (
          <div>Error: {registerAction.error.message}</div>
        )}
        <div className="form-group">
          <span className="material-symbols-outlined">person_add</span>
          <input
            placeholder={"Username"}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="form-group">
          <span className="material-symbols-outlined">email</span>
          <input
            placeholder={"Email"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="form-group">
          <span className="material-symbols-outlined">password</span>
          <input
            placeholder={"Password"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="form-group">
          <span className="material-symbols-outlined">key</span>
          <input
            placeholder={"Confirm Password"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" disabled={registerAction.isPending}>
          Register
        </button>
      </form>
    </>
  );
}
