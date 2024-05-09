
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { data } from "../../components/Presentacion/data";
import React, { lazy, Component ,useContext, useState} from "react";
import '../../styles/styles.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Container, Row, Col, Card, Button  } from 'react-bootstrap';

import Sidebar from 'react-sidebar';



import "react-image-gallery/styles/css/image-gallery.css";
import Banner from "../../components/Presentacion/Banner";

import LineDivision from "../../components/LineDivision";

import NavegacionInicial from "../../components/layout/NavegacionInicial";



import Slider from "../../components/Presentacion/Slider";

import Footer from "../../components/Presentacion/Footer";




const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext);
    
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const productosEnPromocion = [
      { id: 1, nombre: 'Producto 1', precio: 20, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' },
      { id: 2, nombre: 'Producto 2', precio: 25, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' },
      { id: 3, nombre: 'Producto 3', precio: 30, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' },
      { id: 4, nombre: 'Producto 1', precio: 20, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' },
      { id: 5, nombre: 'Producto 2', precio: 25, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' },
      { id: 6, nombre: 'Producto 3', precio: 30, imagen: 'https://pngimg.es/d/pizza_PNG43991.png' }
    ];
  
    // Simulando datos de noticias
    const noticias = [
      { id: 1, titulo: 'Noticia 1', contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, titulo: 'Noticia 2', contenido: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, titulo: 'Noticia 3', contenido: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }
    ];

    const images = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
      {
        original: "https://picsum.photos/id/1015/1000/600/",
        thumbnail: "https://picsum.photos/id/1015/250/150/",
      },
      {
        original: "https://picsum.photos/id/1019/1000/600/",
        thumbnail: "https://picsum.photos/id/1019/250/150/",
      },
    ];
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        // aca implementamos el login
        handlerLogin({username, password});
        
        setLoginForm(initialLoginForm);
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const productosPorPagina = 3; // Establecer el número de productos por página
  const [paginaActual, setPaginaActual] = useState(0);

  // Calcular el índice de inicio y final de los productos a mostrar en la página actual
  const indiceInicio = paginaActual * productosPorPagina;
  const indiceFinal = indiceInicio + productosPorPagina;

  // Obtener los productos a mostrar en la página actual
  const productosEnPagina = productosEnPromocion.slice(indiceInicio, indiceFinal);
const handleLogin=()=>{
  setSidebarOpen(!sidebarOpen)
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// const iconProducts = data.iconProducts;
//     const rows = [...Array(Math.ceil(iconProducts.length / 4))];
//     // chunk the products into the array of rows
//     const productRows = rows.map((row, idx) =>
//       iconProducts.slice(idx * 4, idx * 4 + 4)
//     );
let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

     
    return (
<Sidebar
      sidebar={
        <MDBContainer fluid className="p-3 my-5">
          <MDBRow>
            

            <MDBCol col='4' md='8'>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="lead fw-normal mb-0 me-3">Inicio de Session</p>
               
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0"></p>
              </div>
              <form onSubmit={onSubmit}>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' size="lg" placeholder="Username" name="username" onChange={onInputChange} />
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" placeholder="Password" name="password" onChange={onInputChange} />
               
                <MDBBtn className="mb-4 w-100" size="lg">Iniciar Session</MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
          
        </MDBContainer>
      }
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white", width: "50%", zIndex: 2 } }}
    >
      <div style={{ width: 'fit-content', float: 'right' }}>
      {/* <button type="button" 
      class="btn-rounded" 
      onClick={() => handleLogin()}
      >
  <i class="bi bi-person-fill"></i>
</button> */}

 
  
</div>

  <div style={{marginTop:'30px'}}>
<div style={{marginBottom:'20px'}}>
<Row>
        <Col md={10}>
<NavegacionInicial  handleLogin={handleLogin} scrollToSection={scrollToSection}/>
</Col>
      </Row>
</div>
      {/* Sección de noticias */}

      <div id='section1'>
      <Row>
        <Col md={10}>
         <Banner data={data.banner}/>
        </Col>
      </Row>
      </div>
      <LineDivision/>
      <div id='section2'>
      <Row>
      <Col md={10}>

        
        <div className="custom-bg bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Productos en Promoción</h4>
        </div>
          

  <Slider ></Slider>
     
  </Col>
       
      </Row>
      </div>
      <Row>
        <Col md={10}>
        
        </Col>
     </Row>
      {/* Sección de productos en promoción */}
      <div id='section3'>
      <Row>
        <Col md={10}>
        <div className="custom-bg bg-gradient p-3 text-center mb-3">
          <h4 className="m-0">Productos mas vendidos</h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              
                <img
                  src="../../images/category/male.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Men's Clothing</div>
             
            </div>
            <div className="col-md-3">
            
                <img
                  src="../../images/category/female.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Women's Clothing</div>
              
            </div>
            <div className="col-md-3">
             
                <img
                  src="../../images/category/smartwatch.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Smartwatch</div>
              
            </div>
            <div className="col-md-3">
              
                <img
                  src="../../images/category/footwear.webp"
                  className="img-fluid rounded-circle"
                  alt="..."
                />
                <div className="text-center h6">Footwear</div>
              
            </div>
          </div>
        </div>
          
        </Col>
      </Row>

      </div>
      
      </div>
      <Footer />
     
    </Sidebar>
      
    );

}