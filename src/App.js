import React from 'react';
import Home from './Components/Home';
import AddAccount from './Components/AddAccount';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import EditAccount from './Components/EditAccount';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
          <Switch>
                <Route exact path="/signup" component={Signup} />
                <ProtectedRoute exact path="/" component={Home} />
                <ProtectedRoute exact path="/add" component={AddAccount} />
                <ProtectedRoute exact path="/edit/:id" component={EditAccount} />
                <Route exact path="/login" component={Login} />
            
          </Switch>
        
      </BrowserRouter>
    );
  }
}
export default App;