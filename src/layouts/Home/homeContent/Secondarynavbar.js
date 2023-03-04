import React from "react";
import SecondarynavLeft from "./secondarynavBar/SecondarynavLeft";
import SecondaryNavRight from "./secondarynavBar/SecondaryNavRight";

export default function Secondarynavbar() {
  return (
    <div style={{display:'flex',justifyContent:"space-between",backgroundColor:'white',padding:'10px',border:'2px solid gray',alignItems:'center'}}>
      <SecondarynavLeft />
      <SecondaryNavRight />
    </div>
  );
}
