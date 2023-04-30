import CardData from '../../types/CardData';
import './modal.scss';

type ModalProps = {
  cardInfo: CardData;
  clickHandler: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
};

function Modal({ cardInfo, clickHandler }: ModalProps) {
  return (
    <div className="dark-block" onClick={clickHandler}>
      <div className="modal">
        <button className="button" type="button" onClick={clickHandler}>
          X
        </button>
        <img src={cardInfo.image} alt="img" />
        <div className="modal__props">
          <p className="modal__title">{cardInfo.name}</p>
          <p className="modal__prop">Gender: {cardInfo.gender}</p>
          <p className="modal__prop">Species: {cardInfo.species}</p>
          <p className="modal__prop">Status: {cardInfo.status}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
