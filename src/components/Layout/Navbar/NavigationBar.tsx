import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Header from '../Header/Header';
import './NavigationBar.scss';

function NavigationBar() {
  return (
    <Navbar bg="light" className="navigation-bar">
      <Link to="/">
        <Navbar.Brand>
          <Header />
        </Navbar.Brand>
      </Link>
      <Nav>
        <NavLink className="navigation-bar__link" to="/">
          Home
        </NavLink>
        <NavLink className="navigation-bar__link" to="/help">
          Help
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
