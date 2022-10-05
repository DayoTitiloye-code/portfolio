import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder'

function Navbar() {
  const [toggled, setToggled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setToggled(false)
  }, [location])

  return (
    <div className="navbar" id={toggled ? 'open' : 'closed'}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setToggled((prev) => !prev)
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar
