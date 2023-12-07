const ProduictsPage = ({ categorie, onAddToCart }) => {
  const produits = [//récuper les produits qui se trouvent dans une catégorie
    { nom: 'Produit 1', prix: 10, quantiteEnStock: 20 },
    { nom: 'Produit 2', prix: 15, quantiteEnStock: 15 },
    { nom: 'Produit 3', prix: 25, quantiteEnStock: 10 },
  ];

  return (
    <div>
      <h1>Produits de la catégorie {categorie} :</h1>
      <ul>
        {produits.map((produit, index) => (
          <li key={index}>
            <div>
              <strong>Nom:</strong> {produit.nom}
            </div>
            <div>
              <strong>Prix unitaire:</strong> {produit.prix} $
            </div>
            <div>
              <strong>Quantité en stock:</strong> {produit.quantiteEnStock}
            </div>
            <button onClick={() => onAddToCart(produit)}>Ajouter au panier</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProduictsPage;