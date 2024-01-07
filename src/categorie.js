import React, { useState, useEffect } from 'react';
import { Button, Container, CssBaseline, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoriePage = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetch('http://172.17.39.108:3200/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []); // Empty dependency array means this effect runs once after the first render

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Choose a category:
        </Typography>
        <div style={{ marginTop: 30 }}>
          {categories.map((category) => (
            <Link key={category.categoryid} to={`/produits/${category.categoryname}`}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => onCategoryClick(category.categoryname)}
                style={{ marginTop: 30 }}
              >
                {category.categoryname}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CategoriePage;
