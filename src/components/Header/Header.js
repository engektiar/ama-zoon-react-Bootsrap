 import React from 'react';
 import logo from "../../images/logo.png";
 import {Navbar,Container,NavDropdown,Nav,Form,FormControl} from "react-bootstrap";
 import "./Header.css";
import { Button } from 'bootstrap';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

 const Header = () => {
   return (
     <div>
      <Navbar className='header-full' bg="dark" variant={'dark'} expand="lg">
         <Container fluid>
    <Navbar.Brand href="#">
      <img className='logo' src={logo}></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Form className="d-flex header-from">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      > 
     
        <Nav.Link  href="#action1">
        <span className='gust'>Hello Gust</span>
         <span className='headerLink'>Sing In</span> 
        </Nav.Link>
        <Nav.Link href="#action1">
        <span className='gust'>Return</span>
         <span className='headerLink'>& orders</span>
        </Nav.Link>
        <Nav.Link href="#action1">
        <span className='gust'>your</span>
         <span className='headerLink'>prime</span>
        </Nav.Link>
        <Nav.Link >
          <span className='basket'><LocalGroceryStoreIcon/></span> 
           <span className='basket'>0</span>
        </Nav.Link>
      </Nav>
               
    </Navbar.Collapse>
  </Container>
</Navbar>
     </div>
   );
 };
 
 export default Header;