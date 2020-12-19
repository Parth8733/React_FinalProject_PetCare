import React from 'react';
import Header from '../../shared/Header';

import { Container,Form,Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
   
    <Header title=" Contact  us "/>
     
    <Container>
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2" >
          Email
          </Form.Label>
          <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="petcare@gmail.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Phone 
          </Form.Label>
          <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="(249)987-0933" />
          </Col>
        </Form.Group>

        <Form.Text id="passwordHelpBlock" muted>
        We are open from MONDAY to SATURDAY -  Hours 09:00 - 18:30
        
        </Form.Text>

      </Form>
    </Container>


    </>
  );
}
 
export default About;