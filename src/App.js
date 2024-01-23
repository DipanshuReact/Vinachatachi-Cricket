import './App.css';
 import About from './components/About';
import ContactUs from './components/ContactUs';
import Cric from './components/Cric';
 import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Cricai from './components/Cricai';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';

function App() {
  return (
    <>
    {/* <Router>
    <Navbar>
    </Navbar>
    
    <Switch>
      <Route exact path="/About">
       <About></About>
      </Route>
      <Route exact path="/ContactUs">
       <ContactUs></ContactUs>
      </Route>
      <Route exact path="/Gallery">
      <Gallery></Gallery>
      </Route>
      <Route exact path="/">
      <Home></Home>
      </Route>
    </Switch>
    </Router> */}
    <Cricai></Cricai>
    
    </>
  );
}

export default App;
