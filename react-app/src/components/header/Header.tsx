import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

class Header extends React.Component {
  private readonly linksTitles = ['Main', 'About us', 'Form'];

  private readonly linksAddress = ['/', '/about', '/form'];

  render() {
    const linksItems = new Array(this.linksTitles.length).fill(0).map((item, index) => (
      <NavLink
        to={this.linksAddress[index]}
        className={({ isActive }) =>
          isActive ? 'header__link header__link_active' : 'header__link'
        }
        key={this.linksAddress[index]}
      >
        {this.linksTitles[index]}
      </NavLink>
    ));

    return (
      <header className="header">
        <nav className="header__nav">{linksItems}</nav>
      </header>
    );
  }
}

export default Header;
