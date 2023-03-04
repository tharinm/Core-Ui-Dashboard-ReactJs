import React from 'react'
import CoreUi from '../../Components/LeftMenu/CoreUi'
import DashboardTitle from '../../Components/LeftMenu/DashboardTitle'
import ComponentsList from './leftMenu/ComponentsList'
import ExtraList from './leftMenu/ExtraList'
import Themelist from './leftMenu/Themelist'

export default function LeftMenu() {
  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#3b4b64",
       cursor:"pointer"
      }}
    >
      <CoreUi img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBdnJ1uNnl5ohBr3QsxN3dYDZO_NtopCheA&usqp=CAU" />
      <DashboardTitle img="https://cdn1.iconfinder.com/data/icons/carbon-design-system-vol-5/32/meter--alt-256.png" />
      <Themelist />
      <ComponentsList />
      <ExtraList/>
    </div>
  );
}
