import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Features from '../Features/Features';
import Docs from '../Docs/Docs';


import './App.css';
import './utilities.css';

function App() {
  return (
    <Router>
      <Route
        exactpath="/docs"
        component={Docs}
      />
      <Route
        exactpath="/features"
        component={Features}
      />
      {/* <Route
        exactpath="/home"
        component={App}
      /> */}
      <body>
        {/* NavBar */}
        <div className="navbar">
          <div className="container flex">
            <h1 className="logo">Loruki.</h1>
            <nav>
              <ul>
                <li className="link-list">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="link" to="/features">Features</Link>
                </li>
                <li>
                  <Link className="link" to="/Docs">Docs</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Showcase */}
        <section className="showcase">
          <div className="container grid">
            <div className="showcase-text">
              <h1>Easier Deployment</h1>
              <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform. 
              </p>
              <Link className="link btn btn-outline" to="/features">Read More</Link>
            </div>

            <div className="showcase-form card">
              <h2>Request a Demo</h2>
              <form>

                <div className="form-control">
                  <input type="text" name="name" placeholder="Name" required/>
                </div>
                <div className="form-control">
                  <input type="text" name="company" placeholder="Company Name" required/>
                </div>
                <div className="form-control">
                  <input type="email" name="email" placeholder="Email" required/>
                </div>
                <input type="submit" value="Send" className="btn btn-primary"/>

              </form>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container">
            <h3 className="stats-heading text-center my-1">
              Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div className="grid grid-3 text-center my-4">
              <div>
                <i className="fas fa-server fa-3x"></i>
                <h3>10,349,405</h3>
                <p clasName="text-secondary">Deployments</p>
              </div>
              <div>
              <i className="fas fa-upload fa-3x"></i>
                <h3>987 TB</h3>
                <p clasName="text-secondary">Published</p>
              </div>
              <div>
              <i className="fas fa-project-diagram fa-3x"></i>
                <h3>2,405,943</h3>
                <p clasName="text-secondary">Projects</p>
              </div>

            </div>


          </div>
        </section>

      </body>
    </Router>
  );
}

export default App;
