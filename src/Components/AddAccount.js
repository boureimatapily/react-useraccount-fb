import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect} from 'react-redux'
import   {addNewAccount}  from './redux/CatActions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class AddAccount extends React.Component{

    addAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: Math.random().toString(36).substr(2, 5),
            userName:event.target.elements.userName.value,
            email:event.target.elements.email.value,
            password:event.target.elements.password.value,
        }
        this.props.addNewAccount(account)
        // this.props.history.push('/')
    }

        render(){
           
            return(
                <div>

                <Container>
                    <Row>

                        <Col  lg={{offset: 3 }} >
                            <Form onSubmit={this.addAccount}>
                                <Form.Group as={Row} controlId="userName">
                                    <Form.Label column lg={2}>
                                       User Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="userName"
                                             placeholder="User Name"
                                             />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="email">
                                    <Form.Label column lg={2}>
                                        Email
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="email"
                                         placeholder="email"
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
                                <Col className="d-flex justify-content-center">
                            <Button variant="primary" type="submit">Add Account</Button>
                        </Col>
                            </Form>
                        </Col>

                    </Row>
                </Container>


                </div>

            )
        
        }
        
}

const mapDispatchToProps = {
    addNewAccount
}

export default connect(null, mapDispatchToProps)(AddAccount)
