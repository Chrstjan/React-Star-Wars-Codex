import { NavLink } from "react-router-dom"
import { navLinks } from "../../routes"
import ns from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav>
        <ul className={ns.Nav}>
            {navLinks.map((link) => {
                return (
                    <li key={link.title}>
                        <NavLink to={link.link}>{link.title}</NavLink>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}