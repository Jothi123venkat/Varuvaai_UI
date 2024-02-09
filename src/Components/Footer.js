import React from 'react';
import { Button, Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { FaFacebookF, FaWhatsapp, FaGlobe, FaBehance } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { foot } from '../Assets/logo';

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit,
              incididunt ut
              labore dolore magna aliqua.
            </p>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div style={{textAlign:"center"}}>
            <h1>Newsletter</h1>
            <p>Stay updated with our latest trends</p>
            <input type="text" style={{ lineHeight: "30px" }} />
            <Button style={{ backgroundColor: "blue", color: "white" }}>
              <ArrowRightAltIcon style={{ margin: "0px" }} />
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <div>
            <h1>Instagram Feed</h1>
            <img src={foot} alt="img" style={{ width: "100%" }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
      <div>
        <h1>Follow Us</h1>
        <p>Let us be social</p>
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <FaFacebookF />
          </Grid>
          <Grid item>
            <FaWhatsapp />
          </Grid>
          <Grid item>
            <FaGlobe />
          </Grid>
          <Grid item>
            <FaBehance />
          </Grid>
        </Grid>
      </div>
    </Grid>
      </Grid>
      <p style={{ textAlign: "center" ,paddingTop:"20px"}}>
        Copyright ©2024 All rights reserved |
        This template is made with
        <FavoriteBorderIcon style={{ margin: "0" }} /> by Colorlib
      </p>
    </div>
  );
}

export default Footer;
