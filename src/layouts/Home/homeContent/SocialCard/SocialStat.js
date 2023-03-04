import React from "react";
import SocialIcon from "../../../../Components/socialCard/SocialIcon";
import StatCard from "../../../../Components/socialCard/StatCard";

export default function SocialStat({ data }) {
  const { icon, bgColor, left, right, title } = data;

  return (
    <div
      style={{
        backgroundColor: "white",
        birder: "5px solid grey",
        borderRadius: "5px",
      }}
    >
      <SocialIcon icon={icon} bgColor={bgColor} title={title} />
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <StatCard value={left.value} title={left.title} />
        <div style={{ height: "50px", display: "flex", alignItems: "center" }}>
          <div style={{ borderLeft: "1px solid grey", height: "30px" }}></div>
        </div>
        <StatCard value={right.value} title={right.title} />
      </div>
    </div>
  );
}
