import { createContext, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const UserContext = createContext<{
  user: any;
  setUser: (data: any) => void;
}>({
  user: undefined,
  setUser: () => {},
});

export const queryClient = new QueryClient();

/**
 * This component provides the UserContext and the QueryClient to the app.
 * The UserContext is used to store the user data and the QueryClient is used to cache the data fetched from the server.
 * @param children
 * @constructor
 */
export function Providers({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(undefined);
  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </UserContext.Provider>
  );
}
