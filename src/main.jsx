import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'
import './styles.css'
import { UsersApp } from './UsersApp'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     
      <AuthProvider>
     
     <UsersApp />
     
      
     
       
      </AuthProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
)
