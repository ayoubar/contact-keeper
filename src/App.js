import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/layouts/navbar/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import AuthState from './context/auth/authState';


function App() {
  return (
    // Wrapper
    <AuthState>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
