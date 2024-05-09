import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
            </Nav>
            <Button variant="outline-primary" className="me-2">Iniciar Sesión</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          {/* Definir rutas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </Container>
    </Router>
  );
};

const Inicio = () => <h1>Inicio</h1>;
const Productos = () => <h1>Productos</h1>;
const Noticias = () => <h1>Noticias</h1>;

export default Home;

