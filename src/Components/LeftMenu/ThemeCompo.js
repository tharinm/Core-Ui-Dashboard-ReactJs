import React from 'react'

export default function ThemeCompo({name,img}) {
  return (
    <div
      style={{
        display: "flex",
        height: "10px",
        marginTop: "20px",
        gap: "15px",
        color: "white",
        alignItems:'center'
      }}
    >
      

      <img src={img} alt="" style={{ width: "20px", height: "20px" }} />
      <p>{name}</p>
      <img src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Chevron_Left-256.png" style={{width:'15px',position:'absolute',left:'200px'}} />
    </div>
  );
}
