import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d0d0d, #1a1a1a)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#f57c00' }}>
        404
      </Typography>

      <Typography variant="h4" sx={{ mb: 2 }}>
        ¡Oops! Te perdiste en el multiverso.
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
        Esta página no existe o fue destruida por un Kamehameha. Regresa antes de que Freezer la conquiste.
      </Typography>

      <Box
        component="img"
        src="https://media1.tenor.com/m/ffs0wlOe-bsAAAAC/dbz-goku.gif"
        alt="Goku confundido"
        sx={{
          width: '300px',
          maxWidth: '100%',
          borderRadius: 2,
          mb: 4,
          boxShadow: '0 0 20px #f57c00',
        }}
      />

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{
          backgroundColor: '#f57c00',
          color: '#000',
          fontWeight: 'bold',
          px: 4,
          py: 1.5,
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: '#ffa726',
          },
        }}
      >
        Volver al inicio
      </Button>
    </Box>
  );
};

export default Errorpage;
