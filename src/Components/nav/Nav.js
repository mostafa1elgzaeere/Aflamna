import React from 'react';
import {Nav,Navbar,Container,Button,NavDropdown} from "react-bootstrap"
import "./Nav.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faUserAlt} from "@fortawesome/free-solid-svg-icons";



function Navv({userDataObject,logOut}) {
    return (
            
            <div className="bg-black mt-1">
<Navbar className="container" expand="lg">

  {userDataObject?  <Container fluid>
  <Link to="/" className="p-2 nav-link"><Navbar.Brand className="text-white pr-5">AFLA<span class="text-danger">MN</span>A</Navbar.Brand></Link>



    <Navbar.Toggle  className="bg-light" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
      >


      <Link to ="/" className="text-light nav-link">Home</Link>
      <Link to ="/search" className="text-light nav-link">Search</Link>

      <Link to ="/about"  className="text-light nav-link">About</Link>

      <Link to ="/faqs" className="text-light nav-link">Faqs</Link>




        <NavDropdown title="Featuers" id="basic-nav-dropdown" className="text-white ">
        <Link to="/vote" className="text-dark mx-5">Vote</Link>
<br></br>
<hr></hr>
        <Link to="/statics"  className="text-dark mx-5">Statics</Link>

                 </NavDropdown>





      </Nav>

      <p className='text-light pt-3'> <FontAwesomeIcon icon={faUserAlt} className="mx-2"></FontAwesomeIcon>{`${userDataObject.first_name} ${userDataObject.last_name}`}</p>
      <Link to="" onClick={logOut} className="p-2 nav-link btn btn-secondary ml-2 pd-2 mx-2 text-light">LogOut</Link>



    </Navbar.Collapse>
  </Container> :  <Container fluid>
  <Link to="/" className="p-2 nav-link"><Navbar.Brand className="text-white pr-5">AFLA<span class="text-danger">MN</span>A</Navbar.Brand></Link>



    <Navbar.Toggle  className="bg-light" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
      >


      <Link to ="/" className="text-light nav-link">Home</Link>
      <Link to ="/search" className="text-light nav-link">Search</Link>

      <Link to ="/about"  className="text-light nav-link">About</Link>

      <Link to ="/faqs" className="text-light nav-link">Faqs</Link>




        <NavDropdown title="Featuers" id="basic-nav-dropdown" className="text-white ">
        <Link to="/vote" className="text-dark mx-5">Vote</Link>
<br></br>
<hr></hr>
        <Link to="/statics"  className="text-dark mx-5">Statics</Link>

                 </NavDropdown>





      </Nav>


      <Link to="/login" className="p-2 nav-link btn btn-danger ml-2 pd-2 mx-2 text-light">Login</Link>
      <Link to="/register" className="p-2 nav-link btn  btn-secondary my-1 ml-2 pd-2 mx-2 text-light">Signup</Link>



    </Navbar.Collapse>
  </Container>}

</Navbar>
    </div>
    );
}

export default Navv;