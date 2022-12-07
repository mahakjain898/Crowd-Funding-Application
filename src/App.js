import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/layout/Hero";
import Navbar3 from "./components/layout/Navbar3";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Portal from "./components/pages/Portal";
import Staff from "./components/pages/Staff";
// import Login from "./components/auth/Login";
import Map from "./components/pages/Map";
import Layout from "./components/layout/Layout";
import About from "./components/pages/About";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import Charity from "./components/pages/Charity";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import DonateForm from "./components/pages/DonateForm";
import Donate from "./components/pages/Donate";
import "./App.css";
import SearchNews from "./components/pages/News";

function onAuthRequired({ history }) {
  history.push("/login");
}
const user = localStorage.getItem("token");

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-240113.okta.com/oauth2/default"
          client_id="0oaad7oto4uSwXPVM4x6"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Hero />
            {user && <Navbar3 />}
            <Layout>
              <div>
                {/* <Route path="/" exact={true} component={Register} />
                <Route path="/login" exact={true} component={Login} /> */}
                <Route path="/" exact={true} component={Login} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/register" exact={true} component={Register} />
                <Route path="/home" exact={true} component={Home} />
                <Route path="/about" exact={true} component={About} />
                <Route path="/donateform" exact={true} component={DonateForm} />
                <Route path="/donate" exact={true} component={Donate} />
                <Route path="/News" exact={true} component={SearchNews} />
                <Route path="/Charity" exact={true} component={Charity} />
                <Route path="/Search" exact={true} component={Search} />
                <Route path="/Saved" exact={true} component={Saved} />
                <Route path="/contact" exact={true} component={Contact} />
                <Route path="/portal" exact={true} component={Portal} />
                <SecureRoute path="/staff" exact={true} component={Staff} />
                <Route path="/map" exact={true} component={Map} />
                {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
                {/* <Route
                  path="/login"
                  render={() => <Login baseUrl="https://dev-240113.okta.com" />}
                /> */}
                <Route path="/implicit/callback" component={ImplicitCallback} />
              </div>
            </Layout>
            <Footer />
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
