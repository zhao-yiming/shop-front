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
      <h1>Your orders :</h1>
      <ul>
        {aggregatedPanier.map((produit, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {produit.nom}
            </div>
            <div>
              <strong>Unit price:</strong> {produit.prix} $
            </div>
            <div>
              <strong>Quantity:</strong> {produit.quantite}
            </div>
            <div>
              <button onClick={() => onIncrease(index)}>+</button>
              <button onClick={() => onDecrease(index)}>-</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
      <div>
        <strong>Total amount :</strong> {totalAmount} $
      </div>
      <button onClick={onConfirmOrder}>Confirme order</button>
    </div>
  );
};

export default PanierPage;