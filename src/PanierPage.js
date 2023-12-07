const PanierPage = ({ panier, onIncrease, onDecrease, onDelete, onConfirmOrder }) => {
  const aggregatedPanier = panier.reduce((aggregated, produit) => {
    const existingProduct = aggregated.find((p) => p.nom === produit.nom);

    if (existingProduct) {
      existingProduct.quantite += produit.quantite;
    } else {
      aggregated.push({ ...produit });
    }

    return aggregated;
  }, []);

  const totalAmount = aggregatedPanier.reduce((total, produit) => total + produit.prix * produit.quantite, 0);

  return (
    <div>
      <h1>Votre panier :</h1>
      <ul>
        {aggregatedPanier.map((produit, index) => (
          <li key={index}>
            <div>
              <strong>Nom:</strong> {produit.nom}
            </div>
            <div>
              <strong>Prix unitaire:</strong> {produit.prix} $
            </div>
            <div>
              <strong>Quantité:</strong> {produit.quantite}
            </div>
            <div>
              <button onClick={() => onIncrease(index)}>+</button>
              <button onClick={() => onDecrease(index)}>-</button>
              <button onClick={() => onDelete(index)}>Supprimer</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
      <div>
        <strong>Total à payer :</strong> {totalAmount} $
      </div>
      <button onClick={onConfirmOrder}>Confirmer la commande</button>
    </div>
  );
};

export default PanierPage;