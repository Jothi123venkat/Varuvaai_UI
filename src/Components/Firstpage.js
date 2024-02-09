import { Button, Container } from "@mui/material";
import React from "react";
import "./Firstpage.css";

const Firstpage = () => {
  return (
    <div className="banner">
      <Container>
        <h1 style={{ paddingTop: "6%",  fontSize:"60px",margin:'0px' }}> Fashion for  <br />Upcoming winter</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna  <br />aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
    
     
      </Container>
      <button className="btn"> View Collection</button>
    </div>
  );
};

export default Firstpage;
