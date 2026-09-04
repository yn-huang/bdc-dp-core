import { AuthorizationProvider } from "./context/authorizationContext";
import { ThemeProvider } from "./context/themeContext";
import { UserProvider } from "./context/userContext";
import { mockUser } from "./mock/mockUser";

function App() {
  const user = mockUser;

  return (
    <ThemeProvider>
      <UserProvider user={user}>
        <AuthorizationProvider>
          {/* <CohortBuilder /> */}
          <h1>Hello</h1>
        </AuthorizationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
