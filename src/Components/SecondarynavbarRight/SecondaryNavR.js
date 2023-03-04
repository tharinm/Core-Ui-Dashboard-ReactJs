import React from 'react'
import Icons from './Icons'

export default function SecondaryNavR({name,img}) {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
          <img src={img} style={{ width: '40px' }} />
          <p>{ name}</p>
    </div>
  );
}
