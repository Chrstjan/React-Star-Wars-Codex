import { NavLink } from "react-router-dom"
import { navLinks } from "../../routes"

export const Navbar = () => {
  return (
    <nav>
        <ul>
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