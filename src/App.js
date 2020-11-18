import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <> 
      <Router>
        <Route>
          <Navbar />
        </Route>
      </Router> 
    </>
  );
}

export default App;
