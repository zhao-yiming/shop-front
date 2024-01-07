import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, CssBaseline, Typography, TextField } from '@mui/material';

const AdminPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch('http://172.17.39.108:3200/categories')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      // Utilisez une requête POST pour ajouter une nouvelle catégorie
      fetch('http://172.17.39.108:3200/category/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoryId: '',
          categoryName: newCategory,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Category added successfully:', data);
          // Rafraîchissez la liste des catégories après l'ajout
          fetchCategories();
        })
        .catch(error => console.error('Error adding category:', error));

      setNewCategory('');
    }
  };

  const handleRemoveCategory = (categoryId) => {
    // Utilisez une requête DELETE pour supprimer une catégorie
    fetch(`http://172.17.39.108:3200/category/delete/${categoryId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Category deleted successfully:', data);
        // Rafraîchissez la liste des catégories après la suppression
        fetchCategories();
      })
      .catch(error => console.error('Error deleting category:', error));
  };

  const handleCategoryClick = (category) => {
    navigate(`/admin/product/${category.categoryname}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Choose category:
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
                {category.categoryname}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveCategory(category.categoryid)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1">Add new category:</Typography>
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
