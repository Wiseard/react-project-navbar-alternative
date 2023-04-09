import { useState } from 'react'
import { Social } from './Social'
import { Links } from './Links'
import { NavHeader } from './NavHeader'

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const displayLinks = () => setShowLinks(!showLinks)
  return (
    <div className="nav-center">
      <NavHeader displayLinks={displayLinks} />
      <Links showLinks={showLinks} />
      <Social />
    </div>
  )
}
