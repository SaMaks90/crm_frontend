import AuthProvider from "./provider/auth-provider";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
