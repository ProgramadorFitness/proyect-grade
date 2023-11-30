import { useContext, createContext, useState } from "react";

interface AuthProviderProps{
    children: React.ReactNode;
}
const AuthContext = createContext({
    isAuthenticated: false,
})

export function AuthProvider({children}: AuthProviderProps){

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("1");

    async function checkAuth() {
        try {
            if(accessToken){
                setIsAuthenticated(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<AuthContext.Provider value={{ isAuthenticated }}>
        {children}
        </AuthContext.Provider>);
    
}

export const useAuth = () => useContext(AuthContext);