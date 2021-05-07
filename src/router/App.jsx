
import React from 'react'
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home'
import Html from '../pages/Html';
import Css from '../pages/Css';
import SignIn from '../pages/SignIn';
import Javascript from '../pages/Javascript';
import Profile from '../pages/Profile';
import HowitWorks from '../pages/HowitWorks'


function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/Html'  component={Html}/>
      <Route path='/Css' component={Css}/>
      <Route path='/SignIn'component={SignIn}/>
      <Route  path='/Javascript' component={Javascript}/>
      <Route  path='/profile' component={Profile}/>
      <Route  path='/HowitWorks' component={HowitWorks}/>
    </Switch>

    </Router>

    </>
  );
}

export default App;
