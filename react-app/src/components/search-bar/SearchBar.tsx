import React, { useState, useEffect } from 'react';
import './search-bar.scss';

function SearchBar() {
  const searchValue = localStorage.getItem('search') ?? '';
  const [searchText, setSearchText] = useState(searchValue);
  const textRef = React.useRef(searchText);

  React.useEffect(() => {
    textRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', textRef.current);
    };
  }, []);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        className="search__input"
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <button type="button" className="search__button">
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
