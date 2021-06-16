import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Header from '../Header/Header';
import './NavigationBar.scss';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="sm" className="navigation-bar">
      <Link to="/">
        <Navbar.Brand>
          <Header />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav>
          <NavLink className="navigation-bar__link" to="/">
            Home
          </NavLink>
          <NavLink className="navigation-bar__link" to="/help">
            Help
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
