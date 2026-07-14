import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        const token = localStorage.getItem("token");
        
        if(token && savedUser){
            const parsed = JSON.parse(savedUser);
            setUser(parsed);
            setIsAdmin(parsed.role === "admin");
            }

            setLoading(false);
    }, []);

    const login = (token, userData) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
        setIsAdmin(userData.role === "admin");
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setIsAdmin(false);
    };

    const getToken = () => localStorage.getItem("token");

    const value = {
        user,
        isLoggedIn: !!user, 
        isAdmin,
        loading,
        login,
        logout,
        getToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth harus dipakai di dalam <AuthProvider>");
  }
  return context;
}