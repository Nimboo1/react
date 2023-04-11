import { useEffect, useState } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import CardContainer from '../../components/card-container/CardContainer';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/loading/Loading';
import CardData from '../../types/CardData';

const url = new URL('https://rickandmortyapi.com/api/character');

function Main() {
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [card, setCard] = useState<CardData>({
    id: 1,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  useEffect(() => {
    fetch(url.href)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.results);
      });
  }, []);

  const setCardsFromSearch = (text: string) => {
    setCards(null);
    const urlWithParams = new URL(url.href);
    if (text) {
      urlWithParams.searchParams.set('name', text);
    }
    fetch(urlWithParams.href)
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setCards(data.results);
      })
      .catch(() => {
        setCards([]);
      });
  };

  const setCardInfo = (info: CardData) => {
    setCard(info);
    setIsModalShown(true);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalShown(false);
    }
  };

  return (
    <div className="main">
      <SearchBar handler={setCardsFromSearch} />
      {cards ? (
        <CardContainer>
          {cards.map((cardInfo) => (
            <Card cardInfo={cardInfo} key={cardInfo.id} clickHandler={setCardInfo} />
          ))}
        </CardContainer>
      ) : (
        <Loading />
      )}
      {isModalShown && <Modal cardInfo={card} clickHandler={closeModal} />}
    </div>
  );
}

export default Main;
