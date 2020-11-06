import './App.css';
import { Route,Switch } from 'react-router-dom'
import Login from './Components/Login'
import Home from "./Components/Home"
import Register from './Components/Register'
import PrivateRoute from "./Components/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/dashboard" render={(props) => <PrivateRoute {...props}  />} />
      </Switch>
    </div>
  );
}

export default App;
