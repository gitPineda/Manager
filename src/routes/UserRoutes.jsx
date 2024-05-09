import { Navigate, Route, Routes } from "react-router-dom"
import Navegacion from "../components/layout/Navegacion"
import MenuPrincipal from "../components/MenuPrincipal"

import PreventGoBack from "../components/PreventGoBack"
import { UserProvider } from "../context/UserProvider"

import OrdenesPage from "../pages/OrdenesPage"

import PedidoPage from "../pages/PedidoPage"
import { RegisterPage } from "../pages/RegisterPage"


export const UserRoutes = () => {

    const PreventGoBackPedidoPage = PreventGoBack(PedidoPage);
    const PreventGoBackMenuPrincipal = PreventGoBack(MenuPrincipal);
    
    return (
        <>
            <UserProvider>
            <Navegacion />
                <Routes>
                                      
                    <Route path="users" element={<PreventGoBackMenuPrincipal />} />
                    <Route path="/PedidoPage" 
                    element={
                        <PreventGoBackPedidoPage
                          {...{ preventGoBack: true, from: '/PedidoPage' }}
                        />
                      } />
                    <Route path="users/OrdenesPage" element={<OrdenesPage/>} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="users/edit/:id" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                    
                </Routes>
            </UserProvider>
        </>
    )
}