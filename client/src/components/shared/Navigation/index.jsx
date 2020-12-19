import React, { useContext } from 'react';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';

const NavLink = (props) => {
  // This function allows us to use React Router
  // with React Bootstrap. Booooya
    return (
    <Nav.Link
      href={props.href}
      onClick={e => {
        e.preventDefault();
        props.navigate(props.href);    
      }}
    >
      {props.children}
    </Nav.Link>
  );
};

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Pet Care</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" component={NavLink}>Home</Link>
          <Link to="/About" component={NavLink}>Contact</Link>

          {user && user.token ? (
            <>

             {/*'DropDown Bookings'*/}   
          <NavDropdown title="Bookings" id="basic-nav-dropdown">
              <NavDropdown.Item> <Link  to="/booking" component={NavLink}>Your bookings</Link>       </NavDropdown.Item>
              <NavDropdown.Item> <Link  to="/booking/create" component={NavLink}>New</Link>          </NavDropdown.Item>
              <NavDropdown.Item> <Link  to="/booking" component={NavLink}>Edit</Link>           </NavDropdown.Item>
              <NavDropdown.Item> <Link  to="/booking" component={NavLink}>Cancel</Link>              </NavDropdown.Item>
          </NavDropdown>
    
                 {/*'DropDown User'*/}
         <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>  <Link to="/users" component={NavLink}>Users</Link>              </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/profile" component={NavLink}>Your Profile</Link>      </NavDropdown.Item>
              <NavDropdown.Item> <Link to="/profile/edit" component={NavLink}>Edit Profile</Link> </NavDropdown.Item>
         </NavDropdown>
              
              {/*'Logout'*/}
              <Link to="/logout" component={NavLink}>Logout</Link>
            </>
           ) : (
            <>
              {/*'Login - out of authentication and logged in permissions'*/}
              <Link to="/login" component={NavLink}>Login</Link>
              <Link to="/register" component={NavLink}>Register</Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default Navigation;