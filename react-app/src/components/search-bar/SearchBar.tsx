import React, { useState, useEffect } from 'react';
import './search-bar.scss';

type SearchProp = {
  handler: (text: string) => void;
};

function SearchBar({ handler }: SearchProp) {
  const searchValue = localStorage.getItem('search') ?? '';
  const [searchText, setSearchText] = useState(searchValue);
  const textRef = React.useRef(searchText);

  React.useEffect(() => {
    textRef.current = searchText;
  }, [searchText]);

  useEffect(() => {
    return localStorage.setItem('search', textRef.current);
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handler(searchText);
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handler(searchText);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        placeholder="Search by Name..."
        className="search__input"
        onKeyDown={(e) => {
          keyDownHandler(e);
        }}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
      <button type="button" className="search__button" onClick={clickHandler}>
        SEARCH
      </button>
    </div>
  );
}

export default SearchBar;
