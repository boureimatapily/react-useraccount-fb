import React, { Component } from 'react'
import pencil from './icons/icons/pencil.svg'
import trash from './icons/icons/trash.svg'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { deleteAccount, getAllAccounts } from './redux/actions/CatActions'
import { logoutUser  } from './redux/actions/authActions';
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
                <div className="headerContent">
                
                <div className="mainContent">
                
                      
                <Container>
                <a onClick={this.props.logoutUser}><Button>Logout</Button></a>
                   <AddAccount />
                   
                    <Row>
                        <Col lg={{offset: 2 }} >
                        <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User Name</th>   
                        <td>PAID</td>             
                    </tr>
                </thead>
                <tbody>

                {
                this.props.account.map(count=>{
                    return (
                    <tr>
                        <td>{count.userName}</td>
                        <td> { <Form.Control type="checkbox" name="maincheckbox" id="maincheckbox" />}</td>
                     
                    <td>

                   
                         
                                {<Button  variant="secondary" >
                                         <Link to={"/edit/" + count.id}>  <img src={pencil} /> </Link>
                                       
                                    </Button>}
                                   
                                    {<Button variant="secondary"  onClick={()=>this.deleteAccounts(count.id)}>                
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
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        account: state.user.accounts
    }
}

const mapDispatchToProps = {
    deleteAccount, 
    getAllAccounts,
    logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
