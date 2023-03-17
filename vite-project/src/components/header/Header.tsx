import React, { ReactElement } from 'react';
import './header.scss';

type linkState = {
  links: number[];
};

type headerProps = {
  class: string;
};

class Header extends React.Component<headerProps, linkState> {
  private readonly linksTitles = ['Main', 'About us'];

  constructor(props: headerProps) {
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
      <div
        className={el === 1 ? 'header__link header__link_active' : 'header__link'}
        onClick={() => this.clickHandler(i)}
      >
        {this.linksTitles[i]}
      </div>
    ));

    return <header className={this.props.class}>{links}</header>;
  }
}

export default Header;
