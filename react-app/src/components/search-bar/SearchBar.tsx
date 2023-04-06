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
    return () => {
      localStorage.setItem('search', textRef.current);
    };
  }, []);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handler(searchText);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        placeholder="Search by Name..."
        className="search__input"
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
