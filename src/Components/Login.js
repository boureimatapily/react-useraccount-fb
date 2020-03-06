import React, { Component } from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'


class Login extends Component {
    handleSubmit=(event)=> {
        event.preventDefault();
        let account ={
            logname:event.target.elements.logname.vlaue,
            logpwd:event.target.elements.logpwd.value
        }
    }



  render() {
    return (
      <div>
          <div className="headerContent">
         <Container>
                    <Row>

                        <Col lg={{ offset: 3 }} >
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group as={Row} controlId="logname">
                                    <Form.Label column lg={2}>
                                       User Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="logname"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                    
                                </Form.Group>
                                <Form.Group as={Row} controlId="logpwd">
                                    <Form.Label column lg={2}>
                                       Password
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="password" name="logpwd"
                                            placeholder="Password"
                                        />
                                    </Col>
                                </Form.Group>
                                <Button variant="primary" type="Submit" id="btnlogsignup">Login</Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                </div>
      </div>
    )
  }
}

export default Login
