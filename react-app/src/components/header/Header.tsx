import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  const linksTitles = ['Main', 'About us', 'Form'];
  const linksAddress = ['/', '/about', '/form'];

  return (
    <header className="header">
      <nav className="header__nav">
        {linksTitles.map((item, index) => (
          <NavLink
            to={linksAddress[index]}
            className={({ isActive }) =>
              isActive ? 'header__link header__link_active' : 'header__link'
            }
            key={linksAddress[index]}
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
