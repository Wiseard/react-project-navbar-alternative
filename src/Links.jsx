import { links } from './data'
import { nanoid } from 'nanoid'
import { useRef } from 'react'

export const Links = ({ showLinks }) => {
  const containerLinksRef = useRef(null)
  const linksRef = useRef(null)

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <div style={linksStyle} ref={containerLinksRef} className="links-container">
      <ul ref={linksRef} className="nav-links">
        {links.map((link) => {
          const { url, text } = link
          return (
            <li key={nanoid()}>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
