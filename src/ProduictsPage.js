const ProduictsPage = ({ categorie, onAddToCart }) => {
  const produits = [//récuper les produits qui se trouvent dans une catégorie
    { nom: 'Produit 1', prix: 10, quantiteEnStock: 20 },
    { nom: 'Produit 2', prix: 15, quantiteEnStock: 15 },
    { nom: 'Produit 3', prix: 25, quantiteEnStock: 10 },
  ];

  return (
    <div>
      <h1>Product of {categorie} :</h1>
      <ul>
        {produits.map((produit, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {produit.nom}
            </div>
            <div>
              <strong>Unit price:</strong> {produit.prix} $
            </div>
            <div>
              <strong>Quantity in stock:</strong> {produit.quantiteEnStock}
            </div>
            <button onClick={() => onAddToCart(produit)}>Add to basket</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProduictsPage;