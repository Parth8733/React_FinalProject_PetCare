import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <>
      <Header title="Login">   </Header>
      
      <Container>
          <LoginForm/>
      </Container>
    </>
  );
}
 
export default Login;