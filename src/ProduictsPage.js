import React, { useState, useEffect } from 'react';

  const ProduictsPage = ({ categorie, onAddToCart }) => {
    const [produits, setProduits] = useState([]);
  
    useEffect(() => {
      fetch(`http://172.17.39.108:3200/products?category=${categorie}`)
        .then(response => response.json())
        .then(data => setProduits(data))
        .catch(error => console.error('Error fetching products:', error));
    }, [categorie]);

    return (
      <div>
        <h1>Products of {categorie} :</h1>
        <ul>
          {produits.map((produit) => (
            <li key={produit.productid}>
              <div>
                <strong>Name:</strong> {produit.productname}
              </div>
              <div>
                <strong>Unit price:</strong> {produit.price} $
              </div>
              <div>
                <strong>Quantity in stock:</strong> {produit.quantity}
              </div>
              <div>
                <img src={produit.productphoto} alt={produit.productname} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              </div>
              <button onClick={() => onAddToCart({ ...produit, quantite: 1 })}>Add to basket</button>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ProduictsPage;
