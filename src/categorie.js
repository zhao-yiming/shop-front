import React from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoriePage = ({ onCategoryClick }) => {
  const categories = ['Jeux', 'Sport', 'Jardin', 'Vêtement', 'Aliment', 'Autre'];//get all existing categories

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Choisissez une catégorie:
        </Typography>
        <div style={{ marginTop: 30 }}>
          {categories.map((category, index) => (
            <Link key={index} to={`/produits/${category}`}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => onCategoryClick(category)}
                style={{ marginTop: 30 }}
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoriePage;