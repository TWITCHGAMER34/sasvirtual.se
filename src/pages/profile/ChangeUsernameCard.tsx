import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { useNavigate } from "react-router-dom";
import "./profileStyles.scss";

/**
 * Change username card component.
 * This component is used to change the user's username.
 * It contains a form with a field for the new username.
 * When the form is submitted, the user's username is changed.
 * The user is required to enter their new username to change their username.
 * @constructor
 */
const ChangeUsernameCard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const UsernameChangeAction = useMutation({
    mutationFn: () =>
      axios.patch(`${BASE_URL}/profile/newUsername`, { username }),
    onSuccess: async () => {
      navigate("/profile");
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    UsernameChangeAction.mutate();
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>Change Username:</h2>
        <label>
          New Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Change Username"
          disabled={UsernameChangeAction.isPending}
        />
      </form>
    </div>
  );
};

export default ChangeUsernameCard;
