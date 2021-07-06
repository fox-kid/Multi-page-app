import { AuthContextProvider } from "./context/AuthContext";
import { AppContextProvider } from "./context/DashboardContext";
import Routes from "./Routes";

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default App;
