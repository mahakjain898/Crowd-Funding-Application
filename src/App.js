import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/layout/Hero";
import Navbar3 from "./components/layout/Navbar3";
import Register from "./components/pages/Register";
import Admin from "./components/pages/Admin";
import UserDetails from "./components/pages/UserDetails";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Portal from "./components/pages/Portal";
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

// function onAuthRequired({ history }) {
//   history.push("/login");
// }
const user = localStorage.getItem("token");
const admin = localStorage.getItem("isAdmin");
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Hero />
          {user && <Navbar3 />}
          <Layout>
            <div>
              <Route path="/" exact={true} component={Login} />
              <Route path="/login" exact={true} component={Login} />
              {admin === "true" && user && (
                <Route path="/admin" exact={true} component={Admin} />
              )}
              {admin === "true" && user && (
                <Route path="/admin/:id" component={UserDetails} />
              )}
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
              <Route path="/map" exact={true} component={Map} />
            </div>
          </Layout>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
{
  /* <Route path="/" element={<Navigate replace to="/login" />} /> */
}
