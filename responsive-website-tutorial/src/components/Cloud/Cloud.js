import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Cloud() {
  return (
    <>
      <section className="cloud bg-primary my-2 py-2">
        <div className="container grid">
          <div className="text-center">
            <h2 className="lg">Extreme Cloud Hosting</h2>
            <p className="lead my-1">
              Cloud hosting like you've never seen. Fast, efficient and scalable
            </p>
            <Link className="link btn btn-dark" to="/features">
              Read More
            </Link>
          </div>
          <img src="./images/cloud.png" alt="" />
        </div>
      </section>
    </>
  );
}

export default Cloud;
