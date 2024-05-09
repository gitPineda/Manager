import { useContext } from 'react';
import { Navigate, Route, Routes ,BrowserRouter } from 'react-router-dom';
import { AuthContext } from './auth/context/AuthContext';
import { LoginPage } from './auth/pages/LoginPage';
import { UserRoutes } from './routes/UserRoutes';




import PreventGoBack from './components/PreventGoBack';


export const UsersApp = () => {
    
    const { login } = useContext(AuthContext);

    const PreventGoBackLoginPage = PreventGoBack(LoginPage);
    const PreventGoBackUserRoutes = PreventGoBack(UserRoutes);
    return (

      <Routes>
      {
          login.isAuth
              ? (
                  <Route path='/*' element={<PreventGoBackUserRoutes />} />
              )
              : <>
                 
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/*' element={<Navigate to="/login" /> } />
              </>
              
      }
  </Routes>
        
    );
}

//useRoutesCobrador