import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAccountInfo } from './redux/CatActions'
import { Link } from 'react-router-dom'

class EditAccount extends React.Component {

    updateAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: this.props.match.params.id,
            userName:event.target.elements.userName.value,
            email:event.target.elements.email.value,
            password:event.target.elements.password.value,
            
        }
        this.props.updateAccountInfo(account)
        this.props.history.push('/')
    }

    render() {
        const id = this.props.match.params.id
        console.log(id)
        let account = this.props.accounts.find(item => {
            return item.id === id
        })
        console.log(account)

        return (
            <div>

                <Container>
                    <Row>

                        <Col lg={{ offset: 3 }} >
                            <Form onSubmit={this.updateAccount}>
                                <Link to="/">
                                    <p>Accounts</p>
                                </Link>
                                <Form.Group as={Row} controlId="userName">
                                    <Form.Label column lg={2}>
                                       User Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="usertName"
                                         defaultValue={account.userName}
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
                                            defaultValue={account.email}
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="password">
                                    <Form.Label column lg={2}>
                                        Password
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="password"
                                            placeholder="Password"
                                            defaultValue={account.password}
                                        />
                                    </Col>
                                </Form.Group>
                               
                                <Col className="d-flex justify-content-center">
                            <Button variant="primary" type="Submit">Update Account</Button>
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
    updateAccountInfo
}

const mapStateToProps = (state)=> {
    return {
        accounts: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
