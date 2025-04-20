import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p style={{ color: 'white' }}>Cargando...</p>;

  return (
    <div style={{ display: 'flex', padding: '2rem', color: '#fff', background: '#111', gap: '2rem', flexWrap: 'wrap' }}>
      
      <div style={{ flex: '1 1 300px' }}>
        <img src={character.image} alt={character.name} style={{ width: '100%', maxWidth: '400px', borderRadius: '1rem' }} />
      </div>

     
      <div style={{ flex: '2 1 500px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#ffca28' }}>{character.name}</h1>
        <p style={{ fontSize: '1.2rem' }}><strong>Raza:</strong> {character.race}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>Genero:</strong> {character.gender}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>Ki:</strong> {character.ki}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>Ki Maximo:</strong> {character.maxKi}</p>
        <p style={{ fontSize: '1.2rem' }}><strong>Afiliacion:</strong> {character.affiliation}</p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}><strong>Descripcion:</strong> {character.description}</p>

       
        {character.originPlanet && (
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#00bcd4' }}>Planeta de origen: {character.originPlanet.name}</h2>
            <img
              src={character.originPlanet.image}
              alt={character.originPlanet.name}
              style={{ width: '100%', maxWidth: '500px', borderRadius: '1rem', marginTop: '1rem' }}
            />
            <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>{character.originPlanet.description}</p>
          </div>
        )}

       
        {character.transformations?.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', color: '#4caf50' }}>Transformaciones</h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingTop: '1rem' }}>
              {character.transformations.map(t => (
                <div key={t.id} style={{ minWidth: '180px', textAlign: 'center', background: '#222', padding: '1rem', borderRadius: '1rem' }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      backgroundColor: '#000',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#ffca28', fontSize: '1.1rem' }}>{t.name}</p>
                  <p style={{ fontSize: '1rem' }}>Ki: {t.ki}</p>
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