import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';
import { contexto } from '../../context/CartContext';
import './estilo.css';

const NavBar = () => {
  const {cart} = useContext(contexto);

  return (
    <Navbar bg='light' expand='lg' id='nav-bar'>
      <Container fluid='xl' id='container'>
        <NavLink className='nav-link' to='/'><Navbar.Brand id='logo'>Pañalera Milev&Co</Navbar.Brand></NavLink>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/category/Pampers'>Pampers</NavLink>
            <NavLink className='nav-link' to='/category/Babysec'>Babysec</NavLink>
            <NavLink className='nav-link' to='/category/Huggies'>Huggies</NavLink>
            <NavLink className='nav-link' to='/category/Estrella'>Estrella</NavLink>
          </Nav>
          { cart.length ?
          <NavLink className='nav-link' to='/cart'><CartWidget/></NavLink>
          :
          <></>
          }
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
  );
};

export default NavBar;