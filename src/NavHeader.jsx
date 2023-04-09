import { FaBars } from 'react-icons/fa'
import logo from './logo.svg'

export const NavHeader = ({ displayLinks }) => {
  return (
    <div className="nav-header">
      <img className="logo" src={logo} alt="logo" />
      <button onClick={displayLinks} className="btn-menu" type="button">
        <FaBars className="icon-menu" />
      </button>
    </div>
  )
}
