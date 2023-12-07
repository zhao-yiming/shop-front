import React, { useState,useEffect } from 'react';
import TopNavBar from './navbar';
import CategoriePage from './categorie';
import ProduitsPage from './ProduictsPage';
import AdminPage from './admin';
import PanierPage from './PanierPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminProduitsPage from './AdminProduitsPage';


const App = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [selectedCategorie, setSelectedCategorie] = useState('');
    const [panier, setPanier] = useState([]);
  
    useEffect(() => {
      const storedPanier = localStorage.getItem('panier');
      setPanier(storedPanier ? JSON.parse(storedPanier) : []);
    }, []);
  
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
      setSelectedCategorie('');
    };
  
    const handleCategoryClick = (category) => {
      setSelectedCategorie(category);
      setSelectedTab('Produits');
    };
  
    const handleAddToCart = (produit) => {
      const sessionPanier = [...panier, { ...produit, quantite: 1 }];
      setPanier(sessionPanier);
      localStorage.setItem('panier', JSON.stringify(sessionPanier));
    };
  
    const handleIncrease = (index) => {
      const updatedPanier = [...panier];
      updatedPanier[index].quantite += 1;
      setPanier(updatedPanier);
      localStorage.setItem('panier', JSON.stringify(updatedPanier));
    };
  
    const handleDecrease = (index) => {
      const updatedPanier = [...panier];
      if (updatedPanier[index].quantite > 1) {
        updatedPanier[index].quantite -= 1;
        setPanier(updatedPanier);
        localStorage.setItem('panier', JSON.stringify(updatedPanier));
      }
    };
  
    const handleDelete = (index) => {
      const updatedPanier = [...panier];
      updatedPanier.splice(index, 1);
      setPanier(updatedPanier);
      localStorage.setItem('panier', JSON.stringify(updatedPanier));
    };
  
    const handleConfirmOrder = () => {//envoyer la requete de confirmation vers le backend
      console.log('Commande confirmée !');
      setPanier([]);
      localStorage.removeItem('panier');
    };
  

  return (
    <Router>
      <div>
        <TopNavBar onTabChange={handleTabChange}/>
        <Routes>
        <Route path="/" element={ <CategoriePage onCategoryClick={handleCategoryClick} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/produits/:selectedCategorie" element={<AdminProduitsPage />} />
          <Route path="/produits/:selectedCategorie" element={<ProduitsPage categorie={selectedCategorie} onAddToCart={handleAddToCart} />} />
          <Route path="/panier" element={<PanierPage />} />
          <Route path="/categories" element={  <CategoriePage onCategoryClick={handleCategoryClick} />} />
          <Route path="/promo" element={  <ProduitsPage onAddToCart={handleAddToCart}/>} />
          <Route path="/basket" element={<PanierPage panier={panier} onIncrease={handleIncrease} onDecrease={handleDecrease} onDelete={handleDelete} onConfirmOrder={handleConfirmOrder}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;