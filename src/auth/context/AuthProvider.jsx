import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }) => {
    
    const { login, handlerLogin, handlerLogout ,pedido} = useAuth();

    return (
        <AuthContext.Provider value={
            {
                login,
                handlerLogin,
                handlerLogout,
                pedido
            }
        }>
            {children}
        </AuthContext.Provider>
    )
}