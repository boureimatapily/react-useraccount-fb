import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import {  editAccount } from './redux/actions/CatActions'
import { Link } from 'react-router-dom'

class EditAccount extends React.Component {

    updateAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: this.props.match.params.id,
            userName:event.target.elements.userName.value,
        }
        this.props. editAccount(account)
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
                                    <Button variant="primary" type="Submit">Update Account</Button>
                                </Form.Group>
                            </Form>
                        </Col>

                    </Row>
                </Container>
                


            </div>

        )

    }

}

const mapDispatchToProps = {
    editAccount
}

const mapStateToProps = (state)=> {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
