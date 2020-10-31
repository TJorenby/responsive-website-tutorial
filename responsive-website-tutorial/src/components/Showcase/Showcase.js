import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>Easier Deployment</h1>
            <p>
              Deploy web apps of all kinds, from large scale enterprise APIs to
              static websites for individuals. Fill out the form to try a demo
              of our platform.
            </p>
            <Link className="link btn btn-outline" to="/features">
              Read More
            </Link>
          </div>

          <div className="showcase-form card">
            <h2>Request a Demo</h2>
            <form>
              <div className="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
