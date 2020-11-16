import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/layouts/navbar/NavBar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
