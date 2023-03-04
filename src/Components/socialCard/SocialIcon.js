import React from "react";

export default function SocialIcon({ icon, bgColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "15px",
      }}
    >
      <img src={icon} style={{ width: "50px", backgroundColor: { bgColor } }} />
    </div>
  );
}
