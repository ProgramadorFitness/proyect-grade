import { useContext, createContext, useState } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}
const AuthContext = createContext({
    isAuthenticated: true,
})

export function AuthProvider({children}: AuthProviderProps){

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (<AuthContext.Provider value={{ isAuthenticated }}>
        {children}
        </AuthContext.Provider>);
    
}

export const useAuth = () => useContext(AuthContext);