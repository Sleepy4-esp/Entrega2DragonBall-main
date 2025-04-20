import './CardCharacter.css';

const CardCharacter = ({ items }) => {
  return (
    <div className="card-character">
      <div className="image-container">
        <img src={items.image} alt={items.name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-name">{items.name}</h3>
        <p className="card-text">
        <strong>Race:</strong> <span className="highlight">{items.race}</span>
        </p>
      </div>
    </div>
  );
};

export default CardCharacter;
