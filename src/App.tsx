import Router from "./router.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./main.tsx";
import { useContext } from "react";
import { UserContext } from "./providers.tsx";

function App() {
  const user = useContext(UserContext);

  useQuery({
    queryKey: ["auth"],
    queryFn: () =>
      axios.get(BASE_URL + "/auth").then((res) => {
        const data = res.data || null;
        user.setUser(data);
        return data;
      }),
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
