import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchTextSlice } from '../../store/reducers/SearchTextSlice';
import { useLazyFetchCardsQuery } from '../../services/cardService';
import { cardsSlice } from '../../store/reducers/CardSlice';
import './search-bar.scss';

function SearchBar() {
  const { searchText } = useAppSelector((state) => state.searchTextReducer);
  const { setSearchText } = searchTextSlice.actions;
  const { setCards, setIsLoading } = cardsSlice.actions;
  const dispatch = useAppDispatch();
  const [trigger, { data: cardData, isError }] = useLazyFetchCardsQuery();

  useEffect(() => {
    dispatch(setIsLoading(true));
    trigger(searchText);
  }, []);

  useEffect(() => {
    if (cardData) {
      dispatch(setCards(cardData.results));
      dispatch(setIsLoading(false));
    }
  }, [cardData]);

  useEffect(() => {
    if (isError) {
      dispatch(setCards([]));
      dispatch(setIsLoading(false));
    }
  }, [isError]);

  const setCardsFromSearch = () => {
    dispatch(setIsLoading(true));
    trigger(searchText);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCardsFromSearch();
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCardsFromSearch();
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
