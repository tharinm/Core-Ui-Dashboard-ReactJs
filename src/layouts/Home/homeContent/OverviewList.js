import React from "react";
import OverviewCard from "./OverviewList/OverviewCard";

export default function OverviewList() {
  const overviewData = [
    {
      value: "9823",
      title: "Members Online",
      bgColor: "blue",
    },
    {
      value: "9823",
      title: "Members Online",
      bgColor: "skyblue",
    },
    {
      value: "9823",
      title: "Members Online",
      bgColor: "orange",
    },
    {
      value: "9823",
      title: "Members Online",
      bgColor: "red",
    },
  ];

  return (
    <div
      style={{ display: "flex", width: "100%", justifyContent: "space-around" }}
    >
      {overviewData.map((val, key) => {
        return (
          <div style={{ margin: "10px", width: "100%" }} key={key}>
            <OverviewCard data={val} />
          </div>
        );
      })}
    </div>
  );
}
