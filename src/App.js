import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home.jsx";
import Temples from "../src/components/pages/temples.jsx";
import Pujari from "../src/components/pages/pujari.jsx";
import ContactUS from "./components/pages/contactUs";
import About from "../src/components/pages/about.jsx";
import SignUpPujari from './components/forms/signupPujari';
import SignUpTemple from './components/forms/signupTemple';
import SignUpVisitor from "./components/forms/signupVisitor.jsx";
import Login from './components/forms/loginform';
import Navbarmenu from "./components/menu/navbarMenu.js";
import "./App.css";


function App() {
  return (
    <div>
      <Router basename="/">
        {/* Adding menu component */ }
        <Navbarmenu />
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/temples" component={Temples} />
          <Route path="/pujari" component={Pujari} />
          <Route path="/contactus" component={ContactUS} />
          <Route path="/about" component={About} />
          <Route path="/signuppujari" component={SignUpPujari} />
          <Route path="/signuptemple" component={SignUpTemple} />
          <Route path="/signupvisitor" component={SignUpVisitor} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
);
}

export default App;
