import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./main.tsx";
import { useContext } from "react";
import { UserContext } from "./providers.tsx";
import { useNavigate } from "react-router-dom";

/**
 * Logout button component.
 * @constructor
 */
export function LogoutButton() {
  const user = useContext(UserContext); // Get the user context
  const navigate = useNavigate(); // Navigate to the home page after logout
  const logoutAction = useMutation({
    // Logout mutation
    mutationFn: () => axios.get(BASE_URL + "/logout"), // Logout the user
    onSuccess: () => {
      // After logout
      user.setUser(undefined); // Set the user to undefined
      navigate("/"); // Navigate to the home page
    },
  });
  return (
    <button
      className={"a"}
      onClick={() => logoutAction.mutate()}
      disabled={logoutAction.isPending}
    >
      Logout
    </button>
  );
}
