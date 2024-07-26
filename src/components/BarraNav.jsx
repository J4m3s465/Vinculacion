import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNav() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/inicio">Inicio</Navbar.Brand>
      <Nav className="me-auto">
        
        <Nav.Link href="/base">Base</Nav.Link>
        <Nav.Link href="#registro">Registro</Nav.Link> 
      </Nav>
    </Container>    
  </Navbar>
  )
}

export default BarraNav