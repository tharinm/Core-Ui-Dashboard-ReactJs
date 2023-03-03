import React from "react";
import HomeContent from "./Home/HomeContent";
import LeftMenu from "./Home/LeftMenu";

export default function Home() {
  return (
    <div style={{display:'flex'}}>
      <LeftMenu />
      <HomeContent />
    </div>
  );
}
