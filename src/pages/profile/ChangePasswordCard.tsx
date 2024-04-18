import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";
import "./profileStyles.scss";

/**
 * Change password card component.
 * This component is used to change the user's password.
 * It contains a form with fields for the old password, new password, and confirm new password.
 * When the form is submitted, the user's password is changed.
 * The user is required to enter their old password, new password, and confirm new password to change their password.
 * @constructor
 */
const ChangePasswordCard = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const passwordChangeAction = useMutation({
    mutationFn: () =>
      axios.patch(`${BASE_URL}/profile/newPassword`, { oldPassword, password }),
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    passwordChangeAction.mutate();
  };

  return (
    <div className="card">
      <h2>Change Password:</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Old Password:
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm New Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Change Password"
          disabled={passwordChangeAction.isPending}
        />
      </form>
    </div>
  );
};

export default ChangePasswordCard;
