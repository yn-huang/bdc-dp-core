import { AuthorizationProvider } from "./context/authorizationContext";
import { UserProvider } from "./context/userContext";
import { mockUser } from "./mock/mockUser";

function App() {
  const user = mockUser;

  return (
    <UserProvider user={user}>
      <AuthorizationProvider>
        {/* <CohortBuilder /> */}
        <h1>Hello</h1>
      </AuthorizationProvider>
    </UserProvider>
  );
}

export default App;
