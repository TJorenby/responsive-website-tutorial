import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Features from "../Features/Features";
import Docs from "../Docs/Docs";

import "./App.css";
import "./utilities.css";
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import Stats from "../Stats/Stats";
import Cli from "../Cli/Cli";
import Cloud from "../Cloud/Cloud";
import Languages from "../Languages/Languages";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

function App() {
  return (
    <Router>
      <div>
        {/* NavBar */}
        <div>
          <Header />
        </div>

        {/* Center Rendering */}
        <div>
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/" component={Home} />
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
