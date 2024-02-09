import { Button } from '@mui/material'
import React from 'react'
import { Form } from 'react-bootstrap'

const Review2 = () => {
  return (
    <div style={{width:"500px"}}>
          <Form>
        <h1>Post a comment</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="Text" placeholder="Your Full Name" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="number" placeholder="Phone NUmber" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={6} placeholder='Message' />
      </Form.Group>

    <Button sx={{marginLeft:"350px"}}>Submit Now</Button>

      
     
    </Form>
    </div>
  )
}

export default Review2