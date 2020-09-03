import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {

  const [showMenu, setShowMenu] = useState(false)

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: 'translate(-100%)' },
    enter: { opacity: 1, transform: 'translate(0%)' },
    leave: { opacity: 0, transform: 'translate(-100%)' }
  })

  return (
    <nav>
      <span
        className="font-xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      >
        X
      </span>

      {
        maskTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-2"
            onClick={() => setShowMenu(false)}
          >
          </animated.div>
        )
      }
      {
        menuTransitions.map(({ item, key, props }) =>
          item &&
          <animated.div
            key={key}
            style={props}
            className="fixed bg-white top-0 left-0 w-4/5 h-full z-2 p-3"
          >
            <NavigationMenu 
              closeMenu={() => setShowMenu(false)}
            />
          </animated.div>
        )
      }
    </nav>
  )
}

export default Navigation