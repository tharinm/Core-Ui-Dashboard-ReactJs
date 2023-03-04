import React from "react";
import ProNew from "../../../../Components/LeftMenu/ProNew";
import ThemeCompo from "../../../../Components/LeftMenu/ThemeCompo";

export default function Components() {
  return (
    <div style={{ marginTop: "25px", paddingLeft: "50px" }}>
      <p style={{ textAlign: "left",color:"white" }}>Components</p>
      <div style={{}}>
        <ThemeCompo
          img="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-3/32/data--base-256.png"
          name="Base"
        />
        <ThemeCompo
          img="https://cdn2.iconfinder.com/data/icons/css-vol-2/24/play-button-o-512.png"
          name="Button"
        />
        <ThemeCompo
          img="https://cdn3.iconfinder.com/data/icons/feather-5/24/pie-chart-256.png"
          name="Chart"
        />
        <ThemeCompo
          img="https://cdn0.iconfinder.com/data/icons/zondicons/20/edit-cut-256.png"
          name="Editors"
        />
        <ThemeCompo
          img=" https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-4/32/forum-512.png"
          name="Forums"
        />
        <ProNew
          img="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_map_48px-256.png"
          name="GoogleMap"
          color="#e6525c"
          status="Pro"
        />
        <ThemeCompo
          img="https://cdn3.iconfinder.com/data/icons/feather-5/24/star-512.png"
          name="Icons"
        />
        <ThemeCompo
          img="https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_1_essential-app-ui-bell-notification-256.png"
          name="Notifictions"
        />
        <ThemeCompo
          img="https://cdn4.iconfinder.com/data/icons/user-interface-583/32/Interface_Elements_interface_ui_plug_in_plugin-256.png"
          name="Plugin"
        />
        <ThemeCompo
          img="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-7/32/table--built-512.png"
          name="Tables"
        />
        <ProNew
          img="https://cdn0.iconfinder.com/data/icons/pinpoint-interface/48/widgets-512.png"
          name="Widgets"
          color="#2A5B90"
          status="New"
        />
      </div>
    </div>
  );
}
