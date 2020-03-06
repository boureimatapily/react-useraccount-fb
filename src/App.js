import React from 'react';
import Home from './Components/Home';
import AddAccount from './Components/AddAccount';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import EditAccount from './Components/EditAccount';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
    
    
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddAccount} />
        <Route exact path="/edit/:id" component={EditAccount} />
     
      </BrowserRouter>
    );
  }
}
export default App;