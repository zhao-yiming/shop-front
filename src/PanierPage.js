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
        {panier.map((produit, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {produit.productname}
            </div>
            <div>
              <strong>Unit price:</strong> {produit.price} $
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
      
      <button onClick={onConfirmOrder}>Confirm order</button>
    </div>
  );
};

export default PanierPage;