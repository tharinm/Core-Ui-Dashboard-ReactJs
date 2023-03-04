import React from 'react'
import PrimaryNavLeft from './primaryNavBar/PrimaryNavLeft'
import PrimaryNavRight from './primaryNavBar/PrimaryNavRight'

export default function Primarynavbar() {
  return (
    <div style={{display:'flex',padding:'15px',backgroundColor:'#17273',justifyContent:'space-between',alignItems:'center'}}>
      <PrimaryNavLeft />
      <PrimaryNavRight/>
    </div>
  )
}
