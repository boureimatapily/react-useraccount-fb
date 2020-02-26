import React, { Component } from 'react'
import pencil from './icons/icons/pencil.svg'
import trash from './icons/icons/trash.svg'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { deleteAccount, getAllAccounts } from './redux/actions/CatActions'
import AddAccount from './AddAccount'

class Home extends Component {
    componentDidMount(){
        this.props.getAllAccounts()
    }
    deleteAccounts = (id)=>{
        this.props.deleteAccount(id)
    }
        
    render() {
        
        return (
            <div>       
                <Container>
                   <AddAccount />
                   
                    <Row>
                        <Col lg={{offset: 2 }} >
                        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        
                        
                    </tr>
                </thead>
                <tbody>

                {
                this.props.accounts.map(count=>{
                    return (
                    <tr>
                        <td>{count.userName}</td>
                    <td>{count.email}</td>
                    <td>{count.password}</td>
                    <td>
                        {
                                <Button  variant="secondary" >
                                         <Link to={"/edit/" + count.id}>  <img src={pencil} /> </Link>
                                       
                                    </Button>}

                                    {<Button variant="secondary"  onClick={()=>this.deleteAccount(count.id)}>                
                                    <img src={trash}  />
                                    </Button>
                                                 }
                                </td>
                    </tr>
                    )
                })
                }

                </tbody>

            </Table>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        account: state.accounts
    }
}

const mapDispatchToProps = {
    deleteAccount, getAllAccounts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
