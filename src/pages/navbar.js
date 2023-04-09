import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <>
    <header>
      <div className="nav-bar">
        <a to="#" className="logo">PSY</a> 
      
        <div className="navigation">
          <div className="nav-items">
          <Link href="" legacyBehavior><a>Home</a></Link>
          <Link href="" legacyBehavior><a>About</a></Link>
          <Link href="" legacyBehavior><a>Skills</a></Link>
          <Link href="" legacyBehavior><a>Contact</a></Link>
          </div>
        </div>
      </div>
    </header>


   


 

    </>
  )
}

export default navbar

