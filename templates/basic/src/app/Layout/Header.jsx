/**
 * app/Layout/Header.js
 */
import { NavLink } from 'solid-app-router';

const Header = () => (
  <header className="header">
    <NavLink href="/">My Site</NavLink>
    <div className="header__nav">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </div>
  </header>
);

export default Header;
