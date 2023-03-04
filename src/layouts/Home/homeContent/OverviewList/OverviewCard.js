import React from 'react'
import OverviewButton from '../../../../Components/Overviewcard/OverviewButton'
import OverviewGraph from '../../../../Components/Overviewcard/OverviewGraph'
import OverviewValues from '../../../../Components/Overviewcard/OverviewValues'

export default function OverviewCard({data}) {
  return (
    <div style={{ backgroundColor: data.bgColor, padding: "10px" }}>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <OverviewValues />
        <OverviewButton />
      </div>
      <OverviewGraph />
    </div>
  );
}
