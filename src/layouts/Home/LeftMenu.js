import React from 'react'
import CoreUi from '../../Components/LeftMenu/CoreUi'
import DashboardTitle from '../../Components/LeftMenu/DashboardTitle'
import ComponentsList from './leftMenu/ComponentsList'
import ExtraList from './leftMenu/ExtraList'
import Themelist from './leftMenu/Themelist'

export default function LeftMenu() {
  return (
    <div>
      <CoreUi />
      <DashboardTitle />
      <Themelist />
      <ComponentsList />
      <ExtraList/>
    </div>
  )
}
