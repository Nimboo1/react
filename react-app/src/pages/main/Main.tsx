import { useState } from 'react';
import SearchBar from '../../components/search-bar/SearchBar';
import CardContainer from '../../components/card-container/CardContainer';
import Card from '../../components/card/Card';
import Modal from '../../components/modal/Modal';
import Loading from '../../components/loading/Loading';
import CardData from '../../types/CardData';
import { useAppSelector } from '../../hooks/redux';

function Main() {
  const [card, setCard] = useState<CardData>({
    id: 1,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  });
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const { cards, isLoading } = useAppSelector((state) => state.cardReducer);

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
      <SearchBar />
      {isLoading && <Loading />}
      {cards && (
        <CardContainer>
          {cards.map((cardInfo) => (
            <Card cardInfo={cardInfo} key={cardInfo.id} clickHandler={setCardInfo} />
          ))}
        </CardContainer>
      )}
      {isModalShown && <Modal cardInfo={card} clickHandler={closeModal} />}
    </div>
  );
}

export default Main;
