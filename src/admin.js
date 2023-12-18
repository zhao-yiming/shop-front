import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, CssBaseline, Typography, TextField } from '@mui/material';

const AdminPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState(['Game', 'Sport', 'Garden', 'Cloth', 'Food', 'Others']);//get categories
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      setCategories([...categories, newCategory]);//add new categorie
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = categories.filter((cat) => cat !== category);//delete categorie
    setCategories(updatedCategories);//delete categorie
  };

  const handleCategoryClick = (category) => {
    navigate(`/admin/product/${category}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Choose category :
        </Typography>
        <div style={{ marginTop: 30 }}>
          {categories.map((category, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: 10, marginRight: 10 }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveCategory(category)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1">Add new category :</Typography>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <TextField
              variant="outlined"
              label="New category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              onClick={handleAddCategory}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminPage;