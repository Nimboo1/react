import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

type LinkState = {
  links: number[];
};

class Header extends React.Component<Record<string, never>, LinkState> {
  private readonly linksTitles = ['Main', 'About us'];

  private readonly linksAddress = ['/', '/about'];

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      links: [1, 0],
    };
  }

  private clickHandler(index: number) {
    const { links } = this.state;
    const linksState = new Array(links.length).fill(0);
    linksState[index] = 1;

    this.setState({
      links: linksState,
    });
  }

  render() {
    const { links } = this.state;
    const linksItems: ReactElement[] = links.map((el, i) => (
      <Link
        to={this.linksAddress[i]}
        className={el === 1 ? 'header__link header__link_active' : 'header__link'}
        onClick={() => this.clickHandler(i)}
        key={this.linksAddress[i]}
      >
        {this.linksTitles[i]}
      </Link>
    ));

    return (
      <header className="header">
        <nav className="header__nav">{linksItems}</nav>
      </header>
    );
  }
}

export default Header;
