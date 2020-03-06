import React, { Component } from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'


class Signup extends Component {

    handleSubmit=(event)=> {
        event.preventDefault();
        let account ={
            signname:event.target.elements.signname.vlaue,
            sgignpwd:event.target.elements.signpwd.value
        }
    }

  render() {
    return (
      <div>
          <div className="headerContent">
         <Container>
                    <Row>

                        <Col lg={{ offset: 3 }} >
                            <Form>
                                <Form.Group as={Row} controlId="sgnname">
                                    <Form.Label column lg={2}>
                                       User Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="sgnname"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                    
                                </Form.Group>
                                <Form.Group as={Row} controlId="sgnpwd">
                                    <Form.Label column lg={2}>
                                       Password
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="password" name="signpwd"
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

export default Signup
