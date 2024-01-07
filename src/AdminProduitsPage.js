import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, CssBaseline, Typography, TextField } from '@mui/material';

const AdminProduitsPage = () => {
  const { selectedCategorie } = useParams();
  const [produits, setProduits] = useState([]);
  const [newProduct, setNewProduct] = useState({
    nom: '',
    prix: 0,
    quantite: 0,
  });

  useEffect(() => {
    // Fetch products when the component mounts
    fetch('http://172.17.39.108:3200/products')
      .then(response => response.json())
      .then(data => setProduits(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddProduct = () => {
    setProduits([...produits, newProduct]);
    setNewProduct({
      nom: '',
      prix: 0,
      quantite: 0,
    });
  };

  const handleRemoveProduct = (productName) => {
    const updatedProduits = produits.filter((product) => product.nom !== productName);
    setProduits(updatedProduits);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Product of category {selectedCategorie} :
        </Typography>
        <div style={{ marginTop: 30 }}>
          {produits.map((product, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>{product.productname}</Typography>
              <Typography>{`Price: ${product.price} Quantity: ${product.quantity}`}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveProduct(product.productname)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1">Add new product :</Typography>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <TextField
              variant="outlined"
              label="Product"
              value={newProduct.nom}
              onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
            />
            <TextField
              variant="outlined"
              label="Price"
              type="number"
              value={newProduct.prix}
              onChange={(e) => setNewProduct({ ...newProduct, prix: Number(e.target.value) })}
            />
            <TextField
              variant="outlined"
              label="Quantity"
              type="number"
              value={newProduct.quantite}
              onChange={(e) => setNewProduct({ ...newProduct, quantite: Number(e.target.value) })}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
              onClick={handleAddProduct}
            >
              ADD
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminProduitsPage;
