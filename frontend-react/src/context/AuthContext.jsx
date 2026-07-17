import { createContext, useContext, useEffect, useState } from "react";
import { apiRequest } from "../api/client";


const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;
    const isAdmin = user?.role === "admin";

    const token = localStorage.getItem("token");

    useEffect(() => {

        const fetchUser = async () => {

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await apiRequest("/me");
                setUser(res.user);
            } catch (error) {
                console.error(error);
                localStorage.removeItem("token");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [token]);

    const login = async (email, password) => {
        console.log("EMAIL:", email);
        console.log("PASSWORD:", password);

        const res = await apiRequest("/login", {
            method: "POST",
            body: {
                email,
                password,
            }
        });

        localStorage.setItem("token", res.token);
        setUser(res.user);
        return res;

    };

    const logout = async () => {

        try {
            await apiRequest("/logout", {
                method: "POST"
            });
        } catch(error){
            console.error(error);
        }

        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                isAuthenticated,
                isAdmin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}