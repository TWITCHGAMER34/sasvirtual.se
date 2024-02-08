import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../main.tsx";

export default function ConfirmPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const activateAction = useQuery({
    queryKey: ["confirm", token],
    queryFn: () =>
      axios.get(`${BASE_URL}/confirm/${token}`).then((res) => {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        return res;
      }),
  });
  return (
    <div>
      {activateAction.isLoading && <p>Activating...</p>}
      {activateAction.isError && <p>Error: {activateAction.error.message}</p>}
      {activateAction.isSuccess && <p>Activated!</p>}
      <p>Token: {token}</p>
    </div>
  );
}
