import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Errorpage.css'; 

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">¡Oops! Te perdiste en el multiverso.</h2>
      <p className="error-description">
        Esta página no existe o fue destruida por un Kamehameha. Regresa antes de que Freezer la conquiste.
      </p>
      <img
        className="error-image"
        src="https://media1.tenor.com/m/ffs0wlOe-bsAAAAC/dbz-goku.gif"
        alt="Goku confundido"
      />
      <button className="error-button" onClick={() => navigate('/')}>
        VOLVER AL INICIO
      </button>
    </div>
  );
};

export default Errorpage;
