import { FormEvent, useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import { useMutation } from "@tanstack/react-query";
import { UserContext } from "../../providers.tsx";
import { useNavigate } from "react-router-dom";
import "./profileStyles.scss";

/**
 * Delete account card component.
 * This component is used to delete the user account.
 * It contains a form with a field for the password.
 * When the form is submitted, the user account is deleted.
 * The user is required to enter their password to delete their account.
 * @constructor
 */
const DeleteAccCard = () => {
  const [password, setPassword] = useState("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const accountDeleteAction = useMutation({
    mutationFn: () =>
      axios.delete(`${BASE_URL}/profile`, { data: { password } }),
    onSuccess: () => {
      user.setUser(undefined);
      navigate("/");
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    accountDeleteAction.mutate();
  };

  return (
    <div className="card">
      <h2>Delete Account:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input
          id={"delete-account-button"}
          type="submit"
          value="Delete Account"
          disabled={accountDeleteAction.isPending}
        />
      </form>
    </div>
  );
};

export default DeleteAccCard;
