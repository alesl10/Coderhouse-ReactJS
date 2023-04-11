import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import CartWidget from '../cardWidget'
import logo from '../../assets/images/sB.png'
import './navbar.css'



function NavBar() {

    return (
        <Navbar bg="ligth" className='navbarPers' >
            <Container>
                <Navbar.Brand >
                    <NavLink to={'/'}><img
                        alt="logo saphirus bri"
                        src={logo}
                        width="150"
                        height="150"
                    /></NavLink>
                    <NavLink className="navTittleName" to={'/'}>Saphirus.Bri</NavLink>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >
                            <NavLink className="navTittle" to={'/contact'}>Contacto</NavLink>

                        </Nav.Link>
                        <NavDropdown className="navTittle" title="Fragancias" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <NavLink className="navTittle" to={'/category/aerosol'}>Aerosoles</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink className="navTittle" to={'/category/esencia'}>Esencias</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <NavLink className="navTittle" to={'/category/textil'}>Textil</NavLink>

                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <NavLink className="navTittle" to={'/category/aparato'}>Aparatos</NavLink>

                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar