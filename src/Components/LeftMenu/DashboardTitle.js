import React from 'react'

export default function DashboardTitle({img}) {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'30px',backgroundColor:'#45536d',color:'white',cursor:'pointer'}}>
      <img src={img} style={{width:'50px'}} /> <p>Dashboard</p>
    </div>
  );
}
