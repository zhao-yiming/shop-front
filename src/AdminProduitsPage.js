import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, CssBaseline, Typography, TextField } from '@mui/material';

const AdminProduitsPage = () => {
  const { selectedCategorie } = useParams();
  const [produits, setProduits] = useState([//get all produict of a categorie (admin use)
    { nom: 'Product 1', prix: 10, quantite: 2 },
    { nom: 'Product 2', prix: 15, quantite: 1 },
    { nom: 'Product 3', prix: 25, quantite: 1 },
  ]);

  const [newProduct, setNewProduct] = useState({
    nom: '',
    prix: 0,
    quantite: 0,
  });

  const handleAddProduct = () => {
    setProduits([...produits, newProduct]);//add a new produit in a specific categorie (create link produit-categorie)
    setNewProduct({
      nom: '',
      prix: 0,
      quantite: 0,
    });
  };

  const handleRemoveProduct = (productName) => {
    const updatedProduits = produits.filter((product) => product.nom !== productName);//delete a produit in a specific categorie (delete link produit-categorie)
    setProduits(updatedProduits);//delete a produit in a specific categorie (delete link produit-categorie)
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
              <Typography>{product.nom}</Typography>
              <Typography>{`Price: ${product.prix} Quantity: ${product.quantite}`}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveProduct(product.nom)}
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