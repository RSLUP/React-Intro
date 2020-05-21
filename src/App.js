import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Form from './components/Home/Form/Form'
import List from './components/Home/List/List'
import Message from './Message';
import axios from 'axios';


const App = () => {

  const [name, setName] = useState('');

  return (
    <Router>
      <Route exact={true} path="/" render={props => <Login {...props} setName={setName} />} />
      <Route path="/home" render={(props) => <Home {...props} name={name} />} />
      <Route path="/list" component={List} />
    </Router>
  );
}

export default App;
