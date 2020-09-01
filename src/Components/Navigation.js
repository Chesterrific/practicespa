import React, { useState } from 'react'

function Navigation() {

  const [showMenu, setShowMenu] = useState(false)

  let menu

  if(showMenu){
    menu = <div id="menu">
      the menu
    </div>
  }

  return (
    <nav onClick={() => setShowMenu(!showMenu)}>
      the nav
      {menu}
    </nav>
  )

}

export default Navigation