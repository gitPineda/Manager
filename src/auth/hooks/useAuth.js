import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {

    console.log(initialLogin);
    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();
    

    const handlerLogin = ({ username, password }) => {
        const user = loginUser({ username, password });
        
        
        if (user) {

           // const { usuario, rol, token,respuesta } = isLogin;
         //   const user = islogin
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));

            navigate('/users')
            
        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }

    const pedido = (pedido) => {

        const pedidoActual = pedido;
        dispatch({
            type: 'pedido',
            payload: pedidoActual,
        });
       
    }
    return {
        login,
        handlerLogin,
        handlerLogout,
        pedido,
    }
}