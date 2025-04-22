import React from 'react'
import { Card, CardContent, Typography, Grid, Link, Avatar, Box } from '@mui/material'
import './Acercade.css'

// IMPORTAR LAS IMÁGENES CORRECTAMENTE
import juanImg from '../../images/juan.jpeg';
import jorgeImg from '../../images/jorge.jpeg';

const Acercade = () => {
  const profiles = [
    {
      nombre: "Juan Sebastian Rojas Rojas",
      id: "1117484461",
      cumple: "18/12",
      correouni: "juanse.rojas@udla.edu.co",
      correopersonal: "jsrojas203@gmail.com",
      instagram: "https://www.instagram.com/sebastian_rojz2?igsh=MTZhenppYXUwbXA0Mw==",
      facebook: "https://www.facebook.com/share/18mk77Mk8w/",
      tiktok: "https://www.tiktok.com/@juanserojas203?_t=ZS-8v4JjklJ3dy&_r=1",
      grupo: "6",
      curso: "Programación Web",
      image: juanImg,
      github: "https://github.com/juanse203"
    },
    {
      nombre: "Jorge Luis Kuaran Silva",
      id: "1006505435",
      cumple: "11/12",
      correouni: "j.kuaran@udla.edu.co",
      correopersonal: "jluisks12@gmail.com",
      instagram: "https://www.instagram.com/sleepymaster4/",
      facebook: "https://web.facebook.com/The.Sleeper.Master",
      tiktok: "",
      grupo: "",
      curso: "Programación Web",
      image: jorgeImg,
      github: "https://github.com/Sleepy4-esp"
    }
  ];

  const displayField = (value) => value ? value : "No se acuerda";

  return (
    <Box className="acerca-container">
      <Typography variant="h3" align="center" className="acerca-titulo">Sobre Nosotros</Typography>
      <Grid container spacing={4} justifyContent="center">
        {profiles.map((info, idx) => (
          <Grid item xs={12} md={8} key={idx}>
            <Card className="acerca-card">
              <CardContent className="acerca-content">
                <Link href={info.github} target="_blank" rel="noopener noreferrer">
                  <Avatar src={info.image} alt={info.nombre} className="acerca-avatar" />
                </Link>
                <Box className="acerca-info">
                  <Typography variant="h5" className="acerca-nombre">{info.nombre}</Typography>
                  <Typography><strong>Cédula:</strong> <span className="acerca-dato">{displayField(info.id)}</span></Typography>
                  <Typography><strong>Fecha de Cumpleaños:</strong> <span className="acerca-dato">{displayField(info.cumple)}</span></Typography>
                  <Typography><strong>Correo Institucional:</strong> <span className="acerca-dato">{displayField(info.correouni)}</span></Typography>
                  <Typography><strong>Correo Personal:</strong> <span className="acerca-dato">{displayField(info.correopersonal)}</span></Typography>
                  <Typography>
                    <strong>Instagram:</strong> {info.instagram ? <span className="acerca-dato"><Link href={info.instagram} target="_blank" className="acerca-link">Ver perfil</Link></span> : <span className="acerca-dato">N/D</span>}
                  </Typography>
                  <Typography>
                    <strong>Facebook:</strong> {info.facebook ? <span className="acerca-dato"><Link href={info.facebook} target="_blank" className="acerca-link">Ver perfil</Link></span> : <span className="acerca-dato">N/D</span>}
                  </Typography>
                  <Typography>
                    <strong>TikTok:</strong> {info.tiktok ? <span className="acerca-dato"><Link href={info.tiktok} target="_blank" className="acerca-link">Ver perfil</Link></span> : <span className="acerca-dato">No Posee</span>}
                  </Typography>
                  <Typography><strong>Ubicación Semestral:</strong> <span className="acerca-dato">{displayField(info.grupo)}</span></Typography>
                  <Typography><strong>Curso:</strong> <span className="acerca-dato">{displayField(info.curso)}</span></Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Acercade;
