import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

type linkState = {
  links: number[];
};

class Header extends React.Component<{}, linkState> {
  private readonly linksTitles = ['Main', 'About us'];
  private readonly linksAddress = ['/', '/about'];

  constructor(props: {}) {
    super(props);
    this.state = {
      links: [1, 0],
    };
  }

  private clickHandler(index: number) {
    const linksState = new Array(this.state.links.length).fill(0);
    linksState[index] = 1;

    this.setState({
      links: linksState,
    });
  }

  render() {
    const links: ReactElement[] = this.state.links.map((el, i) => (
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
        <nav className="header__nav">{links}</nav>
      </header>
    );
  }
}

export default Header;
