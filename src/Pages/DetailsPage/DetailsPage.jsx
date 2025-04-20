import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DetailsPage.css';

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p className="loading">Cargando...</p>;

  return (
    <div className="container">
      
      <div className="main-image">
        <img src={character.image} alt={character.name} className="character-img" />
      </div>

      <div className="info">
        <h1 className="character-name">{character.name}</h1>
        <p><strong>Raza:</strong> {character.race}</p>
        <p><strong>Genero:</strong> {character.gender}</p>
        <p><strong>Ki:</strong> {character.ki}</p>
        <p><strong>Ki Maximo:</strong> {character.maxKi}</p>
        <p><strong>Afiliacion:</strong> {character.affiliation}</p>
        <p className="description"><strong>Descripcion:</strong> {character.description}</p>

        {character.originPlanet && (
          <div className="origin-section">
            <h2 className="origin-title">Planeta de origen: {character.originPlanet.name}</h2>
            <img
              src={character.originPlanet.image}
              alt={character.originPlanet.name}
              className="origin-img"
            />
            <p className="origin-desc">{character.originPlanet.description}</p>
          </div>
        )}

        {character.transformations?.length > 0 && (
          <div className="transformations">
            <h2 className="transform-title">Transformaciones</h2>
            <div className="transform-list">
              {character.transformations.map(t => (
                <div key={t.id} className="transform-card">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="transform-img"
                  />
                  <p className="transform-name">{t.name}</p>
                  <p>Ki: {t.ki}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
