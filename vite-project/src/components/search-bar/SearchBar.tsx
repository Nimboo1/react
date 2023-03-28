import React from 'react';
import './search-bar.scss';

type SearchStateType = {
  searchText: string;
};

class SearchBar extends React.Component<Record<string, never>, SearchStateType> {
  constructor(props: Record<string, never>) {
    super(props);
    const search = localStorage.getItem('search');
    if (search) {
      this.state = { searchText: search };
    } else {
      this.state = { searchText: '' };
    }
  }

  componentDidMount() {
    const search = localStorage.getItem('search');
    if (search) {
      this.setState({
        searchText: search,
      });
    }
  }

  componentWillUnmount() {
    const { searchText } = this.state;
    localStorage.setItem('search', searchText);
  }

  private changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchText: e.target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          value={searchText}
          className="search__input"
          onChange={(e) => {
            this.changeHandler(e);
          }}
        />
        <button type="button" className="search__button">
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
