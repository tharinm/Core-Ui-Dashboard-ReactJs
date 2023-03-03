import React from "react";
import OverviewList from "./homeContent/OverviewList";
import Primarynavbar from "./homeContent/Primarynavbar";
import Secondarynavbar from "./homeContent/Secondarynavbar";
import Socialcard from "./homeContent/Socialcard";
import Trafficgraph from "./homeContent/Trafficgraph";

export default function HomeContent() {
  return (
    <div>
      <Primarynavbar />
      <Secondarynavbar />
      <OverviewList />
      <Trafficgraph/>
      <Socialcard/>
    </div>
  );
}
