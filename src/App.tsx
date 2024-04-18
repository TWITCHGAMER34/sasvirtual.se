import Router from "./router.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "./main.tsx";
import { useContext } from "react";
import { UserContext } from "./providers.tsx";

/**
 * Main application component.
 * This component is the root component of the application.
 * It contains the header, main content, and footer of the application.
 * It also fetches the user data from the server and stores it in the user context.
 * The user context is used to determine if the user is logged in or not.
 * If the user is logged in, the user data is stored in the user context.
 * If the user is not logged in, the user context is set to null.
 * @constructor
 */
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
