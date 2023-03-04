import React from "react";
import Icons from "../../../../Components/SecondarynavbarRight/Icons";
import SecondaryNavR from "../../../../Components/SecondarynavbarRight/SecondaryNavR";

export default function SecondaryNavRight() {
  return (
    <div style={{ display: "flex", gap: "20px" ,cursor:'pointer'}}>
      <Icons img="https://cdn0.iconfinder.com/data/icons/typicons-2/24/message-256.png" />
      <SecondaryNavR
        name="Dashboard"
        img="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/576/arrow-trend-up-256.png"
      />
      <SecondaryNavR
        name="Setting"
        img="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Gear-Settings-Setting-Wheel--512.png"
      />
    </div>
  );
}
