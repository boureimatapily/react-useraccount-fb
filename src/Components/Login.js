import React, { Component } from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { authenticateUser, authenticateWithGoogle } from './redux/actions/authActions';
import { connect } from 'react-redux';


class Login extends Component {
    onLogin = ()=>{
        this.props.history.push('/');
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        this.props.authenticateUser(email,password, this.onLogin);
    }



  render() {
    return (
      <div>
          <div className="headerContent">
         <Container>
                    <Row>

                        <Col lg={{ offset: 3 }} >
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="email">
                                    <Form.Label column lg={2}>
                                       Email
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="email"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                    
                                </Form.Group>
                                <Form.Group as={Row} controlId="password">
                                    <Form.Label column lg={2}>
                                       Password
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="password" name="password"
                                            placeholder="Password"
                                        />
                                    </Col>
                                </Form.Group>
                                <Button variant="primary" type="Submit" id="btnlogsignup">Login</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                <Button onClick={()=>{this.props.authenticateWithGoogle(this.onLogin)}}>Login with Google</Button>
                </div>
      </div>
    )
  }
}

export default connect(null,{authenticateUser, authenticateWithGoogle})(Login)
