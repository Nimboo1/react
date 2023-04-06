import './card-container.scss';

type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
};

function CardContainer({ children }: ContainerProps) {
  return <div className="card-container">{children}</div>;
}

export default CardContainer;
