import { social } from './data'
import { nanoid } from 'nanoid'

export const Social = () => {
  return (
    <ul className="nav-social">
      {social.map((socialIcon) => {
        const { url, icon } = socialIcon
        return (
          <li key={nanoid()}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}
