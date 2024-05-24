import React from 'react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Pizza',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrG4Lkx48yGfJGfvqm29xT9sf5AlzJKPH9RgG2yi8aYQ&s',
    price: '€10.99'
  },
  {
    id: 2,
    name: 'Burger',
    image: 'https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg',
    price: '€7.99'
  },
  {
    id: 3,
    name: 'Pasta',
    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg',
    price: '€8.99'
  },
  {
    id: 4,
    name: 'Salad',
    image: 'https://food-images.files.bbci.co.uk/food/recipes/cobb_salad_62368_16x9.jpg',
    price: '€5.99'
  },
  {
    id: 4,
    name: 'Salad',
    image: 'https://food-images.files.bbci.co.uk/food/recipes/cobb_salad_62368_16x9.jpg',
    price: '€5.99'
  },
  {
    id: 4,
    name: 'Salad',
    image: 'https://food-images.files.bbci.co.uk/food/recipes/cobb_salad_62368_16x9.jpg',
    price: '€5.99'
  },
  {
    id: 4,
    name: 'Salad',
    image: 'https://food-images.files.bbci.co.uk/food/recipes/cobb_salad_62368_16x9.jpg',
    price: '€5.99'
  },
  {
    id: 4,
    name: 'Salad',
    image: 'https://food-images.files.bbci.co.uk/food/recipes/cobb_salad_62368_16x9.jpg',
    price: '€5.99'
  },
];

const ProductGrid = () => {
  return (
    <div className='top'>
      <center><h1>Products</h1></center>
      <div className="product-grid">
        
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
