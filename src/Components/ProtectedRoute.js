import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class ProtectedRoute extends Component {
    render() {
        console.log(this.props.auth)
        if(!this.props.auth.isLoaded) return null
        let {component:Component, ...rest} = this.props
        return (
            <Route {...rest} render={(props)=>{
                if(this.props.auth.uid){
                    return <Component {...props}/>
                }else{
                    return <Redirect to="/login" />
                }
                
            }}/>
        )
    }
}

let mapStateToProps = (state)=>{
    return {auth:state.firebase.auth}
}
export default connect(mapStateToProps) (ProtectedRoute)
