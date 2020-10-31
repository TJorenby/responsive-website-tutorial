import React from "react";

function Languages() {
  return (
    <>
      <section className="languages">
        <h2 className="md text-center my-2">Supported Languages</h2>
        <div className="container flex">
          <div className="card">
            <h4>Node.js</h4>
            <img src="./images/logos/node.png" alt="" />
          </div>
          <div className="card">
            <h4>C#</h4>
            <img src="./images/logos/csharp.png" alt="" />
          </div>
          <div className="card">
            <h4>Ruby</h4>
            <img src="./images/logos/ruby.png" alt="" />
          </div>
          <div className="card">
            <h4>PHP</h4>
            <img src="./images/logos/php.png" alt="" />
          </div>
          <div className="card">
            <h4>Scala</h4>
            <img src="./images/logos/scala.png" alt="" />
          </div>
          <div className="card">
            <h4>Clojure</h4>
            <img src="./images/logos/clojure.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Languages;
