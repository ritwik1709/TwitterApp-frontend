import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({active,Icon,text}) => {

  return (
    <div className={`sidebarOption ${active ? 'sidebarOption_active' : ''}`}>
      {Icon && <Icon />}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption