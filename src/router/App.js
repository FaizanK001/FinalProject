
import Navbar from '../components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home'
import Services from '../pages/Services';
import About from '../pages/About';
import SignUp from '../pages/SignUp';



function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Switch> 
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services}/>
      <Route path='/about' component={About}/>
      <Route path='/sign-up' component={SignUp}/>
    </Switch>

    </Router>

    </>
  );
}

export default App;
