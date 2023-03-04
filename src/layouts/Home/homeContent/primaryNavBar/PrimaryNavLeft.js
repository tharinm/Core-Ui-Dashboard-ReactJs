import React from "react";
import PrimarynavLeft from "../../../../Components/PrimaryNavleft/PrimarynavLeft";

export default function PrimaryNavLeft() {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <PrimarynavLeft
        name={
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREeBLdm0zcDusLuzfkVRh766txgP3zRrmQg&usqp=CAU"
            alt=""
            height={"15px"}
          />
        }
        link=""
      />
      <PrimarynavLeft name="Dashboard" link="" />
      {/* name is the prop */}
      <PrimarynavLeft name="User" link="" />
      <PrimarynavLeft name="Setting" link="" />
    </div>
  );
}
