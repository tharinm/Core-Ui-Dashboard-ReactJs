import React from "react";

export default function ProNew({ img, color, name, status }) {
  return (
    <div
      style={{
        display: "flex",
        height: "10px",
        marginTop: "20px",
        gap: "15px",
        color: "white",
      }}
    >
      <img src={img} alt="" style={{ width: "20px", height: "20px" }} />
      <p>{name}</p>
      {/* <div style={{ height: "150px", width: "500" }}> */}
      <sup style={{ backgroundColor: color, fontSize: "12px",width:'40px',height:'20px' }}>{status}</sup>
      {/* </div> */}
    </div>
  );
}
