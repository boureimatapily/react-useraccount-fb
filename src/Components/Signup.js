import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { createNewUser } from './redux/actions/authActions';

class Signup extends Component {
    onLogin = ()=>{
        this.props.history.push('/login');
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        this.props.createNewUser(email,password,this.onLogin)
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
                                <Button variant="primary" type="Submit" id="btnlogsignup">Sign up</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                </div>
      </div>
    )
  }
}

export default connect(null,{createNewUser})(Signup)
