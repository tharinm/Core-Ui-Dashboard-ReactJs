import React from "react";
import PrimarynavRight from "../../../../Components/PrimarynavRight/PrimarynavRight";

export default function PrimaryNavRight() {
  return (
    <div style={{ display: "flex", gap: "19px" }}>
      <PrimarynavRight img="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-moon-512.png" />
      <PrimarynavRight img="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/bell-dot-notification-notify-ring-256.png" />
      <PrimarynavRight img="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/message-256.png" />
      <PrimarynavRight img="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-256.png" />
      <PrimarynavRight img="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/app-tile-block-menu-setting-256.png"/>
    </div>
  );
}
