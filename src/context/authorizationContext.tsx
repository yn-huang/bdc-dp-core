import { createContext, useContext } from "react";
import { DatasetAccessResult } from "../types/authorization";
import { checkDatasetAccess } from "../services/authorizationService";

interface AuthorizationContextType {
  checkDatasetAccess: (datasetIds: string[]) => Promise<DatasetAccessResult[]>;
}

// Context for authorization info
const AuthorizationContext = createContext<AuthorizationContextType | null>(
  null,
);

// Context provider
export const AuthorizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthorizationContext.Provider
      value={{
        checkDatasetAccess,
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  );
};
// To use context
export function useAuthorizationContext() {
  const context = useContext(AuthorizationContext);

  if (context === null) {
    throw new Error(
      "useAuthorizationContext must be used within an AuthorizationProvider",
    );
  }

  return context;
}
