import React from 'react'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'

class AccountFrom extends React.Component{

        render(){
            const  {AccountName, AccountNumber, BankBranch, BankName, 
                refresh, updateAccount, addAccount, handleChange} = this.props
            return(
                <div>

                <Container>
                    <Row>

                        <Col  lg={{offset: 3 }} >
                            <Form>
                                <Form.Group as={Row} controlId="AccountName">
                                    <Form.Label column lg={2}>
                                        Account Name
                                     </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="AccountName"
                                            value={AccountName} placeholder="Account Name"
                                            onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="anumber">
                                    <Form.Label column lg={2}>
                                        Account Number
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="AccountNumber"
                                            value={AccountNumber} placeholder="Account Number"
                                            onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="bname">
                                    <Form.Label column lg={2}>
                                        Bank Name
                                </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="BankName"
                                            value={BankName} placeholder="Bank Name"
                                            onChange={handleChange} />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="bbranch">
                                    <Form.Label column lg={2}>
                                        Bank Branch
                              </Form.Label>
                                    <Col lg={4}>
                                        <Form.Control type="text" name="BankBranch"
                                            value={BankBranch} placeholder="Bank Branch"
                                            onChange={handleChange} />
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="primary" onClick={addAccount}>Add Account</Button>
                            <Button variant="success" onClick={addAccount}>Update</Button>
                            <Button variant="secondary" onClick={refresh}>Refresh</Button>

                        </Col>
                    </Row>
                   
                </Container>


                </div>

            )
        
        }
        
}

export default AccountFrom;
