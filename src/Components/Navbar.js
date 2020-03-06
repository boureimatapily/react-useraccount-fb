import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="NavContent">

       
        <Container>
            <Row>
                <Col>
                <Button variant="primary"><Link to="/">Home</Link></Button>
                <Button variant="primary"><Link to="/">Log in</Link></Button>
                <Button variant="primary"><Link to="/">Sign Up</Link></Button>

                </Col>
            </Row>
        </Container>
        </div>
      </div>
    )
  }
}

export default Navbar
