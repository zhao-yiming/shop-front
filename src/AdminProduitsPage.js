import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, CssBaseline, Typography, TextField } from '@mui/material';

const AdminProduitsPage = () => {
  const { selectedCategorie } = useParams();
  const [produits, setProduits] = useState([//get all produict of a categorie (admin use)
    { nom: 'Produit 1', prix: 10, quantite: 2 },
    { nom: 'Produit 2', prix: 15, quantite: 1 },
    { nom: 'Produit 3', prix: 25, quantite: 1 },
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
          Produits de la catégorie {selectedCategorie} :
        </Typography>
        <div style={{ marginTop: 30 }}>
          {produits.map((product, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>{product.nom}</Typography>
              <Typography>{`Prix: ${product.prix} Quantité: ${product.quantite}`}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveProduct(product.nom)}
              >
                Supprimer
              </Button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          <Typography variant="subtitle1">Ajouter un nouveau produit :</Typography>
          <div style={{ display: 'flex', marginTop: 10 }}>
            <TextField
              variant="outlined"
              label="Produit"
              value={newProduct.nom}
              onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
            />
            <TextField
              variant="outlined"
              label="Prix"
              type="number"
              value={newProduct.prix}
              onChange={(e) => setNewProduct({ ...newProduct, prix: Number(e.target.value) })}
            />
            <TextField
              variant="outlined"
              label="Quantité"
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