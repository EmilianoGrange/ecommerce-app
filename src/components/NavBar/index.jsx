import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';
import {contexto} from '../../context/CartContext';
import './estilo.css';

const NavBar = () => {
  const {cart} = useContext(contexto);

  return (
    <Navbar bg='light' expand='lg' className='nav-bar'>
      <Container fluid='xl'>
        <NavLink className='nav-link' to='/'><Navbar.Brand>Pañalera</Navbar.Brand></NavLink>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/category/Pampers'>Pampers</NavLink>
            <NavLink className='nav-link' to='/category/Babysec'>Babysec</NavLink>
            <NavLink className='nav-link' to='/category/Huggies'>Huggies</NavLink>
            <NavLink className='nav-link' to='/category/Estrella'>Estrella</NavLink>
          </Nav>
        </Navbar.Collapse>
        { cart.length ?
          <NavLink className='nav-link' to='/cart'><CartWidget/></NavLink>
          :
          <></>
        }
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
  );
}

export default NavBar;
