import React,{useContext,useState} from 'react';
import { Navbar, Nav,Button ,NavDropdown } from 'react-bootstrap';
import { AuthContext } from "../../auth/context/AuthContext";
import '../../styles/styles.css'

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';

const  NavegacionInicial=({ handleLogin,scrollToSection })=> {
    const { login, handlerLogout } = useContext(AuthContext);
    const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light className='custom-nav'>
    <MDBContainer fluid>
      
    <div className="col-md-3 text-center">
          <img alt="logo" src="../../images/vazco.jpg" />
    </div>

      <MDBNavbarToggler
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenBasic(!openBasic)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
        <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' onClick={() => scrollToSection('section2')}>
            <strong className='white-text'>Home</strong>
            </MDBNavbarLink>
          </MDBNavbarItem>
         
          <MDBNavbarItem>
         
            <MDBNavbarLink active aria-current='page' onClick={() => scrollToSection('section3')}>
            <strong className='white-text'>Productos Promoción</strong>
            </MDBNavbarLink>
          </MDBNavbarItem>



        </MDBNavbarNav>
     
  <button type="button" 
        class="btn-rounded" 
        
        onClick={() => scrollToSection('section1')}
        >
       <i class="bi bi-app-indicator"></i>
  </button> 
  <button type="button" 
        class="btn-rounded" 
        
        onClick={() => scrollToSection('section3')}
        >
        <i class="bi bi-tools"></i>
  </button> 
  <button type="button" 
        class="btn-rounded" 
        
        onClick={() => handleLogin()}
        >
        <i class="bi bi-person-fill"></i>
  </button> 
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  );
}



export default NavegacionInicial;
