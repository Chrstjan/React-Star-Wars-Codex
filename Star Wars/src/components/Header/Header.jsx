import { Navbar } from '../Navbar/Navbar';
import hs from './Header.module.scss';

export const Header = () => {
  return (
    <header className={hs.Header}>
      <h1>The Space Wars Codex</h1>
      <Navbar />
    </header>
  )
}