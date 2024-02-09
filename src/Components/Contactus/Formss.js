import { Grid } from "@mui/material";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";

const Formss = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "40px",
      }}
    >
      <Grid container direction="row" justifyContent="left" alignItems="center">
        <Grid item md={4}>
          <ul style={{listStyleType:'none'}}>
            <li className="side-list" style={{display:'flex',alignItems:'flex-start',gap:'10px'}}>
              <div>
                <FaHome />
              </div>
              <div>
                <p>California, United States<br/>
                <span>Santa Monica Boulevard</span></p>
              </div>
            </li>
            <li style={{display:'flex',alignItems:'flex-start',gap:'10px'}}>
              <div>
                <FaPhoneAlt style={{paddingRight:'10px'}}/>
              </div>
              <div>
              <p>California, United States<br/>
                <span>Santa Monica Boulevard</span></p>
              </div>
            </li >
            <li style={{display:'flex',alignItems:'flex-start',gap:'10px'}}>
              <div>
                <IoIosMail />
              </div>
              <div>
              <p>California, United States<br/>
                <span>Santa Monica Boulevard</span></p>
              </div>
            </li>
          </ul>
        </Grid>

        <Grid
          md={4}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "40px",
            alignItems:"flex-end"
          }}
        >
          <div>
            <Form>
              <Row>
                <Form.Control placeholder="First name" />

                <Form.Control
                  type="password"
                  placeholder="Password"
                  style={{ marginTop: "20px" ,justifyContent:"left" }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Subject"
                  style={{ marginTop: "20px" }}
                />
              </Row>
            </Form>
          </div>
        </Grid>

        <Grid md={4}>
          <Form>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Enter Message</Form.Label>
              <Form.Control as="textarea" rows={3} style={{display:"inline"}}/>
              <Button variant="outline-primary" style={{marginTop:"0px",marginLeft:"200px"}}>
                Sent Message
              </Button>
            </Form.Group>
          </Form>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default Formss;
