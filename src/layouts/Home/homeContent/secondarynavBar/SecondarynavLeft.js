import React from 'react'
import SecondaryNavL from '../../../../Components/SecondarynavLeft/SecondaryNavL'

export default function SecondarynavLeft() {
  return (
    <div style={{display:'flex',gap:'10px',marginLeft:'10px'}}>
      <SecondaryNavL name="Home/" />
      <SecondaryNavL name="Admin/" />
      <SecondaryNavL name="Dashboard" />
    </div>
  );
}
