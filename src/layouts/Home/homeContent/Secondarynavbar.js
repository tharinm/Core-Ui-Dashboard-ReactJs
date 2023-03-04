import React from "react";
import SecondarynavLeft from "./secondarynavBar/SecondarynavLeft";
import SecondaryNavRight from "./secondarynavBar/SecondaryNavRight";

export default function Secondarynavbar() {
  return (
    <div style={{display:'flex',justifyContent:"space-between",backgroundColor:'#565261',padding:'10px'}}>
      <SecondarynavLeft />
      <SecondaryNavRight />
    </div>
  );
}
