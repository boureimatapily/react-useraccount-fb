import React, { Component } from 'react'
import pencil from './icons/icons/pencil.svg'
import trash from './icons/icons/trash.svg'
import { Form, Col, Row, Container, Button, Table } from 'react-bootstrap'
import AccountFrom from './AccountForm'

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AccountName: '',
            AccountNumber: '',
            BankName: '',
            BankBranch: '',
            id:'',
            accountData: [ ]
        }
        this.handleChange = this.handleChange.bind(this)

    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
    };

    addAccount = () => {
        const {AccountName,AccountNumber,BankName,BankBranch,id} = this.state;
        const laststate = this.state.accountData;
        this.setState({
            accountData: [...laststate,{
                AccountName,
                AccountNumber,
                BankName,
                BankBranch,
                id: laststate.length + 1
            }]
        })
        this.setState({
            AccountName: '',
            AccountNumber: '',
            BankName: '',
            BankBranch: '',
        })

    };

    editAccount = (itemd) => {
        this.setState( state => {
              const accountData = state.accountData.map( (item) => {
              if ( item.id === itemd){
                    return { id:itemd, AccountName: "Edited--MyKaneshieAccount", AccountNumber: "123548", BankName: "Ecobank", BankBranch: "Kaneshie" }
                                        }
                else {
                    return item;
                            } 
                                 });
            return { accountData};
                                
                                    }) 
        
                                }

    deleteAccount = (itemid) => {    
                this.setState( state =>{
                    const accountData = state.accountData.filter((item) =>item.id !== itemid);
                    return { accountData};
                 } );
    };
    refresh = () => {
        const {accountData} = this.state.accountData
        this.setState({
          accountData
        })
      
       

    };

        
    render() {
        const  {AccountName, AccountNumber, BankBranch, BankName, 
            refresh, deleteAccount, updateAccount, addAccount, handleChange
                    } = this.state ;
        var tableData = 
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Account Name</th>
                        <th>Account Number</th>
                        <th>Bank Name</th>
                        <th>Bank Branch</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.accountData.map((list, index) => (
                            <tr key={list.id}>
                                <td>{list.AccountName}</td>
                                <td>{list.AccountNumber}</td>
                                <td>{list.BankName}</td>
                                <td>{list.BankBranch}</td>
                                <td>{list.id}</td>
                               

                                <td>{
                                    <Button  variant="secondary" onClick={() => this.editAccount(list.id)} >
                                        <img src={pencil} />
                                    </Button>}

                                    {<Button variant="secondary" onClick={() => this.deleteAccount(list.id)}>
                                    <img src={trash}  />
                                    
                                    </Button>
                                    }
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </Table>
        
        return (
            <div>       
                <Container>
                   <AccountFrom   
                   addAccount={this.addAccount}
                   updateAccount={this.updateAccount}
                   refresh={this.refresh}
                   handleChange={this.handleChange}
                   deleteAccount={deleteAccount}
                   {...this.state}
                   />
                    <Row>
                        <Col lg={{offset: 2 }} >
                            {tableData}

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default MainContent;