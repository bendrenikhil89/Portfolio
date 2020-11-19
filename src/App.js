import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <> 
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/portfolio" exact component={Projects}></Route>
          </Switch>
      </Router> 
    </>
  );
}

export default App;
