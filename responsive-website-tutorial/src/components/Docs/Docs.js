import React from "react";
import "./Docs.css";

function Docs() {
  return (
    <>
      <section className="docs-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 class="xl">Docs</h1>
            <p class="lead">Learn how to work with the Loruki platform</p>
          </div>
          <img src="./images/docs.png" alt="" />
        </div>
      </section>
      {/* Docs Main */}
      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2">Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a className="text-primary" href="#">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#">About Loruki</a>
                </li>
                <li>
                  <a href="#">Installation</a>
                </li>
              </ul>
            </nav>

            <h3 className="my-2">Deployment </h3>
            <nav>
              <ul>
                <li>
                  <a href="#">Setting up a container</a>
                </li>
                <li>
                  <a href="#">Using the CLI</a>
                </li>
                <li>
                  <a href="#">Managing resources</a>
                </li>
                <li>
                  <a href="#">Upgrade & downgrade</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card">
            <h2>Introduction</h2>
            <p>
              Check out the feature of Loruki that separate us from the
              competition. Check out the feature of Loruki that separate us from
              the competition. Check out the feature of Loruki that separate us
              from the competition. Check out the feature of Loruki that
              separate us from the competition
            </p>

            <div className="alert alert-success">
              <i className="fas fa-info"></i>Check out the feature of Loruki
              that separate us from the competition
            </div>

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Check out the feature of Loruki that separate us from the
              competition. Check out the feature of Loruki that separate us from
              the competition.
            </p>
            <a href="#" className="btn btn-primary">
              Install CLI
            </a>

            <h3>Requirements</h3>
            <ul>
              <li> Windows 10, Mac OSX, Linux</li>
              <li> Windows 10, Mac OSX, Linux</li>
            </ul>

            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre>
              <code>$ brew install loruki-cli</code>
            </pre>

            <p>NPM</p>
            <pre>
              <code>$ npm install loruki-cli</code>
            </pre>

            <p>Yarn</p>
            <pre>
              <code>$ yarn install loruki-cli</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}

export default Docs;
