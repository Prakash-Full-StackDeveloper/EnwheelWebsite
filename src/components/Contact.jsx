import React from 'react';
import {useState} from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact=()=> {
    const [FName,setFName]=useState("");
    const [email,setEmail]=useState("");
    const [Msg,setMsg]=useState("");
    const InputName=(e)=>{
        return setFName(e.target.value);
    }
    const InputEmail=(e)=>{
        return setEmail(e.target.value);
    }
    const InputMsg=(e)=>{
        return setMsg(e.target.value);
    }
  return (<>
    <Container className="mt-5">
      <h2 className="text-center">Contact Us</h2>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              type="text" 
              value={FName}
              onChange={InputName}
              placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              type="email" 
              value={email}
              onChange={InputEmail}
              placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
              as="textarea" 
              rows={5} 
              value={Msg}
              onChange={InputMsg}
              placeholder="Enter your message" />
            </Form.Group>

            <Button 
            variant="primary" 
            type="submit" 
            className="mt-3">
            {/* {alert(`Querry Submited`)} */}
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Contact;
