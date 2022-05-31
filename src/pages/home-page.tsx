import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
      This is Home page
    </Typography>
  </Container>
);

export default HomePage;
