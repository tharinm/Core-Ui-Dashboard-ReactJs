import React from 'react'
import ThemeCompo from '../../../../Components/LeftMenu/ThemeCompo'

export default function ExtraListLay() {
    return (
      <div style={{ marginTop: "25px", paddingLeft: "50px" }}>
        <p style={{ textAlign: "left", color: "white" }}>Extra List</p>
        <ThemeCompo
          img="https://cdn1.iconfinder.com/data/icons/material-core/21/star-outline-256.png"
          name="Page"
        />
        <ThemeCompo img="https://cdn4.iconfinder.com/data/icons/essential-3/32/329-Document_Report-256.png" name="Apps"/>
      </div>
    );
}
