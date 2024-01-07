# React E-Commerce Application

This project is a simple React-based E-Commerce application with features like browsing products, adding them to the cart, and managing products and categories in the admin panel.

## Table of Contents

- [Components](#components)
  - [ProduictsPage](#produictspage)
  - [PanierPage](#panierpage)
  - [TopNavBar](#topnavbar)
  - [CategoriePage](#categoriepage)
  - [App](#app)
  - [AdminProduitsPage](#adminproduitspage)
  - [AdminPage](#adminpage)
- [Installation](#installation)
- [Usage](#usage)
- [Docker](#Docker)


## Components

### ProduictsPage

This component displays a list of products based on the selected category. Users can view product details, prices, and add products to their cart.

### PanierPage

This component shows the user's current orders. Users can increase or decrease the quantity of each product, delete items, and confirm their order.

### TopNavBar

The TopNavBar component serves as the application's navigation bar. It allows users to navigate between different sections of the application, such as the basket, promotions, categories, admin panel, and user-specific features.

### CategoriePage

This component displays a list of categories, allowing users to choose a category to browse products.

### App

The main App component sets up the application's routing and manages the overall state of the application, including the selected tab, category, and user's shopping cart.

### AdminProduitsPage

This component is part of the admin panel and allows administrators to manage products within a specific category. It includes features to add new products and remove existing ones.

### AdminPage

The AdminPage component is part of the admin panel and enables administrators to manage product categories. It includes features to add new categories and remove existing ones.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zhao-yiming/shop-front.git

2. Change to the project directory:

   ```bash
   cd shop-front
   
4. Install dependencies:

   ```bash
    npm install
   
## Usage

Run the application locally:

  ```bash
   npm start
  ```
Access the application in your browser at http://localhost:3000.
  

## Docker

1. Build the Docker image:

  ```bash
  docker build -t shop-front .
  ```

2. Run the Docker container:

  ```bash
  docker run -p 3000:3000 shop-front.
  ```

Access the application in your browser at http://localhost:3000.
