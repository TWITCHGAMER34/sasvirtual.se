import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { Helmet } from "react-helmet";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  }

  return (
    <>
      <Helmet title={"Register"} />

      <form onSubmit={handleSubmit}>
        {registerAction.isError && (
          <div>Error: {registerAction.error.message}</div>
        )}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={registerAction.isPending}>
          Login
        </button>
      </form>
    </>
  );
}
