import React, {useContext, Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar,NavDropdown, Container } from 'react-bootstrap'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

import AuthContext from '../context/authContext/authContext'


const NavBar = () => {
    const {userAuth} = useContext(AuthContext)
    const navActivation = (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav_">
            <Container className='navhover'>
                <Navbar.Brand>
                    <Link to="/home" class="navBrand">
                        <h2>CNWA Tool</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    
                        <Nav>
                            <Nav.Link>
                            <Link to="/home" className="routerLinks">
                                <button>
                                    Home
                                </button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                            <Link to="/signin" className="routerLinks">
                                <button>
                                    Signin
                                </button>
                            </Link>
                            </Nav.Link>                            
                            <Nav.Link>
                            <Link to="/contact" className="routerLinks">                                
                                <button>
                                    Contact
                                </button>
                            </Link>
                            </Nav.Link>
                            <Nav.Link>
                            <Link to="/about" className="routerLinks">                                
                                <button>
                                    About
                                </button>
                            </Link>
                            </Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>                   
    </Fragment>
    )
    return(
        <div>
            {userAuth ? null : navActivation}
        </div>        
    )
    
}


export default NavBar;