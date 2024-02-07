import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./main.tsx";
import { useContext } from "react";
import { UserContext } from "./providers.tsx";
import { useNavigate } from "react-router-dom";

export function LogoutButton() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const logoutAction = useMutation({
    mutationFn: () => axios.get(BASE_URL + "/logout"),
    onSuccess: () => {
      user.setUser(undefined);
      navigate("/");
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
