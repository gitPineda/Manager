import React, { useContext,useEffect } from 'react';

import { AuthContext } from '../auth/context/AuthContext';
import '../styles.css'
import { Card } from 'react-bootstrap'
import Opciones from '../data/Opciones'
import { Navigate, Route, Routes ,Link,useNavigate} from "react-router-dom"



const MenuPrincipal = () => {



    const { login } = useContext(AuthContext);
    console.log(login.user?.rol)
   
   

    const handleButtonClick = (link, isDisabled) => {
        console.log(isDisabled)
        if (!isDisabled) {
          // Aquí puedes agregar la lógica para redireccionar o realizar alguna acción cuando se haga clic en el botón
          navigate('/login')
        }

      };

  const renderButtons = () => {
    const buttonsPerRow = 3;
    const rows = [];
    let buttons= [];

    switch (login.user?.rol) {
      case 'administrador':
         buttons=Opciones.administrador;
      break;
      case 'caja':
          buttons=Opciones.caja;
          break;
      default:
          buttons=Opciones.vendedor;
          break;
    }


    for (let i = 0; i < buttons.length; i += buttonsPerRow) {
        const rowButtons = buttons.slice(i, i + buttonsPerRow);
        rows.push(

          <div class="container">
          <div key={i} className="row">

            {rowButtons.map((button, index) => (
              <div key={index} className="col-3">


                {/* {login.user?.rol === button.rol ? ( */}

                  <Link  to={button.link}  style={{ textDecoration: 'none' }} >

                    <Card style={{ width: '100%',height: '100%' ,borderRadius: '15px' }} className="text-center">
                    <Card.Img variant="top" src={button.imagen} style={{ width: '100px',height: '100px',  margin: 'auto', display: 'block',borderRadius: '15px 15px 0 0' }} />
                    <Card.Body>
                  <Card.Title></Card.Title>
                       <Card.Text> {button.label} </Card.Text>
                         </Card.Body>
             </Card>

                  </Link>
                {/* )
                : (
                  <></>

                )
                } */}

              </div>
            ))}
          </div>
          </div>
        );
      }

    return rows;
  };



  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      console.log('intenta salir')
      navigate('/users'); // Puedes cambiar esto por otra ruta si deseas redirigir a otro lugar
    };
    console.log('intenta salir')
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [navigate]);



  return   <>
    
  <div className="dashboard">{renderButtons()}</div>
  </>



};

export default MenuPrincipal;