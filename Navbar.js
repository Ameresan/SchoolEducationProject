import React from 'react'
import {NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './School.css'

// export default function Navbar() {
//   return (
//     <div id='nav'>
//         <nav>
//             <li><NavLink to='/'>home</NavLink></li>
//             <li><NavLink to='/about'>About</NavLink></li>
//          </nav>
         
         
//     </div>
//   )
// }
function NavScrollExample() {
  return (
    <div>
    <Navbar expand="lg" className="" id='hii'> 
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <img src='data:image/jpeg;base64,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' width={50} height={50}></img>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">Facilites</Nav.Link>
            <NavDropdown title="Students" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="/login">
                Login
               {/* <NavDropdown title='classq' id='navbarScrollingDropdown'> */}
                
               {/* </NavDropdown> */}
               
               
                </NavDropdown.Item>
              <NavDropdown.Item href="">
                Sinup
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Result
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/admin">
              Admin
            </Nav.Link>
            {/* <Nav.Link href="/admin">
              Admin
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <div>
      {/* <h1>High School </h1> */}
    </div>
    </div>
  
  );
}

export default NavScrollExample;


