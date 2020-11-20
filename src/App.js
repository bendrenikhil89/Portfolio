import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <> 
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/portfolio" exact component={Projects}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/contact" exact component={Contact}></Route>
          </Switch>
      </Router> 
    </>
  );
}

export default App;
