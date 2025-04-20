import React from 'react';
import { Card, CardContent, Typography, Grid, Link, Avatar, Box } from '@mui/material';

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
      image: "/images/juan.jpg"
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
      image: "/images/jorge.jpg"
    }
  ];

  const displayField = (value) => value ? value : "No se acuerda";

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
      <Typography variant="h3" align="center" sx={{ color: '#ffca28', mb: 4 }}>Sobre Nosotros</Typography>
      <Grid container spacing={4} justifyContent="center">
        {profiles.map((info, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card sx={{ backgroundColor: '#222', color: '#fff' }}>
              <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                  <Avatar src={info.image} alt={info.nombre} sx={{ width: 120, height: 120, mb: 2 }} />
                  <Typography variant="h5" sx={{ color: '#00bcd4' }}>{info.nombre}</Typography>
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={12}><Typography><strong>Cedula:</strong> {displayField(info.id)}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Fecha de Cumpleaños:</strong> {displayField(info.cumple)}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Correo Institucional:</strong> {displayField(info.correouni)}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Correo Personal:</strong> {displayField(info.correopersonal)}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Instagram:</strong> {info.instagram ? <Link href={info.instagram} target="_blank" sx={{ color: '#ffca28' }}>Ver perfil</Link> : "N/D"}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Facebook:</strong> {info.facebook ? <Link href={info.facebook} target="_blank" sx={{ color: '#ffca28' }}>Ver perfil</Link> : "N/D"}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>TikTok:</strong> {info.tiktok ? <Link href={info.tiktok} target="_blank" sx={{ color: '#ffca28' }}>Ver perfil</Link> : "No Posee"}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Ubicación Semestral:</strong> {displayField(info.grupo)}</Typography></Grid>
                  <Grid item xs={12}><Typography><strong>Curso:</strong> {displayField(info.curso)}</Typography></Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Acercade;
