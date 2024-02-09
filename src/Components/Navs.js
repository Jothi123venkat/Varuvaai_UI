import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../Assets/logo';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { IoPerson, IoCartSharp } from 'react-icons/io5';
import './Navs.css';
import { Button } from '@mui/material';
import MaterialModal from './MaterialModal'

const Navs = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div >
      <div style={{display:"flex",justifyContent:"space-between" }} >

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <p style={{ marginTop: '4px', color: '#777777' }}>CALL US: 012 44 5698 7456 896</p>
      </div>
      <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button style={{ color: '#777777' }} className='TopNav'>
          <MaterialModal/>
        </Button>
        <span style={{ margin: '0 10px' }}>|</span>
        <Button style={{ color: '#777777' }} className='TopNav'>My Account</Button>
        <span style={{ margin: '0 10px' }}>|</span>
        <Button style={{ color: '#777777' }} className='TopNav'>Contact us</Button>
      </div>
    </div>
  




      </div >
     <div style={{backgroundColor:"#fff"}} >
     <Navbar expand="lg" style={{position:"sticky",top:"0px"}}>
        <Container>
          <Link to="/">
            <img src={logo} alt="img" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" style={{ alignItems: 'center'}}>
              <Link to="/">Home</Link>
              <NavDropdown
                title="Shop"
                id="basic-nav-dropdown"
                show={showDropdown}
                onMouseOver={() => setShowDropdown(true)}
                onMouseOut={() => setShowDropdown(false)}
                style={{
                  transition: 'opacity 1s, visibility 1s',
                  backgroundColor: 'white', // Set background color to white
                  // textAlign: 'center',
                }}
              >
                <div style={{ textDecoration: "none", textAlign: "initial" }}  >
                  <NavDropdown.Item style={{margin:"0px", padding:"0px"}}>
                  <NavDropdown.Item href="#action/3.2" style={{margin:"0px"}} className='DropDown'>  <Link to="/Shop" style={{margin:"0px"}}className='DropDown'>Shop Category</Link></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" style={{margin:"0px"}} className='DropDown'>  <Link to="/Productdetails" style={{margin:"0px"}}className='DropDown'>Product Details</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"  style={{margin:"0px"}}className='DropDown' >Product Checkout</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4"   style={{margin:"0px"}} className='DropDown'>Shopping Cart</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4"   style={{margin:"0px"}} className='DropDown'>Confirmation</NavDropdown.Item>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Link to="/">Blog</Link>
              <Link to="/">Pages</Link>
              <Link to="/Contact">Contact</Link>
            </Nav>
            <div className="icons-container">
              <FaSearch className="icon" />
              <IoPerson className="icon" />
              <FaHeart className="icon" />
              <IoCartSharp className="icon" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     </div>
    </div>
  );
};

export default Navs;
