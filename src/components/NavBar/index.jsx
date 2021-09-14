import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget';
import './estilo.css';

const NavBar = () => (
    <Navbar bg='light' expand='lg' className='nav-bar'>
      <Container fluid='xl'>
        <NavLink className='nav-link' to='/'><Navbar.Brand>Pañalera</Navbar.Brand></NavLink>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/category/1'>Pampers</NavLink>
            <NavLink className='nav-link' to='/category/2'>Babysec</NavLink>
            <NavLink className='nav-link' to='/category/3'>Huggies</NavLink>
            <NavLink className='nav-link' to='/category/4'>Estrella</NavLink>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Container>
    </Navbar>
);

export default NavBar;
