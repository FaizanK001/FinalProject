
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home'
import Html from '../pages/Html';
import Css from '../pages/Css';
import SignUp from '../pages/SignUp';
import Javascript from '../pages/Javascript';
import Profile from '../pages/Profile';


function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/Html'  component={Html}/>
      <Route path='/Css' component={Css}/>
      <Route path='/sign-up'component={SignUp}/>
      <Route  path='/Javascript' component={Javascript}/>
      <Route  path='/profile' component={Profile}/>
    </Switch>

    </Router>

    </>
  );
}

export default App;
