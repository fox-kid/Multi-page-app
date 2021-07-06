import { createContext, useContext, useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import ERRORS from "../../constants/errors";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => setUsers(data.items))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AppContext.Provider
      value={{ users, error, loading, favorites, setFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    return new Error(ERRORS.APP_CONTEXT_INVALID);
  }
  return context;
}

export { useAppContext, AppContextProvider };
