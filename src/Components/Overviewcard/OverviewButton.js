import React from 'react'

export default function OverviewButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "20px",
      }}
    >
      <img
        alt="setting icon"
        src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-75-512.png"
        width={"10px"}
        height="10px"
      />
      <img
        alt="drop down icon"
        src="https://iconvulture.com/wp-content/uploads/2017/12/caret-down.png"
        width={"7px"}
        height="7px"
      />
    </div>
  );
}
