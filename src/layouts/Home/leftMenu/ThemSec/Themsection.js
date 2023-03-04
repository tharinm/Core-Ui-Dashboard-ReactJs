import React from 'react'
import ThemeCompo from '../../../../Components/LeftMenu/ThemeCompo'

export default function Themsection() {
  return (
    <div style={{marginTop:'20px',paddingLeft:'50px'}}>
      <p style={{textAlign:'left',color:'white'}}>Theme</p>
      <div style={{}}>
        <ThemeCompo
          img="https://cdn1.iconfinder.com/data/icons/ionicons-outline-vol-2/512/water-outline-512.png"
          name="Color"
        />
        <ThemeCompo
          img="https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/edit-change-pencil-256.png"
          name="Typography"
        />
      </div>
    </div>
  );
}
