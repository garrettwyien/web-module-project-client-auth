import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/login';
import Logout from './components/logout';
import FriendsList from './components/friendslist';
import PrivateRoute from './components/privateroute';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        Welcome!
        </header>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          {localStorage.getItem("token") && <div><Link to="/protected">Members</Link></div>}
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
          <PrivateRoute path="/logout" component={Logout}/>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>

    </Router>
    
  );
}

export default App;
