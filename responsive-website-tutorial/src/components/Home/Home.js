import React from "react";

import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import Stats from "../Stats/Stats";
import Cli from "../Cli/Cli";
import Cloud from "../Cloud/Cloud";
import Languages from "../Languages/Languages";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      {/* Showcase */}
      <Showcase />
      {/* Stats */}
      <Stats />

      {/* Cli */}
      <Cli />
      {/* Cloud */}
      <Cloud />

      {/* Languages */}
      <Languages />
    </>
  );
}

export default Home;
