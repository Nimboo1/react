import { useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import CardContainer from '../../components/card-container/CardContainer';
import CardData from '../../types/CardData';

const URL = 'https://rickandmortyapi.com/api/character';

function Main() {
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [filteredCards, setFilteredCards] = useState<CardData[] | null>(null);

  const setCardsFromSearch = (text: string) => {
    if (!cards) return;
    if (!text) {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    }
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.results);
        setFilteredCards(data.results);
      });
  }, []);

  return (
    <div className="main">
      <SearchBar handler={setCardsFromSearch} />
      <CardContainer cards={filteredCards} />
    </div>
  );
}

export default Main;
